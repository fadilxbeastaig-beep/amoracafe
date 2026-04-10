import { useScrollReveal } from "@/hooks/useScrollReveal";
import dineinImg from "@/assets/experience-dinein.jpg";
import driveImg from "@/assets/experience-drive.jpg";
import studyImg from "@/assets/experience-study.jpg";

const experiences = [
  { title: "Dine In", desc: "Relax in our beautifully designed space with warm lighting and cozy seating.", image: dineinImg },
  { title: "Drive Through", desc: "Grab your favorite brew on the go — quick, fresh, and perfectly made.", image: driveImg },
  { title: "Work & Study", desc: "A calm environment with great Wi-Fi — your perfect productivity spot.", image: studyImg },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase mb-4">The Experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Your Space, <span className="italic font-normal">Your Way</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((e) => (
            <div
              key={e.title}
              className="group rounded-[24px] overflow-hidden glass-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{e.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}