import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImg from "@/assets/cafe-seating.png";
import counterImg from "@/assets/cafe-counter.png";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl">
            <img
              src={aboutImg}
              alt="Amora Café cozy seating area"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 lg:-right-8 w-40 h-40 rounded-[20px] overflow-hidden shadow-2xl border-4 border-background">
            <img
              src={counterImg}
              alt="Amora Café counter"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase mb-4">Our Story</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Where Quality
              <br />
              <span className="italic font-normal">Meets Warmth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Amora Specialty Café was created to bring people together through exceptional coffee,
              warm ambiance, and unforgettable moments. Every cup is crafted with precision, passion,
              and premium ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}