import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActionCards from "@/components/ActionCards";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <Hero />
      <ActionCards />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;