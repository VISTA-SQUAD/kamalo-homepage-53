
import { Trophy, Users, Calendar, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GameNights = () => {
  const faqs = [
    {
      question: "When will tournaments start?",
      answer: "We're currently setting up our tournament infrastructure and expect to launch our first gaming tournaments in the coming months. Follow us on Instagram for announcements!"
    },
    {
      question: "What types of games will be featured?",
      answer: "We're planning a mix of popular games including FIFA, racing games, fighting games, and potentially some retro arcade classics. Community input will help shape our final lineup."
    },
    {
      question: "Do I need to bring my own controller?",
      answer: "We'll provide all necessary gaming equipment, but you're welcome to bring your own controller if you prefer. We'll have details about equipment policies when we launch."
    },
    {
      question: "Will there be prizes for winners?",
      answer: "Absolutely! We're planning exciting prizes for tournament winners including cash prizes, vouchers, and special recognition. Prize details will be announced with each tournament."
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
              <span className="text-kamalo-red">Game Nights</span> & Tournaments
            </h1>
            <div className="bg-kamalo-red text-white px-6 py-2 rounded-full text-lg font-semibold inline-block mb-6">
              Coming Soon!
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get ready for exciting gaming tournaments and competitive events at Kamalo City. The ultimate gaming experience is coming soon!
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                alt="Gaming Tournament"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Competitive Gaming Hub</h2>
              <p className="text-gray-300 mb-4">
                Kamalo City is preparing to become Cape Town's premier destination for competitive gaming and esports tournaments. We're creating a space where gamers of all skill levels can compete, connect, and celebrate their passion for gaming.
              </p>
              <p className="text-gray-300 mb-6">
                From casual game nights to serious competitive tournaments, we're building something special for the gaming community. Stay tuned for updates on our launch!
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-kamalo-red" />
                  <span>Tournaments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Community Events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-6 h-6 text-kamalo-red" />
                  <span>Multiple Games</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Regular Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Planned Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What's Coming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Trophy className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Monthly Tournaments</h3>
                <p className="text-gray-300">Regular competitive events with exciting prizes and recognition</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Gaming Leagues</h3>
                <p className="text-gray-300">Organized leagues for ongoing competitive play</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Gamepad2 className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Casual Game Nights</h3>
                <p className="text-gray-300">Relaxed gaming sessions for fun and socializing</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Special Events</h3>
                <p className="text-gray-300">Holiday tournaments and community challenges</p>
              </div>
            </div>
          </div>

          {/* Gaming Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Planned Gaming Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Sports Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• FIFA Championships</li>
                  <li>• Basketball Tournaments</li>
                  <li>• Racing Competitions</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Fighting Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Street Fighter Battles</li>
                  <li>• Tekken Tournaments</li>
                  <li>• Mortal Kombat Events</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Classic Arcade</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Retro Game Nights</li>
                  <li>• High Score Challenges</li>
                  <li>• Nostalgia Tournaments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Registration Interest */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Pre-Registration Interest</h2>
            <div className="bg-black/50 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-kamalo-red mb-4">Be the First to Know!</h3>
              <p className="text-gray-300 mb-6">
                Want to be notified when we launch our gaming tournaments? Give us a call or follow us on Instagram to stay updated on our gaming program development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-kamalo-dark border border-kamalo-red rounded-lg p-4">
                  <h4 className="font-bold text-kamalo-red mb-2">Early Bird Benefits</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Priority tournament registration</li>
                    <li>• Exclusive practice sessions</li>
                    <li>• Special founding member perks</li>
                  </ul>
                </div>
                <div className="bg-kamalo-dark border border-kamalo-red rounded-lg p-4">
                  <h4 className="font-bold text-kamalo-red mb-2">Community Input</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Vote on tournament formats</li>
                    <li>• Suggest game titles</li>
                    <li>• Help shape our gaming rules</li>
                  </ul>
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
              Ready to <span className="text-kamalo-red">Level Up</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Stay connected with Kamalo City for the latest updates on our gaming tournament launch!
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
