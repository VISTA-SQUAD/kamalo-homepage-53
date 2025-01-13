import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reservations = () => {
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleWhatsAppConfirm = () => {
    // Format the message for WhatsApp
    const message = `Hello! I would like to make a reservation for ${guests} guests on ${date} at Kamalo City.`;
    const whatsappUrl = `https://wa.me/+27731598909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-2xl mx-auto bg-[#1A1F2C]/50 rounded-lg p-8">
          <p className="text-gray-300 mb-6">Open: 9:00 AM to 5:00 PM, 7 days a week</p>
          
          <div className="space-y-6">
            <div>
              <label className="text-white block mb-2">Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 bg-[#1A1F2C] rounded-lg text-white pr-10"
                  min={new Date().toISOString().split('T')[0]}
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="text-white block mb-2">Number of Guests</label>
              <div className="relative">
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  min="1"
                  max="10"
                  className="w-full p-3 bg-[#1A1F2C] rounded-lg text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-white block mb-2">Time</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className="p-3 bg-[#1A1F2C] rounded-lg text-white hover:bg-kamalo-red transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleWhatsAppConfirm}
              className="w-full bg-kamalo-red hover:bg-red-600 text-white py-4 rounded-lg mt-6"
            >
              Confirm via WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservations;