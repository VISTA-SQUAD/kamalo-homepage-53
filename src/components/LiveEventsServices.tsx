
import { Music, Scissors, Wind, Users, Calendar, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const LiveEventsServices = () => {
  const services = [
    {
      id: "hookah",
      icon: Wind,
      title: "Hookah Lounge Vibes — Daily from 6 PM",
      description: "Premium hookah experience with mint, apple, and fruity blends in our ambient lounge. R150 per session, 18+ welcome.",
      highlights: "🎶 Live DJs. 🪩 Low lights. 🍹 Drinks flowing.",
      link: "/services/hookah-lounge"
    },
    {
      id: "barber",
      icon: Scissors,
      title: "Get Faded, Stay Fresh – In-House Barbershop",
      description: "Professional cuts for just R60. Walk-in service available with food and drinks right after your trim.",
      link: "/services/barber-next-door"
    },
    {
      id: "games",
      icon: Calendar,
      title: "Game Nights Are Coming Soon",
      description: "Pool, Uno, chess, dominoes with prizes and late-night eats. Bringing community energy back to Goodwood.",
      link: "/services/game-nights"
    },
    {
      id: "private-events",
      icon: Users,
      title: "Host Your Private Event at Kamalo",
      description: "Full venue hire for birthdays and celebrations. Seats 80 guests with sound system and custom décor options.",
      link: "/services/private-bookings"
    },
    {
      id: "live-music",
      icon: Music,
      title: "Live Music & Dancefloor Fridays",
      description: "Weekend beats from Congolese classics to Afro throwbacks. Reserve your VIP table early.",
      link: "/services/live-entertainment"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            More Than Just <span className="text-kamalo-red">Dining</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete entertainment and service experience that makes Kamalo City a destination, not just a meal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition-all duration-500 block"
              >
                <IconComponent className="w-12 h-12 text-kamalo-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-3">{service.description}</p>
                {service.highlights && (
                  <p className="text-kamalo-red text-sm">{service.highlights}</p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveEventsServices;
