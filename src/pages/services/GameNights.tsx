import { Trophy, Users, Calendar, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GameNights = () => {
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
      question: "When will game nights start?",
      answer: "Pool is already available — tournaments soon."
    },
    {
      question: "What types of games will be featured?",
      answer: "Chess, dominoes, Uno, cards, pool."
    },
    {
      question: "Do I need to bring my own games?",
      answer: "No — we've got you covered."
    },
    {
      question: "Will there be prizes for winners?",
      answer: "Yes — vouchers and other rewards."
    },
    {
      question: "Is it beginner-friendly?",
      answer: "100% — all are welcome."
    },
    {
      question: "Can I suggest games to include?",
      answer: "Yes — we love feedback."
    },
    {
      question: "Will food and drinks be available?",
      answer: "Yes — our full menu is open during game nights."
    },
    {
      question: "How do I stay updated on game night announcements?",
      answer: "Follow @kamalo_city on socials or join our WhatsApp Group."
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
              <span className="text-kamalo-red">Game Nights</span> & Social Tournaments
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Looking for a fun night out that's more than just dinner and drinks? Kamalo City hosts social game nights and casual tournaments — featuring chess, dominoes, Uno, cards, and pool.
            </p>
          </div>

          {/* Service Description */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                alt="Game Night"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Chess, Dominoes & Social Tournaments</h2>
              <p className="text-gray-300 mb-4">
                Whether you're a competitive spirit or just want to chill with friends in a vibey environment, our game tournaments blend the energy of nightlife with the strategy of timeless games.
              </p>
              <p className="text-gray-300 mb-6">
                Join us for a night of food, music, and friendly competition — no experience required. Located in Goodwood, Cape Town, Kamalo City is where culture, connection, and creativity meet.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-kamalo-red" />
                  <span>Tournaments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>All Skill Levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-6 h-6 text-kamalo-red" />
                  <span>Classic Games</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Social Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Planned Features */}
          <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">What's Coming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Trophy className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Weekly Tournaments</h3>
                <p className="text-gray-300">Regular competitive events with prizes and recognition</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Social Game Nights</h3>
                <p className="text-gray-300">Casual gaming sessions for fun and connection</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Gamepad2 className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Classic Board Games</h3>
                <p className="text-gray-300">Traditional games that bring people together</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Special Events</h3>
                <p className="text-gray-300">Holiday tournaments and community challenges</p>
              </div>
            </div>
          </div>

          {/* Gaming Categories */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Planned Game Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Strategy Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Chess Championships</li>
                  <li>• Checkers Tournaments</li>
                  <li>• Strategic Board Games</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Traditional Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Dominoes Competitions</li>
                  <li>• Card Game Nights</li>
                  <li>• Local African Games</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Party Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Uno Tournaments</li>
                  <li>• Group Card Games</li>
                  <li>• Social Party Games</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pre-Launch Interest */}
          <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Stay Connected</h2>
            <div className="bg-black/50 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-kamalo-red mb-4">Join Our Community!</h3>
              <p className="text-gray-300 mb-6">
                Pool is already available, and tournaments are coming soon. Join our WhatsApp group to stay updated on gaming events and connect with fellow players.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
                >
                  Join WhatsApp Group
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
                >
                  Follow @kamalo_city
                </a>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              Ready to <span className="text-kamalo-red">Join the Games</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Stay connected with Kamalo City for the latest updates on our game nights and tournaments!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
              >
                Join WhatsApp Group
              </a>
              <a
                href="tel:+27731598909"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Call for Updates: +27 73 159 8909
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GameNights;
