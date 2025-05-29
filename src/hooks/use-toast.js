

import * as React from "react";

// Defines the maximum number of toasts that can be displayed simultaneously.
const TOAST_LIMIT = 1;
// Defines the delay in milliseconds before a dismissed toast is removed from the DOM.
const TOAST_REMOVE_DELAY = 1000000; // This is a very long delay (approx. 16.6 minutes)

// Counter for generating unique toast IDs.
let count = 0;

// Generates a unique ID for each toast.
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER; // Ensures the count wraps around to prevent overflow.
  return count.toString();
}

// A Map to store timeouts for dismissing toasts, keyed by toastId.
const toastTimeouts = new Map();

// Adds a toast to the removal queue after a specified delay.
const addToRemoveQueue = (toastId) => {
  // If a timeout for this toast already exists, do nothing.
  if (toastTimeouts.has(toastId)) {
    return;
  }

  // Sets a timeout to dispatch a REMOVE_TOAST action.
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId); // Removes the timeout from the map.
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout); // Stores the timeout ID in the map.
};

// Reducer function to manage toast state based on dispatched actions.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        // Adds the new toast to the beginning of the array and limits the total number of toasts.
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        // Updates an existing toast by merging its properties.
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // If a specific toastId is provided, add only that toast to the remove queue.
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        // If no toastId is provided, add all current toasts to the remove queue.
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        // Marks the dismissed toast(s) as closed (open: false).
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      // If no toastId is provided, clear all toasts.
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      // Removes a specific toast from the state.
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state; // Return current state if action type is not recognized
  }
};

// Array to hold listener functions that get called when the toast state changes.
const listeners = [];

// The in-memory state for toasts, acting as a global store.
let memoryState = { toasts: [] };

// Dispatches an action to update the toast state and notifies all listeners.
function dispatch(action) {
  memoryState = reducer(memoryState, action); // Updates the state using the reducer.
  listeners.forEach((listener) => {
    listener(memoryState); // Calls each listener with the new state.
  });
}

// Function to create and display a new toast.
function toast(props) {
  const id = genId(); // Generates a unique ID for the new toast.

  // Function to update an existing toast.
  const update = (props) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  // Function to dismiss a toast.
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  // Dispatches the ADD_TOAST action to add the new toast to the state.
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true, // Toast is initially open.
      onOpenChange: (open) => {
        // If the toast is closed (e.g., by user interaction), dismiss it.
        if (!open) dismiss();
      },
    },
  });

  // Returns methods to interact with the newly created toast.
  return {
    id: id,
    dismiss,
    update,
  };
}

// Custom React hook to manage and interact with toast notifications.
function useToast() {
  // Component state mirrors the global memoryState.
  const [state, setState] = React.useState(memoryState);

  // Effect to subscribe and unsubscribe the component to state changes.
  React.useEffect(() => {
    listeners.push(setState); // Adds setState to listeners array on mount.
    return () => {
      // Cleans up by removing setState from listeners on unmount.
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]); // Re-runs if 'state' changes (though typically 'setState' itself is stable).

  // Returns the current toast state and methods to interact with toasts.
  return {
    ...state,
    toast, // Function to create a new toast.
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }), // Function to dismiss a specific toast.
  };
}

// Exports the useToast hook and the toast function.
export { useToast, toast };