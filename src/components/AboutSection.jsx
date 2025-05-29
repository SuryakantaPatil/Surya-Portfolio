import { Briefcase, Code, User } from "lucide-react"; // Importing icons from lucide-react

const AboutSection = () => {
  return (
    // Main section for "About Me" content, with padding and relative positioning.
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Grid layout for two columns: text content and skill/experience cards. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: About Me text and call-to-action buttons. */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Japanese Bilingual Frontend Web Developer
            </h3>

            {/* Paragraph describing experience and specialization. */}
            <p className="text-muted-foreground">
              I am JLPT N2 Certified Bilingual Developer With over 4 years of
              experience in web development, I specialize in creating
              responsive, accessible, and performant web applications using
              modern technologies.
            </p>

            {/* Paragraph detailing process transition and communication skills. */}
            <p className="text-muted-foreground">
              Expert in Application Development Process Transition, ensuring
              knowledge transfers, workflow optimization, and smooth system
              handovers. Strong problem-solving and communication skills,
              effectively working in multicultural environments and bridging
              technical and linguistic gaps
            </p>
            {/* Call-to-action buttons for "Get In Touch" and "Download CV". */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* "Get In Touch" button linking to the contact section. */}
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              {/* "Download CV" button.
                  - href: Specifies the path to the PDF file (assumes it's in the public folder).
                  - download: Prompts the browser to download the file with the specified filename.
                  - target="_blank": Opens the PDF in a new browser tab.
                  - rel="noopener noreferrer": Security best practice for links opening in new tabs. */}
              <a
                href="/Suryakanta Salunkhe CV 2025_EN.pdf" // Path to the CV PDF
                download="Suryakanta Salunkhe CV 2025_EN.pdf" // Suggested filename for download
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security attribute
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right column: Grid of experience/skill cards. */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card for Web Development expertise. */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />{" "}
                  {/* Icon for Web Development */}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            {/* Card for Application Development Senior Analyst role. */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />{" "}
                  {/* Icon for user/analyst role */}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Application Development Senior Analyst
                  </h4>
                  <p className="text-muted-foreground">
                    Designed, developed, and implemented scalable and efficient
                    web applications in Collaboration with cross-functional
                    teams to enhance system architecture and performance.
                  </p>
                </div>
              </div>
            </div>
            {/* Card for Japanese Bilingual capability. */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />{" "}
                  {/* Icon for professional skill */}
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Japanese Bilingual</h4>
                  <p className="text-muted-foreground">
                    Experience to work in Japanese Environment and it's
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
