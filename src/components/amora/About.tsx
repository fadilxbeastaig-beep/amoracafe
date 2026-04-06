import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Coffee, Heart, Leaf, Star } from "lucide-react";

const highlights = [
  { icon: Coffee, label: "V60 & Chemex" },
  { icon: Star, label: "Cortado & Spanish Latte" },
  { icon: Leaf, label: "Ethiopian Beans" },
  { icon: Heart, label: "Handcrafted" },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image placeholder */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <Coffee className="h-16 w-16 mx-auto text-primary/40" />
                <p className="text-sm text-muted-foreground font-medium">Cozy Cafe Interior</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
            <p className="font-display text-3xl font-bold text-primary">5+</p>
            <p className="text-sm text-muted-foreground">Years of Passion</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Where Quality Meets Warmth
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
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
                className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:shadow-md transition-shadow"
              >
                <div className="p-2 rounded-lg bg-primary/10">
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
