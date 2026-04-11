import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-40">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">Find Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Visit Amora
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: MapPin, title: "Address", content: "Al Khaznah, Abu Dhabi, UAE" },
              { icon: Phone, title: "Phone", content: "+971 56 758 7578", href: "tel:+971567587578" },
              {
                icon: Clock,
                title: "Hours",
                lines: [
                  "Friday – Sunday: 10:00 AM – 1:00 AM",
                  "Monday – Thursday: 10:00 AM – 12:00 AM",
                ],
              },
            ].map(({ icon: Icon, title, content, href, lines }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  {lines ? (
                    lines.map((l) => (
                      <p key={l} className="text-muted-foreground font-light">{l}</p>
                    ))
                  ) : href ? (
                    <a href={href} className="text-muted-foreground hover:text-primary transition-colors font-light">
                      {content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-light">{content}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://maps.app.goo.gl/odqbJvuU7DWAzm7d6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm mt-2"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 lg:h-auto min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.5!2d55.2!3d23.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4d9b5c8b0001%3A0x1234567890abcdef!2sAmora%20Specialty%20Cafe!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amora Specialty Café location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
