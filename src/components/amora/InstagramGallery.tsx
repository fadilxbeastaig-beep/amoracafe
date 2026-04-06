import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram } from "lucide-react";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const images = [insta1, insta2, insta3, insta4, insta5, insta6];

export default function InstagramGallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4">Gallery</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="group aspect-square rounded-3xl overflow-hidden cursor-pointer relative"
            >
              <img
                src={src}
                alt={`Amora cafe gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-lg"
          >
            <Instagram className="h-5 w-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
