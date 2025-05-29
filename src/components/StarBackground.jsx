import { useEffect, useState } from "react";

//  id, size, x, y, opacity, animationDuration
//  id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  // State to hold the array of star objects with their properties
  const [stars, setStars] = useState([]);
  // State to hold the array of meteor objects with their properties
  const [meteors, setMeteors] = useState([]);

  // useEffect hook to initialize stars and meteors on component mount
  // and handle window resize events for responsive star generation.
  useEffect(() => {
    generateStars(); // Initial star generation
    generateMeteors(); // Initial meteor generation

    // Event listener for window resize to regenerate stars
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Generates a dynamic number of stars based on window dimensions
  const generateStars = () => {
    // Calculate number of stars proportionally to screen area
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // Unique ID for React key
        size: Math.random() * 3 + 1, // Random size between 1px and 4px
        x: Math.random() * 100, // Random X position (0-100%)
        y: Math.random() * 100, // Random Y position (0-100%)
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Random pulse animation duration between 2s and 6s
      });
    }
    setStars(newStars); // Update stars state
  };

  // Generates a fixed number of meteor objects
  const generateMeteors = () => {
    const numberOfMeteors = 4; // Fixed number of meteors
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, // Unique ID for React key
        size: Math.random() * 2 + 1, // Random size affecting width and height
        x: Math.random() * 100, // Random X starting position (0-100%)
        y: Math.random() * 20, // Random Y starting position (0-20%)
        delay: Math.random() * 15, // Random animation delay
        animationDuration: Math.random() * 3 + 3, // Random animation duration between 3s and 6s
      });
    }
    setMeteors(newMeteors); // Update meteors state
  };

  return (
    // Container for the background elements, fixed to cover the screen
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render stars */}
      {stars.map((star) => (
        <div
          key={star.id} // Unique key for list rendering
          className="star animate-pulse-subtle" // Base styling and subtle pulse animation
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Render meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id} // Unique key for list rendering
          className="meteor animate-meteor" // Base styling and meteor animation
          style={{
            width: meteor.size * 50 + "px", // Dynamic width based on size
            height: meteor.size * 2 + "px", // Dynamic height based on size
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay, // Animation start delay
            animationDuration: meteor.animationDuration + "s", // Animation duration
          }}
        />
      ))}
    </div>
  );
};
