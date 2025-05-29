import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    // Main section container for the hero content.
    // It's set to take at least the full viewport height and centers its content.
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Container for the main text content, ensuring it's centered and has a max width. */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Main heading with staggered fade-in animations for each part of the name. */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Suryakanta
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Salunkhe
            </span>
          </h1>
          {/* Subtitle/description with a delayed fade-in animation. */}
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            IT Professional | Bilingual Frontend Developer | JLPT N2 Certified{" "}
            Specializing in front-end development with Modern Technologies like
            React
          </p>

          {/* Call to action button with a delayed fade-in animation. */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      {/* Scroll indicator with an animated bouncing arrow. */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
