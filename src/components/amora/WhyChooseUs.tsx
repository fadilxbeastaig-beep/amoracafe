import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Coffee, ChefHat, Armchair, Leaf } from "lucide-react";

const reasons = [
  { icon: Coffee, title: "Specialty Beans", desc: "Sourced from the finest single-origin farms around the world." },
  { icon: ChefHat, title: "Expert Baristas", desc: "Trained professionals who craft every cup with precision." },
  { icon: Armchair, title: "Cozy Atmosphere", desc: "A warm, inviting space designed for comfort and relaxation." },
  { icon: Leaf, title: "Premium Ingredients", desc: "Only the freshest, highest-quality ingredients in every item." },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-40 bg-secondary/40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase mb-4">Why Amora</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Why Choose <span className="italic font-normal">Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group glass-card rounded-[20px] p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}