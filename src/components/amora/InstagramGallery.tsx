import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram } from "lucide-react";

export default function InstagramGallery() {
  const { ref, isVisible } = useScrollReveal();
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="group aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden hover:shadow-xl transition-all duration-500 flex items-center justify-center cursor-pointer"
            >
              <Instagram className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Instagram className="h-5 w-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
