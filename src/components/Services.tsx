import { Utensils, Music, Scissors, Wind } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-kamalo-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover What <span className="text-kamalo-red">Kamalo City</span> Offers
          </h2>
          <p className="text-xl text-gray-300">
            Experience our wide range of services and offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-black/50 rounded-lg p-6">
            <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
            <Utensils className="w-8 h-8 text-kamalo-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Catering Services</h3>
            <p className="text-gray-300">
              Professional catering for events and celebrations. Pre-orders only, no delivery service available.
            </p>
          </div>

          <div className="bg-black/50 rounded-lg p-6">
            <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
            <Music className="w-8 h-8 text-kamalo-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Entertainment</h3>
            <p className="text-gray-300">
              Pool table, TV area, VIP lounge, live concerts and more exciting features coming soon!
            </p>
          </div>

          <div className="bg-black/50 rounded-lg p-6">
            <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
            <Scissors className="w-8 h-8 text-kamalo-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Hair Cutting</h3>
            <p className="text-gray-300">
              Professional haircuts by experienced barbers
            </p>
          </div>

          <div className="bg-black/50 rounded-lg p-6">
            <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
            <Wind className="w-8 h-8 text-kamalo-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Shisha & Perfumes</h3>
            <p className="text-gray-300">
              Premium shisha experiences and exotic perfumes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;