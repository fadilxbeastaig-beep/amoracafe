import Navbar from "@/components/amora/Navbar";
import Hero from "@/components/amora/Hero";
import About from "@/components/amora/About";
import WhyChooseUs from "@/components/amora/WhyChooseUs";
import MenuSection from "@/components/amora/MenuSection";
import Reviews from "@/components/amora/Reviews";
import Experience from "@/components/amora/Experience";
import InstagramGallery from "@/components/amora/InstagramGallery";
import Location from "@/components/amora/Location";
import Footer from "@/components/amora/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <MenuSection />
      <Reviews />
      <Experience />
      <InstagramGallery />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;