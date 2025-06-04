import { Music, Calendar, Users, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LiveEntertainment = () => {
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
      question: "When do you host live music events?",
      answer: "Every Friday, sometimes Saturdays."
    },
    {
      question: "Is there a cover charge?",
      answer: "Usually low or free — varies."
    },
    {
      question: "What kind of music do you play?",
      answer: "Congolese, Afro, and old-school classics."
    },
    {
      question: "Can I reserve a table during events?",
      answer: "Yes, both VIP and general seating."
    },
    {
      question: "Do you allow local performers to apply?",
      answer: "Yes — we support local talent."
    },
    {
      question: "Is it safe and secure to party at Kamalo City?",
      answer: "Yes — controlled entry and security in place."
    },
    {
      question: "Can we dance and party, or is it just seated?",
      answer: "You can absolutely dance."
    },
    {
      question: "Do you serve food during live shows?",
      answer: "Yes — full menu available."
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
              <span className="text-kamalo-red">Congolese, Afro</span> & Local Performances
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience Cape Town nightlife at its best with Kamalo City's live entertainment nights. From Congolese and Afro music to old-school classics, our stage hosts high-energy performances every weekend.
            </p>
          </div>

          {/* Service Description */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
                alt="Live Entertainment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Cape Town Nightlife at Its Best</h2>
              <p className="text-gray-300 mb-4">
                Grab dinner, smoke hookah, and enjoy a night of culture, music, and food in Goodwood's most vibrant venue. Our entertainment program showcases the best of local talent and international sounds.
              </p>
              <p className="text-gray-300 mb-6">
                From intimate acoustic sessions to high-energy dance nights, we create an atmosphere where music, culture, and community come together for unforgettable experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Music className="w-6 h-6 text-kamalo-red" />
                  <span>Weekend Shows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mic className="w-6 h-6 text-kamalo-red" />
                  <span>Local Artists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Dance Floor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Special Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Entertainment Types */}
          <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Music className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Amapiano</h3>
                <p className="text-gray-300">The hottest South African sound with top local DJs</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Mic className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Afrobeat</h3>
                <p className="text-gray-300">Contemporary African rhythms and international hits</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Live Performances</h3>
                <p className="text-gray-300">Rising local artists and special guest appearances</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Urban Sounds</h3>
                <p className="text-gray-300">House, R&B, and contemporary African music</p>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Preview */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Weekly Entertainment</h2>
            <div className="bg-black/50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Friday Nights</h3>
                  <p className="text-gray-300">Amapiano DJs and dance vibes</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Saturday Evenings</h3>
                  <p className="text-gray-300">Live performances and special guests</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Special Events</h3>
                  <p className="text-gray-300">Rising local artists and featured acts</p>
                </div>
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
              Don't Miss Our <span className="text-kamalo-red">Live Entertainment</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Follow us on Instagram for the latest updates on upcoming shows and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Follow @kamalo_city
              </a>
              <a
                href="tel:+27731598909"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Call for Events: +27 73 159 8909
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveEntertainment;
