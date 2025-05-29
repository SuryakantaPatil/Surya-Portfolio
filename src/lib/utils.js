
import { clsx } from 'clsx'; // Imports clsx for conditional class merging.
import { twMerge } from 'tailwind-merge'; // Imports twMerge for resolving Tailwind CSS conflicts.

/**
 * Combines multiple class names into a single string,
 * intelligently handling conditional classes and resolving
 * Tailwind CSS conflicts.
 *
 * @param {...(string | string[] | Record<string, boolean>)} inputs - Class names, arrays of class names, or objects where keys are class names and values are booleans for conditional inclusion.
 * @returns {string} The merged and resolved class name string.
 */
const cn = (...inputs) => {
  return (
    twMerge(clsx(inputs)) // Merges classes with clsx, then resolves Tailwind conflicts with twMerge.
  );
};

export default cn; // Exports the utility function.