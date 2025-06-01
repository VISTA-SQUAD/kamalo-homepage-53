
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Music, Users, Scissors, Wind, Award, Clock, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Food Service",
      description: "Experience authentic African cuisine prepared with traditional recipes and fresh ingredients. Our main offering brings you the true taste of Africa.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Pre-Orders",
      description: "Order your favorite dishes in advance and have them ready for pickup. Delivery service coming soon to bring Kamalo City flavors directly to your door.",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Live Entertainment",
      description: "Enjoy exciting concerts, DJ performances, cultural nights, and special events. Experience the vibrant culture and energy of Kamalo City.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Private Bookings",
      description: "Book our entire venue for your special occasions. Perfect for parties, birthdays, corporate events, and private celebrations.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Barber Shop",
      description: "Professional haircuts and grooming services located right next to the restaurant. Enjoy a fresh cut while you wait for your meal.",
      icon: Scissors,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Perfumes for Sale",
      description: "Discover our collection of unique and exotic perfumes available for purchase. Find your signature scent at Kamalo City.",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Hookah Pipes",
      description: "Relax and unwind with our premium hookah and shisha selection. Perfect for socializing and enjoying a peaceful evening.",
      icon: Wind,
      image: "/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png"
    },
    {
      id: 8,
      title: "Tournaments – Coming Soon",
      description: "Get ready for exciting gaming tournaments and event-style competitions. Stay tuned for more details on upcoming tournaments.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white pt-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-kamalo-red">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover everything Kamalo City has to offer. From authentic African cuisine to entertainment, grooming, and unique shopping experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`bg-black/50 border-gray-800 hover:border-kamalo-red transition-all duration-300 ${
                  service.featured ? 'lg:col-span-2' : ''
                } ${service.comingSoon ? 'opacity-80' : ''}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-kamalo-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className="w-6 h-6 text-kamalo-red" />
                    <CardTitle className="text-white text-xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call Us: +27 73 159 8909
              </a>
              <a
                href="/reservations"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Make Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
