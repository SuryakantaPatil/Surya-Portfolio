import cn from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// Defines the navigation items, including their display name and href for scrolling.
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  // State to track if the user has scrolled, affecting navbar styling.
  const [isScrolled, setIsScrolled] = useState(false);
  // State to manage the open/closed status of the mobile menu.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to add/remove scroll event listener for navbar styling changes.
  useEffect(() => {
    const handleScroll = () => {
      // Sets isScrolled to true if scroll position is beyond 10 pixels.
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup: remove event listener when component unmounts.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Runs once on component mount.

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        // Applies different styling based on scroll state.
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Brand/Logo link to the home section. */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Suryakanta </span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop navigation links, hidden on small screens. */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key} // Unique key for list rendering.
              href={item.href} // Link destination.
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name} {/* Navigation item name. */}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle button, visible only on small screens. */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)} // Toggles mobile menu open state.
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} // Accessibility label.
        >
          {/* Displays X icon when menu is open, Menu icon when closed. */}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        {/* Mobile menu overlay, shown/hidden based on isMenuOpen state. */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            // Controls visibility and pointer events.
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Mobile navigation links within the overlay. */}
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key} // Unique key for list rendering.
                href={item.href} // Link destination.
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Closes menu when a link is clicked.
              >
                {item.name} {/* Navigation item name. */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
