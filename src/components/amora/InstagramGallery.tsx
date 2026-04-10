import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram } from "lucide-react";
import cafeDrink from "@/assets/cafe-drink.png";
import cafeBar from "@/assets/cafe-bar.png";
import cafeSeating from "@/assets/cafe-seating.png";
import cafeCounter from "@/assets/cafe-counter.png";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";

const images = [cafeDrink, cafeBar, cafeSeating, cafeCounter, insta1, insta2];

export default function InstagramGallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase mb-4">Gallery</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Follow Our <span className="italic font-normal">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="group aspect-square rounded-[20px] overflow-hidden cursor-pointer relative"
            >
              <img
                src={src}
                alt={`Amora café gallery ${i + 1}`}
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