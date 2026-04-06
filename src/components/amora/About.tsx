import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Coffee, Heart, Leaf, Star } from "lucide-react";
import aboutImg from "@/assets/about-interior.jpg";

const highlights = [
  { icon: Coffee, label: "V60 & Chemex" },
  { icon: Star, label: "Cortado & Spanish Latte" },
  { icon: Leaf, label: "Ethiopian Beans" },
  { icon: Heart, label: "Handcrafted" },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-40 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={aboutImg}
              alt="Amora Cafe cozy interior"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-2xl p-6 shadow-2xl border border-border backdrop-blur-sm">
            <p className="font-display text-4xl font-bold text-primary">5+</p>
            <p className="text-sm text-muted-foreground mt-1">Years of Passion</p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-4">Our Story</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Where Quality
              <br />
              <span className="italic font-normal">Meets Warmth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              At Amora, we believe every cup tells a story. Known for our friendly staff,
              relaxing atmosphere, and high-quality specialty coffee, we've become
              Al Khaznah's favorite spot for coffee lovers. From our signature V60 brewed
              with Ethiopian beans to our beloved cortado and Spanish latte — every sip
              is crafted with care and passion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-card rounded-2xl p-5 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
