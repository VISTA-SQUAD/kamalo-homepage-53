
import { Instagram, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Desktop Menu */}
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
              <Link to="/services/pre-order-food" className="text-white hover:text-kamalo-red transition-colors">
                Food & Pre-orders
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/live-entertainment" className="text-white hover:text-kamalo-red transition-colors">
                Live Music & Entertainment
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/private-bookings" className="text-white hover:text-kamalo-red transition-colors">
                Private Events
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/hookah-lounge" className="text-white hover:text-kamalo-red transition-colors">
                Hookah Lounge
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/perfumes" className="text-white hover:text-kamalo-red transition-colors">
                Perfumes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/barber-next-door" className="text-white hover:text-kamalo-red transition-colors">
                Barber Shop
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services/game-nights" className="text-white hover:text-kamalo-red transition-colors">
                Game Nights
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/services" className="text-white hover:text-kamalo-red transition-colors border-t border-gray-700 pt-2">
                View All Services
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-white hover:text-kamalo-red transition-colors focus:outline-none">
            Gallery
            <ChevronDown className="ml-1 w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/95 border-gray-800 mt-2">
            <DropdownMenuItem asChild>
              <Link to="/gallery/restaurant-ambiance" className="text-white hover:text-kamalo-red transition-colors">
                Gallery – Restaurant
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/gallery/services" className="text-white hover:text-kamalo-red transition-colors">
                Gallery – All Services
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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

      {/* Mobile Menu - Hamburger in top-right */}
      <div className="md:hidden ml-auto">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button className="text-white p-2">
              <Menu className="w-6 h-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-kamalo-dark border-gray-800">
            <DrawerHeader className="flex justify-between items-center">
              <DrawerTitle className="text-white">Menu</DrawerTitle>
              <DrawerClose asChild>
                <button className="text-white p-2">
                  <X className="w-6 h-6" />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <div className="p-4 space-y-4 flex flex-col h-full">
              <div className="flex-1 space-y-4">
                <Link to="/" className="block text-white hover:text-kamalo-red transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                
                <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:text-kamalo-red transition-colors py-2">
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/services/pre-order-food" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Food & Pre-orders
                    </Link>
                    <Link to="/services/live-entertainment" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Live Music & Entertainment
                    </Link>
                    <Link to="/services/private-bookings" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Private Events
                    </Link>
                    <Link to="/services/hookah-lounge" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Hookah Lounge
                    </Link>
                    <Link to="/services/perfumes" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Perfumes
                    </Link>
                    <Link to="/services/barber-next-door" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Barber Shop
                    </Link>
                    <Link to="/services/game-nights" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Game Nights
                    </Link>
                    <Link to="/services" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      View All Services
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={galleryOpen} onOpenChange={setGalleryOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:text-kamalo-red transition-colors py-2">
                    Gallery
                    <ChevronDown className={`w-4 h-4 transition-transform ${galleryOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/gallery/restaurant-ambiance" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Gallery – Restaurant
                    </Link>
                    <Link to="/gallery/services" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1" onClick={() => setIsOpen(false)}>
                      Gallery – All Services
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Link to="/reservations" className="block text-white hover:text-kamalo-red transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Reservations
                </Link>
                <Link to="/about" className="block text-white hover:text-kamalo-red transition-colors py-2" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link to="/contact" className="block text-white hover:text-kamalo-red transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-kamalo-red transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Instagram
                </a>
              </div>
              
              {/* Make Reservation Button at Bottom */}
              <div className="pt-4 border-t border-gray-700">
                <Link 
                  to="/reservations" 
                  className="block w-full bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Make Reservation
                </Link>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
