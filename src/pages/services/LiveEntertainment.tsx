
import { Music, Calendar, Users, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LiveEntertainment = () => {
  const faqs = [
    {
      question: "What type of entertainment do you offer?",
      answer: "We host live concerts, DJ performances, cultural nights, karaoke sessions, and special themed events throughout the week."
    },
    {
      question: "How can I find out about upcoming events?",
      answer: "Follow us on Instagram @kamalo_city or call us directly. We also post event announcements on our social media channels."
    },
    {
      question: "Is there an entry fee for entertainment nights?",
      answer: "Entry fees vary depending on the event. Some nights are free with food purchase, while special performances may have a cover charge."
    },
    {
      question: "Can I request specific music or performances?",
      answer: "Absolutely! We love hearing from our guests. Contact us to discuss your preferences or special requests for upcoming events."
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
              <span className="text-kamalo-red">Live</span> Entertainment
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the vibrant culture and energy of Kamalo City with our exciting live entertainment, concerts, and cultural events.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
                alt="Live Entertainment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Unforgettable Nights</h2>
              <p className="text-gray-300 mb-4">
                Immerse yourself in the rich cultural tapestry of African entertainment at Kamalo City. Our venue comes alive with the sounds of live music, energetic performances, and cultural celebrations that showcase the best of African heritage.
              </p>
              <p className="text-gray-300 mb-6">
                From intimate acoustic sessions to high-energy concerts, our entertainment program offers something for everyone looking to experience authentic African culture and modern entertainment.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Music className="w-6 h-6 text-kamalo-red" />
                  <span>Live Concerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mic className="w-6 h-6 text-kamalo-red" />
                  <span>DJ Nights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Cultural Events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Weekly Shows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Entertainment Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Music className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Live Music</h3>
                <p className="text-gray-300">Local and international artists performing African and contemporary music</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Mic className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">DJ Sets</h3>
                <p className="text-gray-300">Professional DJs spinning the latest hits and classic favorites</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Cultural Nights</h3>
                <p className="text-gray-300">Celebrate African heritage with traditional performances and modern fusion</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Special Events</h3>
                <p className="text-gray-300">Holiday celebrations, themed parties, and community gatherings</p>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Weekly Entertainment</h2>
            <div className="bg-black/50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Friday Nights</h3>
                  <p className="text-gray-300">Live DJ sets and dance music</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Saturday Evenings</h3>
                  <p className="text-gray-300">Live performances and cultural shows</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Sunday Sessions</h3>
                  <p className="text-gray-300">Acoustic music and chill vibes</p>
                </div>
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
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Follow @kamalo_city
              </a>
              <a
                href="tel:+27731598909"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
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
