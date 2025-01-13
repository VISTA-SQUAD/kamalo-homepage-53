import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen bg-kamalo-dark">
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-kamalo-red">Kamalo City</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl">
            Experience authentic African cuisine at Kamalo City in Cape Town. Enjoy shisha,
            unique perfumes, and our welcoming atmosphere in Goodwood.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-6 text-lg">
              See Menu
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              See Our Instagram
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Chat with Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;