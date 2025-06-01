
import { Clock, Phone, MapPin, Instagram } from "lucide-react";
import LocationMap from "./LocationMap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="flex items-start space-x-2">
              <Clock className="w-5 h-5 mt-1 text-kamalo-red" />
              <div>
                <p>7 days a week</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-kamalo-red" />
                <p>+27 73 159 8909</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-kamalo-red" />
                <p>90 Voortrekker Road, Goodwood, Cape Town</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-kamalo-red transition-colors">Home</Link>
              <Link to="/menu" className="block hover:text-kamalo-red transition-colors">Menu</Link>
              <Link to="/services" className="block hover:text-kamalo-red transition-colors">All Services</Link>
              <Link to="/services/hookah-lounge" className="block hover:text-kamalo-red transition-colors ml-4">• Hookah Lounge</Link>
              <Link to="/services/private-bookings" className="block hover:text-kamalo-red transition-colors ml-4">• Private Bookings</Link>
              <Link to="/services/live-entertainment" className="block hover:text-kamalo-red transition-colors ml-4">• Live Entertainment</Link>
              <Link to="/reservations" className="block hover:text-kamalo-red transition-colors">Reservations</Link>
              <Link to="/about" className="block hover:text-kamalo-red transition-colors">About</Link>
              <Link to="/reviews" className="block hover:text-kamalo-red transition-colors">Reviews</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-kamalo-red transition-colors mb-4"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <LocationMap />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2025 Kamalo City. All rights reserved.</p>
          <p className="text-kamalo-red mt-2">
            More exciting things are coming to Kamalo City soon!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
