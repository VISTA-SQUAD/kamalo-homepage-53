
import { Scissors, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BarberNextDoor = () => {
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
      question: "Do I need an appointment for a haircut?",
      answer: "No — walk-ins are welcome."
    },
    {
      question: "What styles do they offer?",
      answer: "Fades, lineups, modern cuts."
    },
    {
      question: "Are the barbers experienced?",
      answer: "Yes — highly skilled and on-trend."
    },
    {
      question: "What are the barber's hours?",
      answer: "9 AM to 9 PM daily."
    },
    {
      question: "How much do haircuts cost?",
      answer: "R60 flat rate."
    },
    {
      question: "Can I cut my hair and eat after?",
      answer: "Yes — grab a plate right after."
    },
    {
      question: "Do they accept card payments?",
      answer: "Yes — card and cash welcome."
    },
    {
      question: "Is it only men's haircuts?",
      answer: "Yes — no lady cuts."
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
              <span className="text-kamalo-red">Barber</span> Next Door
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a fresh fade or sharp lineup before your night out — right next door to Kamalo City. Our partnered barber offers fast, stylish cuts for men and kids. No appointment needed.
            </p>
          </div>

          {/* Service Description */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <img
                src="/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png"
                alt="Barber Shop"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Quick Haircuts Before the Vibe</h2>
              <p className="text-gray-300 mb-4">
                Come for the trim, stay for the food, music, and hookah. It's the ultimate one-stop vibe. Our skilled local professionals know all the trending styles and offer everything from fades to classic cuts.
              </p>
              <p className="text-gray-300 mb-6">
                Walk-ins are welcome on a first-come, first-served basis. R60 flat rate, and you're just steps away from enjoying the full Kamalo City experience afterward.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Scissors className="w-6 h-6 text-kamalo-red" />
                  <span>Expert Cuts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>9AM - 9PM Daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Men Only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-kamalo-red" />
                  <span>R60 Flat Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Scissors className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fades & Lineups</h3>
                <p className="text-gray-300">Fresh fades and sharp lineups for the modern look</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Modern Cuts</h3>
                <p className="text-gray-300">Trending styles and contemporary looks</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Kids' Cuts</h3>
                <p className="text-gray-300">Special attention for younger clients</p>
              </div>
            </div>
          </div>

          {/* Pricing Guide */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Service Pricing</h2>
            <div className="bg-black/50 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">All Haircuts</span>
                  <span className="text-kamalo-red font-bold">R60 Flat Rate</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Hours</span>
                  <span className="text-kamalo-red font-bold">9 AM - 9 PM Daily</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Appointments</span>
                  <span className="text-kamalo-red font-bold">Walk-ins Welcome</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Payment Methods</span>
                  <span className="text-kamalo-red font-bold">Cash & Card</span>
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
              Ready for a <span className="text-kamalo-red">Fresh Cut</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Walk in for a fresh cut, then stay for the food, music, and vibes. The ultimate one-stop experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Call for Hours: +27 73 159 8909
              </a>
              <a
                href="/menu"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Check Out Our Food
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BarberNextDoor;
