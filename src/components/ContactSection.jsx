import { Mail } from "lucide-react";
import React from "react";
import { Instagram, Linkedin, MapPin, Phone, Send } from "lucide-react";
import cn from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  // Hook to display toast notifications.
  const { toast } = useToast();
  // State to manage the submission status of the form.
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to store form input data.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handles changes to form input fields, updating the formData state.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior.

    setIsSubmitting(true); // Sets submission status to true.

    const recipientEmail = "patil.suryakanta98@gmail.com"; // Defines the recipient email address.
    // Encodes the subject line using form data.
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    // Encodes the email body with form data.
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Constructs the mailto URL with pre-filled subject and body.
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Redirects the browser to the mailto link, opening the user's default mail client.
    window.location.href = mailtoLink;

    // Simulates a delay for user feedback before showing toast and resetting form.
    setTimeout(() => {
      toast({
        title: "Mail client opened!",
        description: "Please send the email from your mail client.",
      });
      setIsSubmitting(false); // Resets submission status.

      // Clears the form fields.
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        {/* Section description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to discussing new
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              {/* Email contact detail */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    patil.suryakanta98@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone contact detail */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+81234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +81 ----7890
                  </a>
                </div>
              </div>
              {/* Location contact detail */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Tokyo, Japan
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                {/* LinkedIn profile link */}
                <a
                  href="https://www.linkedin.com/in/suryakanta-salunkhe-794442214/"
                  target="_blank"
                  rel="noopener noreferrer" // Security best practice
                >
                  <Linkedin />
                </a>
                {/* Instagram profile link */}
                <a
                  href="https://www.instagram.com/_sungirl_surya_?igsh=aDIza2hidHljc21q&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer" // Security best practice
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name input field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name} // Controlled component value
                  onChange={handleChange} // Handles input changes
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Suryakanta Salunkhe.."
                />
              </div>

              {/* Email input field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email} // Controlled component value
                  onChange={handleChange} // Handles input changes
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="surya@gmail.com"
                />
              </div>

              {/* Message textarea field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message} // Controlled component value
                  onChange={handleChange} // Handles input changes
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit button for the form */}
              <button
                type="submit"
                disabled={isSubmitting} // Disables button during submission
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Opening Mail..." : "Send Message"}{" "}
                {/* Changes text based on submission status */}
                <Send size={16} /> {/* Send icon */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
