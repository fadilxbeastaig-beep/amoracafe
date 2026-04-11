import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-40">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase mb-6">Our Story</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-snug">
          Where Quality Meets Warmth
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg font-light">
          Amora Specialty Café brings people together through carefully crafted coffee
          and a warm, welcoming space. Every cup is made with precision, passion,
          and premium ingredients.
        </p>
      </div>
    </section>
  );
}
