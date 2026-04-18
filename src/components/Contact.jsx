import { Instagram, LucideLinkedin, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import Particles from "../components/ui/Particles";
import ShinyText from "../components/ui/ShinyText";
import { Link } from "react-router-dom";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() || "Portfolio visitor";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:27100445@lums.edu.pk?subject=${subject}&body=${body}`;
    toast({
      title: "Email draft opened",
      description: "This form opens your mail app. A backend or form service is needed for true direct sending.",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={250}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          <ShinyText
            text="Let's connect and build new horizons together."
            speed={3}
            disabled={false}
            className="text-muted-foreground"
          />
        </p>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <a href="mailto:27100445@lums.edu.pk">
                    <Mail className="h-6 w-6 text-primary hover:text-white transition-colors" />
                  </a>
                </div>
                <div>
                  <h4 className="font-medium"> Email </h4>
                  <a
                    href="mailto:27100445@lums.edu.pk"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    27100445@lums.edu.pk
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <a
                    href="https://www.linkedin.com/in/maaz-lums/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LucideLinkedin className="h-6 w-6 text-primary hover:text-white transition-colors" />
                  </a>
                </div>
                <div>
                  <h4 className="font-medium"> LinkedIn </h4>
                  <a
                    href="https://www.linkedin.com/in/maaz-lums/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Maaz Shahid
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <a
                    href="https://www.instagram.com/maaz_shahidd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="h-6 w-6 text-primary hover:text-white transition-colors" />
                  </a>
                </div>
                <div>
                  <h4 className="font-medium"> Instagram </h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="https://www.instagram.com/maaz_shahidd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    maaz_shahidd
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="astana@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="You're breathtaking"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button",
                  "w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} /> Draft Email
              </button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground text-left">
              Reliable website-to-email delivery on Vercel needs a backend or form service such as Resend, Formspree, or EmailJS.
            </p>
          </div>

          {/* Extra Info About Me */}
          <div className="mt-6 text-center">
            <Link
              to="/additional-info#hero"
              className="inline-block px-8 py-4 mt-4 border border-primary rounded-full text-primary hover:bg-primary/10 transition-colors"
            >
              <ShinyText
                text='If you want to know more about who "Maaz" is'
                speed={3}
                disabled={false}
                className="font-semibold text-lg md:text-xl"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
