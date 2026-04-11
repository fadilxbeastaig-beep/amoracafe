
import { Button } from "@/components/ui/button";
import newHeroImg from "@/assets/amora-hero-new.png";

export default function Hero() {
  const today = new Date().getDay();
  const fridayToSunday = today === 5 || today === 6 || today === 0;
  const todaysHours = fridayToSunday ? "10:00 AM - 1:00 AM" : "10:00 AM - 12:00 AM";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(164,124,76,0.10),_transparent_28%),linear-gradient(135deg,_#f6efe5_0%,_#efe4d4_52%,_#f6eee3_100%)] pt-14 pb-0"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b99263]/50 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#b99263]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#6f8a65]/10 blur-3xl" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 md:px-12 flex-1 min-h-[700px] pt-22 md:pt-24">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-[40rem]">
          <span className="mb-3 inline-flex rounded-full border border-[#c9ae88] bg-[#f4e8d7]/92 px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#305f45] shadow-[0_10px_24px_rgba(95,64,31,0.08)] whitespace-nowrap">
            SPECIALTY CAFÉ · AL KHAZNAH, ABU DHABI
          </span>
          <span className="mb-4 inline-flex items-center rounded-full border border-[#d9c3a3] bg-[#fbf5ec]/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#8c6844] shadow-sm">
            Brewed with intent
          </span>
          <h1 className="font-display text-[4.4rem] font-semibold leading-[0.92] tracking-[-0.04em] text-[#241d18] sm:text-[5.5rem] lg:text-[7.2rem]">
            Made for<br />
            Your <span className="text-[#24714d]">Everyday.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#6f6051] sm:text-xl">
            Freshly brewed coffee, handcrafted drinks, and quick bites — ready when you are.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 h-16 rounded-full border border-[#b99263] bg-[#f7efe3] px-10 text-lg font-semibold text-[#234f39] shadow-[0_16px_40px_rgba(92,66,34,0.14)] transition-all duration-200 hover:bg-[#f1e2cc] hover:text-[#173928]"
            asChild
          >
            <a href="#menu">View Menu</a>
          </Button>
        </div>

        {/* Right: Image Card */}
        <div className="flex flex-1 items-center justify-center relative w-full lg:justify-end">
          <div className="relative w-full max-w-[32rem]">
            <div className="absolute -inset-4 rounded-[2.4rem] bg-gradient-to-br from-[#d6bb95]/35 via-transparent to-[#58735a]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d8c4a8] bg-[#f4e6d5] shadow-[0_30px_80px_rgba(88,58,29,0.18)]">
              <div className="overflow-hidden rounded-[2.2rem]">
                <img
                  src={newHeroImg}
                  alt="Amora Specialty Cafe"
                  className="h-[38rem] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-0 rounded-[1.1rem] border border-white/50 bg-[#f8f0e4]/85 px-5 py-3 shadow-[0_18px_45px_rgba(84,58,30,0.16)] backdrop-blur-md md:-left-6">
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#8c6844]">Today's Hours</span>
            <span className="mt-1.5 block font-sans text-[1.1rem] font-semibold leading-none text-[#1f513a]">{todaysHours}</span>
          </div>

          <div className="absolute -right-5 top-10 hidden rounded-full border border-[#dbc4a2] bg-[#f8efe2]/80 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#7b5d3e] shadow-md backdrop-blur-sm xl:block">
            Since 2021
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="container mx-auto mt-16 px-4 md:px-8 pb-12">
        <div className="flex flex-col gap-8 border-t border-[#d9c7b0] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-sans text-[2.2rem] font-semibold text-[#241d18]">4.5★</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8a7a67]">Google Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-sans text-[2.2rem] font-semibold text-[#241d18]">35+</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8a7a67]">Happy Reviews</span>
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <span className="font-sans text-[2.2rem] font-semibold text-[#241d18]">Daily</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#8a7a67]">Fresh Bakes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
