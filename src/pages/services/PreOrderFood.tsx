
import { Clock, Phone, CheckCircle, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PreOrderFood = () => {
  const faqs = [
    {
      question: "How far in advance can I place an order?",
      answer: "You can place pre-orders up to 3 days in advance. We recommend ordering at least 2 hours ahead for same-day pickup to ensure your food is ready when you arrive."
    },
    {
      question: "Is delivery available?",
      answer: "Delivery service is coming soon! Currently, we offer pickup only. Stay tuned for updates on our delivery launch."
    },
    {
      question: "How do I pay for my pre-order?",
      answer: "Payment can be made when you place the order over the phone, or you can pay when you arrive for pickup. We accept cash and card payments."
    },
    {
      question: "Can I modify my order after placing it?",
      answer: "Yes, you can modify your order up to 1 hour before your scheduled pickup time. Please call us as soon as possible to make changes."
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
              <span className="text-kamalo-red">Pre-Order</span> Food
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Skip the wait and ensure your favorite African dishes are ready when you arrive. Order ahead for a seamless dining experience.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
                alt="Pre-Order Food"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Convenient Ordering</h2>
              <p className="text-gray-300 mb-4">
                Make your Kamalo City experience even more convenient with our pre-order service. Call ahead to place your order and have your favorite authentic African dishes prepared fresh and ready for pickup at your preferred time.
              </p>
              <p className="text-gray-300 mb-6">
                Perfect for busy schedules, office lunch orders, or when you want to ensure your meal is ready without any waiting time.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>No Waiting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-kamalo-red" />
                  <span>Easy Ordering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-kamalo-red" />
                  <span>Fresh Prepared</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-kamalo-red" />
                  <span>Delivery Soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How Pre-Ordering Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-gray-300">Phone +27 73 159 8909 to place your order</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-bold mb-2">Choose Items</h3>
                <p className="text-gray-300">Select from our full menu of authentic dishes</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-bold mb-2">Set Pickup Time</h3>
                <p className="text-gray-300">Choose when you'd like to collect your order</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-bold mb-2">Pick Up & Enjoy</h3>
                <p className="text-gray-300">Arrive and collect your fresh, ready meal</p>
              </div>
            </div>
          </div>

          {/* Popular Pre-Order Items */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Pre-Order Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Jollof Rice Special</h3>
                <p className="text-gray-300">Our signature jollof rice with your choice of protein</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Grilled Chicken Platter</h3>
                <p className="text-gray-300">Perfectly seasoned grilled chicken with sides</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Beef Stew & Rice</h3>
                <p className="text-gray-300">Tender beef stew served with fragrant rice</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Vegetarian Combo</h3>
                <p className="text-gray-300">Fresh vegetables and legumes with traditional spices</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Fish & Chips African Style</h3>
                <p className="text-gray-300">Fresh fish with our special African seasoning</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Mixed Grill Platter</h3>
                <p className="text-gray-300">Selection of grilled meats perfect for sharing</p>
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
              Ready to <span className="text-kamalo-red">Pre-Order</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Call us now to place your order and skip the wait. Fresh African cuisine ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call to Order: +27 73 159 8909
              </a>
              <a
                href="/menu"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                View Full Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreOrderFood;
