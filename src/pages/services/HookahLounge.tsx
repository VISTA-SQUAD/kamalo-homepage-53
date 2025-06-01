
import { Wind, Clock, Users, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HookahLounge = () => {
  const faqs = [
    {
      question: "What hookah flavors do you offer?",
      answer: "We offer a wide variety of premium hookah flavors including fruit, mint, dessert, and exotic blends. Our selection includes popular brands and unique house mixes."
    },
    {
      question: "Do I need to make a reservation for hookah?",
      answer: "While walk-ins are welcome, we recommend making a reservation especially during peak hours and weekends to ensure availability."
    },
    {
      question: "What are your hookah lounge hours?",
      answer: "Our hookah lounge is open 7 days a week from 11:00 AM to 11:00 PM, same as our restaurant hours."
    },
    {
      question: "Can I share a hookah with friends?",
      answer: "Absolutely! Our hookahs are perfect for sharing. We provide multiple hoses and mouthpieces for a hygienic and enjoyable experience."
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
              <span className="text-kamalo-red">Hookah</span> Lounge
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Relax and unwind in our premium hookah lounge with authentic flavors and a comfortable atmosphere perfect for socializing.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png"
                alt="Hookah Lounge"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Premium Hookah Experience</h2>
              <p className="text-gray-300 mb-4">
                Step into our authentic hookah lounge where tradition meets modern comfort. We offer premium quality shisha with a wide variety of flavors in a relaxed, social atmosphere.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're looking to unwind after a long day or socialize with friends, our hookah lounge provides the perfect setting with comfortable seating and excellent service.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Wind className="w-6 h-6 text-kamalo-red" />
                  <span>Premium Flavors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Group Friendly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>Open Daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-kamalo-red" />
                  <span>Hygienic Setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Wind className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Shisha</h3>
                <p className="text-gray-300">High-quality tobacco and herbal blends from trusted brands</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Social Atmosphere</h3>
                <p className="text-gray-300">Perfect setting for friends and groups to relax together</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Clean & Safe</h3>
                <p className="text-gray-300">Hygienic preparation and individual mouthpieces</p>
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
              Ready to Experience Our <span className="text-kamalo-red">Hookah Lounge</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Visit us today or make a reservation for the best hookah experience in Cape Town.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call Us: +27 73 159 8909
              </a>
              <a
                href="/reservations"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Make Reservation
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HookahLounge;
