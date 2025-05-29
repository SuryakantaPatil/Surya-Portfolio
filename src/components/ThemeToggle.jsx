import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import cn from "@/lib/utils";

export const ThemeToggle = () => {
  // State to manage the current theme mode (dark/light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply stored theme on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      // Default to light theme if no preference or not dark
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []); // Runs once on component mount

  // Function to toggle the theme
  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {/* Renders Sun icon for dark mode, Moon icon for light mode */}
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
