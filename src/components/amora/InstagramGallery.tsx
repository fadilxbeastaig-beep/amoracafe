import { useScrollReveal } from "@/hooks/useScrollReveal";
import cafeSeating from "@/assets/cafe-seating.png";
import cafeCounter from "@/assets/cafe-counter.png";
import cafeDrink from "@/assets/cafe-drink.png";
import cafeBar from "@/assets/cafe-bar.png";

const images = [
  { src: cafeDrink, alt: "Specialty drink at Amora" },
  { src: cafeSeating, alt: "Cozy seating at Amora" },
  { src: cafeBar, alt: "Amora coffee bar" },
  { src: cafeCounter, alt: "Amora counter" },
];

export default function InstagramGallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-40 bg-card">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-4">Gallery</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Inside Amora
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {images.map((img) => (
            <div key={img.alt} className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
