import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Store, Car, BookOpen } from "lucide-react";

const experiences = [
  {
    icon: Store,
    title: "Dine In",
    desc: "Relax in our beautifully designed space with warm lighting and cozy seating.",
  },
  {
    icon: Car,
    title: "Drive Through",
    desc: "Grab your favorite brew on the go — quick, fresh, and perfectly made.",
  },
  {
    icon: BookOpen,
    title: "Work & Study",
    desc: "A calm environment with great Wi-Fi — your perfect productivity spot.",
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">The Amora Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Your Space, Your Way
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((e, i) => (
            <div
              key={e.title}
              className="group text-center bg-card border border-border rounded-2xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <e.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{e.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
