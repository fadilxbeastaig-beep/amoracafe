import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-40 bg-secondary/30">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4">Find Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Visit <span className="italic font-normal">Amora</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            {[
              { icon: MapPin, title: "Address", content: "Al Khaznah, Abu Dhabi, UAE" },
              { icon: Phone, title: "Phone", content: "+971 56 758 7578", href: "tel:+971567587578" },
              { icon: Clock, title: "Hours", content: "Open Daily until 12:00 AM" },
            ].map(({ icon: Icon, title, content, href }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{title}</h3>
                  {href ? (
                    <a href={href} className="text-muted-foreground hover:text-primary transition-colors text-lg font-light">{content}</a>
                  ) : (
                    <p className="text-muted-foreground text-lg font-light">{content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-2xl h-80 lg:h-auto flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="h-16 w-16 mx-auto text-primary/20" />
              <p className="font-display text-lg text-foreground font-medium">Al Khaznah, Abu Dhabi</p>
              <p className="text-sm text-muted-foreground">Map view</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
