import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">Find Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Visit Amora
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">Al Khaznah, Abu Dhabi, UAE</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+971567587578" className="text-muted-foreground hover:text-primary transition-colors">
                  +971 56 758 7578
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">Open Daily until 12:00 AM</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-xl h-80 flex items-center justify-center">
            <div className="text-center space-y-3">
              <MapPin className="h-12 w-12 mx-auto text-primary/30" />
              <p className="text-sm text-muted-foreground font-medium">Al Khaznah, Abu Dhabi</p>
              <p className="text-xs text-muted-foreground">Map view</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
