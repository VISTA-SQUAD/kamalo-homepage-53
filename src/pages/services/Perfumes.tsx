
import { Wind, Star, Gift, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Perfumes = () => {
  const faqs = [
    {
      question: "What types of perfumes do you sell?",
      answer: "We offer a curated selection of unique and exotic perfumes, including African-inspired scents, international brands, and exclusive fragrances you won't find elsewhere."
    },
    {
      question: "Can I test perfumes before buying?",
      answer: "Absolutely! We encourage customers to test our fragrances before purchase. Our staff can help you find the perfect scent that matches your personality."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we provide beautiful gift wrapping services perfect for special occasions. Let us know if you're purchasing a gift and we'll make it extra special."
    },
    {
      question: "Are your perfumes authentic?",
      answer: "All our perfumes are 100% authentic and sourced directly from reputable suppliers. We guarantee the quality and authenticity of every fragrance we sell."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-kamalo-red">Exotic</span> Perfumes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover your signature scent with our exclusive collection of unique and exotic perfumes from around the world.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
                alt="Perfume Collection"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Signature Scents</h2>
              <p className="text-gray-300 mb-4">
                Step into our carefully curated world of fragrances where each perfume tells a story. Our collection features unique and exotic scents that capture the essence of different cultures and traditions, with a special focus on African-inspired fragrances.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're looking for something bold and adventurous or subtle and elegant, our perfume collection offers something special for every personality and occasion.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Wind className="w-6 h-6 text-kamalo-red" />
                  <span>Exotic Scents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-kamalo-red" />
                  <span>Gift Wrapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-kamalo-red" />
                  <span>Unique Selection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fragrance Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Fragrance Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Wind className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">African Heritage</h3>
                <p className="text-gray-300">Traditional scents inspired by African botanicals and spices</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Sparkles className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Oriental Blends</h3>
                <p className="text-gray-300">Rich, exotic fragrances from the Middle East and Asia</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Star className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Designer Brands</h3>
                <p className="text-gray-300">International luxury and niche fragrance houses</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Gift className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Unisex Options</h3>
                <p className="text-gray-300">Versatile fragrances perfect for anyone</p>
              </div>
            </div>
          </div>

          {/* Featured Collections */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-4">Spice Route Collection</h3>
                <p className="text-gray-300 mb-4">Journey through the ancient spice routes with fragrances featuring cardamom, saffron, and exotic woods.</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Cardamom & Rose</li>
                  <li>• Saffron Dreams</li>
                  <li>• Sandalwood Mystique</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-4">African Sunset Series</h3>
                <p className="text-gray-300 mb-4">Capture the magic of African landscapes with these nature-inspired fragrances.</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Baobab Breeze</li>
                  <li>• Savanna Bloom</li>
                  <li>• Desert Mirage</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-4">Urban Elegance Line</h3>
                <p className="text-gray-300 mb-4">Sophisticated scents perfect for the modern professional and city dweller.</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Metropolitan Musk</li>
                  <li>• City Lights</li>
                  <li>• Executive Essence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-black/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-kamalo-red mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Find Your <span className="text-kamalo-red">Signature Scent</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Visit us today to explore our unique perfume collection and discover a fragrance that's perfectly you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call Us: +27 73 159 8909
              </a>
              <a
                href="/contact"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Perfumes;
