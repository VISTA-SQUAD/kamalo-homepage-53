
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStory from "@/components/IntroStory";
import AmbiancePreview from "@/components/AmbiancePreview";
import OurCuisine from "@/components/OurCuisine";
import LiveEventsServices from "@/components/LiveEventsServices";
import BookingCTA from "@/components/BookingCTA";
import GalleryCTA from "@/components/GalleryCTA";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <Hero />
      <IntroStory />
      <AmbiancePreview />
      <OurCuisine />
      <LiveEventsServices />
      <BookingCTA />
      <GalleryCTA />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
