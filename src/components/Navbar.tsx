
import { Instagram, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-white hover:text-kamalo-red transition-colors focus:outline-none">
            Services
            <ChevronDown className="ml-1 w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/95 border-gray-800 mt-2">
            <DropdownMenuItem asChild>
              <Link to="/services/hookah-lounge" className="text-white hover:text-kamalo-red transition-colors">
                Hookah Lounge
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/private-bookings" className="text-white hover:text-kamalo-red transition-colors">
                Private Bookings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/live-entertainment" className="text-white hover:text-kamalo-red transition-colors">
                Live Entertainment
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/pre-order-food" className="text-white hover:text-kamalo-red transition-colors">
                Pre-Order Food
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/perfumes" className="text-white hover:text-kamalo-red transition-colors">
                Perfumes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/barber-next-door" className="text-white hover:text-kamalo-red transition-colors">
                Barber Next Door
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/game-nights" className="text-white hover:text-kamalo-red transition-colors">
                Game Nights (Tournaments)
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services" className="text-white hover:text-kamalo-red transition-colors border-t border-gray-700 pt-2">
                View All Services
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
