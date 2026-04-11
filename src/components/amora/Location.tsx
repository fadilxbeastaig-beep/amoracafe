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
              href="https://www.google.com/maps/place/Amora+Speciality+Cafe%D8%A7%D9%85%D9%88%D8%B1%D8%A7+%D8%B3%D8%A8%D9%8A%D8%B4%D9%84%D8%AA%D9%8A+%D9%83%D8%A7%D9%81%D9%8A%D8%A9%E2%80%AD/@24.1704187,55.1086065,17z/data=!4m14!1m7!3m6!1s0x3e5e4333a6684675:0xb06da0d3ca40c2a6!2zQW1vcmEgU3BlY2lhbGl0eSBDYWZl2KfZhdmI2LHYpyDYs9io2YrYtNmE2KrZiiDZg9in2YHZitip!8m2!3d24.170404!4d55.109615!16s%2Fg%2F11vqvs02rf!3m5!1s0x3e5e4333a6684675:0xb06da0d3ca40c2a6!8m2!3d24.170404!4d55.109615!16s%2Fg%2F11vqvs02rf?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm mt-2"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 lg:h-auto min-h-[320px]">
            <iframe
              src="https://maps.google.com/maps?hl=en&q=24.170404,55.109615&z=17&ie=UTF8&iwloc=B&output=embed"
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
