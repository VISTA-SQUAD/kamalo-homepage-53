
import { Users, Calendar, Star, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivateBookings = () => {
  const faqs = [
    {
      question: "What is the minimum group size for private bookings?",
      answer: "We accommodate private bookings for groups of 15 or more people. For smaller groups, we recommend our regular reservation system."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 weeks in advance, especially for weekends and special occasions. However, we'll do our best to accommodate last-minute requests."
    },
    {
      question: "What's included in a private booking?",
      answer: "Private bookings include exclusive use of our venue, dedicated staff, customized menu options, and special decorations upon request."
    },
    {
      question: "Can I bring my own decorations or entertainment?",
      answer: "Yes! We welcome personal touches. Please discuss your requirements with our events team to ensure everything aligns with our venue policies."
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
              <span className="text-kamalo-red">Private</span> Bookings
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Make your special occasion unforgettable with exclusive access to Kamalo City for your private events and celebrations.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop"
                alt="Private Event"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Exclusive Venue Hire</h2>
              <p className="text-gray-300 mb-4">
                Transform Kamalo City into your private celebration space. Whether it's a birthday party, corporate event, wedding reception, or family gathering, we provide the perfect setting for your special occasion.
              </p>
              <p className="text-gray-300 mb-6">
                Our dedicated events team will work with you to customize every detail, from menu selection to decorations, ensuring your event is exactly as you envisioned.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>15+ Guests</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Flexible Timing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Custom Menus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-kamalo-red" />
                  <span>Exclusive Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Birthday Parties</h3>
                <p className="text-gray-300">Celebrate another year with style and great food</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Corporate Events</h3>
                <p className="text-gray-300">Team building and business celebrations</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Wedding Receptions</h3>
                <p className="text-gray-300">Beautiful setting for your special day</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Family Gatherings</h3>
                <p className="text-gray-300">Reunions and family celebrations</p>
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
              Ready to Book Your <span className="text-kamalo-red">Private Event</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our events team to discuss your requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call Events Team: +27 73 159 8909
              </a>
              <a
                href="/contact"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivateBookings;
