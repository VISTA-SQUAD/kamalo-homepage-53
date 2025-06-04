
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen bg-kamalo-dark">
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-kamalo-red">Kamalo City</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl">
            The beating heart of Goodwood's nightlife and culture. From sizzling Congolese cuisine to smoky hookah lounges and Afro-fusion beats, Kamalo isn't just a place to eat — it's a full-blown experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
