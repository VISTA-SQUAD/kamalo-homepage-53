
import { Scissors, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BarberNextDoor = () => {
  const faqs = [
    {
      question: "Do I need an appointment?",
      answer: "While walk-ins are welcome, we recommend booking an appointment to avoid waiting, especially during peak hours and weekends."
    },
    {
      question: "What services do you offer?",
      answer: "We provide full barbering services including haircuts, beard trims, hot towel shaves, eyebrow grooming, and styling consultation."
    },
    {
      question: "How long does a typical haircut take?",
      answer: "A standard haircut takes about 30-45 minutes, while more detailed services like beard trims and styling may take up to an hour."
    },
    {
      question: "Can I get a haircut while waiting for my food?",
      answer: "Absolutely! We coordinate with the restaurant so you can enjoy both services during your visit. Just let us know your dining plans."
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
              <span className="text-kamalo-red">Barber</span> Next Door
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional barbering services right next to our restaurant. Get a fresh cut while you wait for your meal or make it a complete grooming experience.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png"
                alt="Barber Shop"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Expert Grooming Services</h2>
              <p className="text-gray-300 mb-4">
                Located conveniently next to Kamalo City restaurant, our professional barber shop offers premium grooming services in a comfortable, modern setting. Our experienced barbers combine traditional techniques with contemporary styles.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you need a quick trim, a complete makeover, or regular maintenance, our skilled barbers will ensure you leave looking and feeling your best.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Scissors className="w-6 h-6 text-kamalo-red" />
                  <span>Expert Cuts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>Quick Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>All Ages Welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-kamalo-red" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Scissors className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Haircuts</h3>
                <p className="text-gray-300">Classic and modern cuts for all hair types and styles</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Beard Grooming</h3>
                <p className="text-gray-300">Professional beard trims, shaping, and styling</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Hot Towel Shaves</h3>
                <p className="text-gray-300">Traditional straight razor shaves with hot towel treatment</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Clock className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Express Cuts</h3>
                <p className="text-gray-300">Quick touch-ups and maintenance cuts</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Scissors className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Eyebrow Trim</h3>
                <p className="text-gray-300">Precision eyebrow grooming and shaping</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Style Consultation</h3>
                <p className="text-gray-300">Expert advice on the best look for you</p>
              </div>
            </div>
          </div>

          {/* Pricing Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Pricing</h2>
            <div className="bg-black/50 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Basic Haircut</span>
                  <span className="text-kamalo-red font-bold">R80 - R120</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Haircut + Wash</span>
                  <span className="text-kamalo-red font-bold">R100 - R150</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Beard Trim</span>
                  <span className="text-kamalo-red font-bold">R50 - R80</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Hot Towel Shave</span>
                  <span className="text-kamalo-red font-bold">R80 - R120</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Full Service Package</span>
                  <span className="text-kamalo-red font-bold">R180 - R250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Kids Cut (Under 12)</span>
                  <span className="text-kamalo-red font-bold">R60 - R80</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-6 text-center">
                *Prices may vary based on hair length and complexity
              </p>
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
              Ready for a <span className="text-kamalo-red">Fresh Cut</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Book your appointment today or visit us for a walk-in service. Professional grooming right next to great food!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Book Appointment: +27 73 159 8909
              </a>
              <a
                href="/menu"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Grab Food Too
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
