
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      question: "When do you have live entertainment?",
      answer: "We host live music performances every Friday and Saturday evening starting at 8:00 PM. Our entertainment schedule includes live bands, DJ sets, and special cultural events throughout the week."
    },
    {
      question: "Do I need to make a reservation for shows?",
      answer: "We highly recommend making reservations for our entertainment nights, especially weekends. Tables fill up quickly during live performances. You can book by calling +27 73 159 8909."
    },
    {
      question: "What type of music do you feature?",
      answer: "Our entertainment focuses on authentic African music including Congolese rumba, Afrobeats, traditional sounds, and modern fusion. We also host special themed nights celebrating different African cultures."
    },
    {
      question: "Is there a cover charge for entertainment?",
      answer: "There's no additional cover charge for our regular entertainment. However, special events or guest artist performances may have a small entrance fee, which will be announced in advance."
    },
    {
      question: "Can I request specific songs or artists?",
      answer: "Absolutely! Our DJs and live performers love taking requests. Feel free to ask during the show, and they'll do their best to accommodate your musical preferences."
    },
    {
      question: "Do you host private entertainment events?",
      answer: "Yes! We can arrange private entertainment for your special occasions including birthdays, celebrations, and corporate events. Contact us to discuss your entertainment needs and pricing."
    },
    {
      question: "Is the entertainment family-friendly?",
      answer: "Our entertainment is generally family-friendly, especially during earlier evening hours. Later shows (after 10 PM) may be more suited for adult audiences. Please ask when making your reservation."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Live Music & <span className="text-kamalo-red">Entertainment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the vibrant sounds and rhythms of authentic African music at Kamalo City.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-kamalo-red/50 transition-colors hover:shadow-lg hover:shadow-kamalo-red/20">
            <div className="flex justify-center mb-6">
              <Music className="w-16 h-16 text-kamalo-red" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">Live Music Nights</h2>
            <p className="text-gray-300 mb-6">
              Our regular live music sessions feature talented African artists playing a mix of traditional and contemporary sounds. From soulful Congolese rumba to energetic Afrobeats, experience authentic African rhythms in a welcoming atmosphere.
            </p>
            <div className="space-y-2 text-gray-300 mb-6">
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Live bands every Friday & Saturday
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Traditional African instruments
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Modern fusion performances
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Space for dancing and socializing
              </p>
            </div>
            <Button asChild className="w-full bg-kamalo-red hover:bg-red-600">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </div>

          <div className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-kamalo-red/50 transition-colors hover:shadow-lg hover:shadow-kamalo-red/20">
            <div className="flex justify-center mb-6">
              <CalendarDays className="w-16 h-16 text-kamalo-red" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">Special Events</h2>
            <p className="text-gray-300 mb-6">
              Beyond our regular live music, we host special events that celebrate African culture in all its richness. From themed nights to album launches, poetry readings to cultural celebrations, there's always something exciting happening at Kamalo City.
            </p>
            <div className="space-y-2 text-gray-300 mb-6">
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                African cultural celebrations
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Album & EP launch events
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Guest DJ performances
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Poetry & spoken word nights
              </p>
            </div>
            <Button asChild className="w-full bg-kamalo-red hover:bg-red-600">
              <Link to="/contact">Inquire About Events</Link>
            </Button>
          </div>
        </div>

        <div ref={sectionRef} className={`bg-black/30 p-8 rounded-lg max-w-4xl mx-auto mb-16 border border-gray-800 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Upcoming <span className="text-kamalo-red">Performances</span>
          </h2>
          <div className="space-y-6">
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">African Jazz Night</h3>
                    <p className="text-gray-400">The Kamalo City Band</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-kamalo-red font-medium">Friday, June 7th</p>
                    <p className="text-gray-400">8:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Saturday Night Rumba</h3>
                    <p className="text-gray-400">DJ Babu & Friends</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-kamalo-red font-medium">Saturday, June 8th</p>
                    <p className="text-gray-400">9:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Acoustic Soul Session</h3>
                    <p className="text-gray-400">Featuring Tasha & The Echoes</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-kamalo-red font-medium">Friday, June 14th</p>
                    <p className="text-gray-400">8:30 PM - 11:30 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-kamalo-red hover:bg-red-600">
              <Link to="/reservations">Book a Table for a Show</Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Entertainment <span className="text-kamalo-red">FAQs</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our live entertainment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-black/50 rounded-lg border border-gray-800 px-6 data-[state=open]:border-kamalo-red transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            Experience the <span className="text-kamalo-red">Music</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable evening of live African music, delicious food, and vibrant culture. Reserve your table today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-kamalo-red hover:bg-red-600">
              <Link to="/reservations">Make Reservation</Link>
            </Button>
            <Button asChild variant="outline" className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LiveEntertainment;
