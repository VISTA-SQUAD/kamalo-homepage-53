
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-kamalo-dark">
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-kamalo-red">Kamalo City</span> – Where Flavor, Vibes & Culture Collide
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl">
            The beating heart of Goodwood's nightlife and culture. From sizzling Congolese cuisine to smoky hookah lounges and Afro-fusion beats, Kamalo isn't just a place to eat — it's a full-blown experience.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-6 text-lg flex items-center rounded-full">
                  See Menu
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
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
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
              <Link to="/reservations">Make Reservation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
