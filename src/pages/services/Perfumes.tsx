import { Wind, Star, Gift, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Perfumes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What kind of perfumes do you sell?",
      answer: "Long-lasting oil-based scents for men and women."
    },
    {
      question: "Are these perfumes available online?",
      answer: "Not yet — in-store only."
    },
    {
      question: "Can I try a perfume before I buy?",
      answer: "Yes — testers available."
    },
    {
      question: "What are the best-selling scents?",
      answer: "We'll show you when you visit."
    },
    {
      question: "Are the perfumes oil or alcohol-based?",
      answer: "Oil-based — very strong and long-lasting."
    },
    {
      question: "Can I get a custom scent made?",
      answer: "Yes — now available."
    },
    {
      question: "Do you offer bundles or gift sets?",
      answer: "Yes — we often have combo specials."
    },
    {
      question: "Where in the restaurant are they sold?",
      answer: "Inside the barbershop."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div ref={sectionRef} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-kamalo-red">Designer-Inspired</span> Fragrances
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your signature scent at Kamalo City. We stock a rotating collection of designer-inspired perfumes that are long-lasting, oil-based, and ultra-affordable.
            </p>
          </div>

          {/* Service Description */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
                alt="Perfume Collection"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Designer-Inspired Fragrances in Cape Town</h2>
              <p className="text-gray-300 mb-4">
                Perfect for gifts or personal use, our fragrances are available right inside our restaurant for convenient shopping in Goodwood, Cape Town. Our collection features long-lasting, oil-based scents that rival expensive designer brands.
              </p>
              <p className="text-gray-300 mb-6">
                Located at the front desk near our main entrance, you can test and purchase your perfect scent while enjoying the full Kamalo City experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Wind className="w-6 h-6 text-kamalo-red" />
                  <span>Oil-Based</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Long-Lasting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-kamalo-red" />
                  <span>Gift Sets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-kamalo-red" />
                  <span>Test Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fragrance Categories */}
          <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Popular Scent Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Wind className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Oud Blends</h3>
                <p className="text-gray-300">Rich, exotic Middle Eastern inspired fragrances</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Sparkles className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Vanilla Musk</h3>
                <p className="text-gray-300">Warm, comforting scents perfect for everyday wear</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Star className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fresh Florals</h3>
                <p className="text-gray-300">Light, elegant scents for any occasion</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Gift className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Designer Dupes</h3>
                <p className="text-gray-300">Affordable alternatives to luxury brands</p>
              </div>
            </div>
          </div>

          {/* Best Sellers */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Best-Selling Fragrances</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-4">Signature Oud</h3>
                <p className="text-gray-300 mb-4">Our most popular oil-based oud blend with long-lasting projection and rich, warm notes.</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Long-lasting formula</li>
                  <li>• Unisex appeal</li>
                  <li>• Evening and special occasions</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-4">Vanilla Musk Gold</h3>
                <p className="text-gray-300 mb-4">Sweet and sophisticated blend perfect for daily wear with excellent staying power.</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Everyday luxury</li>
                  <li>• Warm and inviting</li>
                  <li>• Perfect for office wear</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-4">Fresh Floral Fusion</h3>
                <p className="text-gray-300 mb-4">Light and airy blend that's fresh yet memorable, ideal for day and casual occasions.</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Light and fresh</li>
                  <li>• Perfect for daytime</li>
                  <li>• Seasonal favorite</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem 
                  value="faqs" 
                  className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6 px-6 text-xl font-bold">
                    FAQs
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                          <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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

      <Footer />
    </div>
  );
};

export default Perfumes;
