import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Reservations = () => {
  const [guests, setGuests] = useState("2");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

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
    const message = `Hello! I would like to make a reservation for ${guests} guests on ${selectedDate} at ${selectedTime} at Kamalo City.`;
    const whatsappUrl = `https://wa.me/+27731598909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-2xl mx-auto bg-black rounded-lg p-8 border border-gray-700">
          <p className="text-gray-300 mb-6">Open: 9:00 AM to 5:00 PM, 7 days a week</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white block mb-2">Month</label>
                <Select onValueChange={(value) => setSelectedDate(prev => {
                  const [_, day] = prev.split(' ');
                  return `${value} ${day || '1'}, 2025`;
                })}>
                  <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                    {months.map((month) => (
                      <SelectItem key={month} value={month} className="hover:bg-gray-700">
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-white block mb-2">Day</label>
                <Select onValueChange={(value) => setSelectedDate(prev => {
                  const [month] = prev.split(' ');
                  return `${month || 'January'} ${value}, 2025`;
                })}>
                  <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                    {generateDates().map((day) => (
                      <SelectItem key={day} value={day.toString()} className="hover:bg-gray-700">
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  className="w-full p-3 bg-[#1A1F2C] rounded-lg text-white border border-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="text-white block mb-2">Time</label>
              <Select onValueChange={setSelectedTime}>
                <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                  <SelectValue placeholder="Select time">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Select time</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time} className="hover:bg-gray-700">
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleWhatsAppConfirm}
              className="w-full bg-kamalo-red hover:bg-red-600 text-white py-4 rounded-lg mt-6"
              disabled={!selectedDate || !selectedTime}
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