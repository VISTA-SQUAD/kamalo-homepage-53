
import { Sparkles, Star, Gift, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Perfumes = () => {
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

  const mensPerfumes = [
    "Tom Ford Black Orchid",
    "Creed Aventus",
    "Dior Sauvage",
    "Bleu de Chanel",
    "Versace Eros",
    "Giorgio Armani Acqua di Gio",
    "Paco Rabanne 1 Million",
    "Yves Saint Laurent La Nuit de L'Homme"
  ];

  const womensPerfumes = [
    "Chanel No. 5",
    "Tom Ford Black Orchid",
    "Viktor & Rolf Flowerbomb",
    "Yves Saint Laurent Black Opium",
    "Lancôme La Vie Est Belle",
    "Dior Miss Dior",
    "Gucci Bloom",
    "Marc Jacobs Daisy"
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

          {/* Perfume Collections */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Fragrance Collection</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Men's Collection */}
              <div className="bg-black/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-kamalo-red text-center">Men's Collection</h3>
                <ul className="space-y-3">
                  {mensPerfumes.map((perfume, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-kamalo-red rounded-full"></div>
                      <span>{perfume}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Women's Collection */}
              <div className="bg-black/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-kamalo-red text-center">Women's Collection</h3>
                <ul className="space-y-3">
                  {womensPerfumes.map((perfume, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-kamalo-red rounded-full"></div>
                      <span>{perfume}</span>
                    </li>
                  ))}
                </ul>
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

          {/* FAQs */}
          <div className="mb-16">
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

      <Footer />
    </div>
  );
};

export default Perfumes;
