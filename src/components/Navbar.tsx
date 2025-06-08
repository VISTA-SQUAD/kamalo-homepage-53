
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "@/utils/scrollToTop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Reservations", path: "/reservations" },
  ];

  const galleryItems = [
    { name: "Gallery – Food", path: "/gallery/food-and-drinks" },
    { name: "Gallery – Events", path: "/gallery/events-and-entertainment" },
    { name: "Gallery – Services", path: "/gallery/services" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-kamalo-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Brand */}
          <div className="md:hidden">
            <Link to="/" onClick={handleNavClick} className="text-2xl font-bold text-yellow-500">
              Kamalo City
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 w-full justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`text-white hover:text-kamalo-red transition-colors ${
                  location.pathname === item.path ? "text-kamalo-red" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-kamalo-red transition-colors">
                Gallery
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-kamalo-dark border border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {galleryItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={handleNavClick}
                    className="block px-4 py-2 text-white hover:text-kamalo-red hover:bg-gray-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-kamalo-dark border-t border-gray-800">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-4 py-2 text-white hover:text-kamalo-red transition-colors ${
                    location.pathname === item.path ? "text-kamalo-red" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Gallery Items */}
              <div className="px-4 py-2 text-gray-400 font-semibold">Gallery</div>
              {galleryItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className="block px-8 py-2 text-white hover:text-kamalo-red transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
