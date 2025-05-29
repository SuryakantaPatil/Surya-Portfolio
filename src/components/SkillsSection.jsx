import React, { useState } from "react";
import cn from "../lib/utils";

// Defines the array of skill objects, each with a name, proficiency level, and category.
const skills = [
  // Frontend technologies
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" },

  // Backend technologies
  { name: "Node.js", level: 40, category: "backend" },
  { name: "MySQL", level: 60, category: "backend" },
  { name: "Oracle", level: 50, category: "backend" },

  // Development tools and platforms
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "WebStorm", level: 70, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jira", level: 70, category: "tools" },
  { name: "Rally", level: 70, category: "tools" },
  { name: "Jp1", level: 70, category: "tools" },
  { name: "DSM", level: 70, category: "tools" },
  { name: "Service Now", level: 70, category: "tools" },
];

// Defines the available skill categories for filtering, including "all".
const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  // State to manage the currently active skill category filter.
  const [activeCategory, setActiveCategory] = useState("all");

  // Filters the skills array based on the active category.
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key} // Unique key for list rendering
              onClick={() => setActiveCategory(category)} // Updates the active category on click
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                // Apply active styles if the category matches the active one
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category} {/* Displays the category name */}
            </button>
          ))}
        </div>

        {/* Grid display for filtered skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key} // Unique key for list rendering
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>{" "}
                {/* Skill name */}
              </div>
              {/* Skill proficiency progress bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }} // Sets width based on skill level
                />
              </div>

              {/* Skill proficiency percentage */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
