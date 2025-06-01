
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        KAMALO CITY
      </Link>
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-white hover:text-kamalo-red transition-colors">
          Home
        </Link>
        <Link to="/services" className="text-white hover:text-kamalo-red transition-colors">
          Services
        </Link>
        <Link to="/menu" className="text-white hover:text-kamalo-red transition-colors">
          Menu
        </Link>
        <Link to="/reviews" className="text-white hover:text-kamalo-red transition-colors">
          Reviews
        </Link>
        <Link to="/reservations" className="text-white hover:text-kamalo-red transition-colors">
          Reservations
        </Link>
        <Link to="/about" className="text-white hover:text-kamalo-red transition-colors">
          About Us
        </Link>
        <Link to="/contact" className="text-white hover:text-kamalo-red transition-colors">
          Contact Us
        </Link>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kamalo-red transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
