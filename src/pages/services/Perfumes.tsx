
import { Sparkles, Star, Gift, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Perfumes = () => {
  const mensPerfumes = [
    "Versace Eros", "Dior Sauvage", "Tom Ford Oud Wood", "Creed Aventus",
    "Bleu de Chanel", "Armani Code", "Paco Rabanne 1 Million", "Hugo Boss Bottled"
  ];

  const womensPerfumes = [
    "Chanel No. 5", "Dior J'adore", "Tom Ford Black Orchid", "Versace Bright Crystal",
    "Yves Saint Laurent Black Opium", "Lancôme La Vie Est Belle", "Marc Jacobs Daisy", "Dolce & Gabbana Light Blue"
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exclusive <span className="text-kamalo-red">Perfume Collection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our curated selection of premium fragrances at Kamalo City. From classic scents to contemporary blends, find your signature fragrance in the heart of Goodwood.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png"
                alt="Perfume Collection"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Premium Fragrances & Scents</h2>
              <p className="text-gray-300 mb-4">
                Our perfume collection features carefully selected fragrances from renowned brands alongside unique African-inspired scents. Whether you're looking for something bold and exotic or subtle and elegant, we have the perfect fragrance for every personality.
              </p>
              <p className="text-gray-300 mb-6">
                Each fragrance in our collection is chosen for its quality, longevity, and distinctive character. Visit us to experience these scents in person and find your perfect match.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-kamalo-red" />
                  <span>Premium Brands</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Unique Scents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-kamalo-red" />
                  <span>Gift Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Perfumes Collection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Perfume Collection</h2>
            
            {/* Men's Perfumes */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-kamalo-red">Men's Collection</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mensPerfumes.map((perfume, index) => (
                  <div key={index} className="bg-black/50 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-white">{perfume}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Women's Perfumes */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-kamalo-red">Women's Collection</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {womensPerfumes.map((perfume, index) => (
                  <div key={index} className="bg-black/50 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-white">{perfume}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fragrance Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Sparkles className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Designer Fragrances</h3>
                <p className="text-gray-300">Premium international brands and luxury scents for special occasions</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Star className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">African-Inspired</h3>
                <p className="text-gray-300">Unique fragrances inspired by African botanicals and traditional scents</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Gift className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Unisex Collection</h3>
                <p className="text-gray-300">Versatile fragrances perfect for anyone, suitable for day or night wear</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Find Your <span className="text-kamalo-red">Signature Scent</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Visit our perfume collection at Kamalo City and let our team help you discover the perfect fragrance for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Call Us: +27 73 159 8909
              </a>
              <a
                href="/contact"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
      <Footer />
    </div>
  );
};

export default Perfumes;
