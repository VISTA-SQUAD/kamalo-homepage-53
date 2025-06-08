
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wind, Scissors, Sparkles } from "lucide-react";

const ServicesGallery = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span className="text-kamalo-red">Services</span> Gallery
        </h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Discover our range of services designed to enhance your visit. From professional grooming at our barbershop 
            to relaxing hookah sessions and exclusive perfume selections, Kamalo City offers more than just dining.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link 
            to="/services/perfumes" 
            className="bg-black/50 rounded-lg p-8 text-center hover:border-kamalo-red border border-gray-800 transition-all duration-300 group"
          >
            <Sparkles className="w-16 h-16 text-kamalo-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-kamalo-red transition-colors">Perfumes</h3>
            <p className="text-gray-300">Premium fragrances and scents collection</p>
            <Button className="mt-4 bg-kamalo-red hover:bg-red-600">View Gallery</Button>
          </Link>

          <Link 
            to="/services/barber-next-door" 
            className="bg-black/50 rounded-lg p-8 text-center hover:border-kamalo-red border border-gray-800 transition-all duration-300 group"
          >
            <Scissors className="w-16 h-16 text-kamalo-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-kamalo-red transition-colors">Barbershop</h3>
            <p className="text-gray-300">Professional cuts and grooming services</p>
            <Button className="mt-4 bg-kamalo-red hover:bg-red-600">View Gallery</Button>
          </Link>

          <Link 
            to="/services/hookah-lounge" 
            className="bg-black/50 rounded-lg p-8 text-center hover:border-kamalo-red border border-gray-800 transition-all duration-300 group"
          >
            <Wind className="w-16 h-16 text-kamalo-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-kamalo-red transition-colors">Hookah Lounge</h3>
            <p className="text-gray-300">Premium shisha experience and flavors</p>
            <Button className="mt-4 bg-kamalo-red hover:bg-red-600">View Gallery</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for images */}
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Barbershop Photo</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Hookah Lounge Photo</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Perfumes Photo</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesGallery;
