
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        KAMALO CITY
      </Link>
      
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
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-white hover:text-kamalo-red transition-colors focus:outline-none">
            Menu
            <ChevronDown className="ml-1 w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/95 border-gray-800 mt-2">
            <DropdownMenuItem asChild>
              <Link to="/menu" className="text-white hover:text-kamalo-red transition-colors">
                Standard Menu
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/menu/daily-specials" className="text-white hover:text-kamalo-red transition-colors">
                Daily Specials
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/menu/vegetable-sides" className="text-white hover:text-kamalo-red transition-colors">
                Vegetable Sides
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/menu/sides" className="text-white hover:text-kamalo-red transition-colors">
                Sides
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
                Restaurant Ambiance
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/gallery/food-and-drinks" className="text-white hover:text-kamalo-red transition-colors">
                Food & Drinks
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/gallery/events-and-entertainment" className="text-white hover:text-kamalo-red transition-colors">
                Events & Entertainment
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/gallery/services" className="text-white hover:text-kamalo-red transition-colors">
                Services (Barbershop, Hookah, Perfumes)
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

      {/* Mobile Menu */}
      <div className="md:hidden">
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
            <div className="p-4 space-y-4">
              <Link to="/" className="block text-white hover:text-kamalo-red transition-colors py-2">
                Home
              </Link>
              
              <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:text-kamalo-red transition-colors py-2">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pl-4">
                  <Link to="/services/hookah-lounge" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Hookah Lounge
                  </Link>
                  <Link to="/services/private-bookings" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Private Bookings
                  </Link>
                  <Link to="/services/live-entertainment" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Live Entertainment
                  </Link>
                  <Link to="/services/pre-order-food" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Pre-Order Food
                  </Link>
                  <Link to="/services/perfumes" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Perfumes
                  </Link>
                  <Link to="/services/barber-next-door" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Barber Next Door
                  </Link>
                  <Link to="/services/game-nights" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Game Nights
                  </Link>
                  <Link to="/services" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    View All Services
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={menuOpen} onOpenChange={setMenuOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:text-kamalo-red transition-colors py-2">
                  Menu
                  <ChevronDown className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pl-4">
                  <Link to="/menu" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Standard Menu
                  </Link>
                  <Link to="/menu/daily-specials" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Daily Specials
                  </Link>
                  <Link to="/menu/vegetable-sides" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Vegetable Sides
                  </Link>
                  <Link to="/menu/sides" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Sides
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={galleryOpen} onOpenChange={setGalleryOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:text-kamalo-red transition-colors py-2">
                  Gallery
                  <ChevronDown className={`w-4 h-4 transition-transform ${galleryOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pl-4">
                  <Link to="/gallery/restaurant-ambiance" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Restaurant Ambiance
                  </Link>
                  <Link to="/gallery/food-and-drinks" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Food & Drinks
                  </Link>
                  <Link to="/gallery/events-and-entertainment" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Events & Entertainment
                  </Link>
                  <Link to="/gallery/services" className="block text-gray-300 hover:text-kamalo-red transition-colors py-1">
                    Services
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Link to="/reservations" className="block text-white hover:text-kamalo-red transition-colors py-2">
                Reservations
              </Link>
              <Link to="/about" className="block text-white hover:text-kamalo-red transition-colors py-2">
                About Us
              </Link>
              <Link to="/contact" className="block text-white hover:text-kamalo-red transition-colors py-2">
                Contact Us
              </Link>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-kamalo-red transition-colors py-2">
                Instagram
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
