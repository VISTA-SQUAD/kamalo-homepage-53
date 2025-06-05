
import { useEffect, useRef, useState } from "react";
import { Wind, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PerfumeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const menFragrances = [
    "Antonio Banderas", "Aramis Original", "Armani Code", "Armani Black Code", "Azzaro Chrome",
    "Boss Bottled", "Boss Element Aqua", "Bvlgari Aqua", "Bvlgar Blue", "Bvlgar Man in Black",
    "CK One", "Chanel Blue", "Cool Water", "Creed Adventus", "Dolce & Gabbana",
    "D&G Light Blue", "David Beckham Signature", "Diesel for Men", "Diesel Only the Brave",
    "Dior Sauvage", "DKNY", "Dunhill Blue", "Dunhill Desire", "Dunhill Red",
    "English Blazer", "Fahrenheit", "Ferrari Black", "Guerlain Homme", "Giorgio Armani",
    "Gucci Rush", "Hugo Boss Blue", "Hugo Boss", "Hugo Boss Orange", "Issey Miyake",
    "Jean Paul Gautier", "Joop Original", "Kouros", "Lacoste Original", "Lacoste Blue",
    "M-7", "Michael Kors", "Mont Blanc Legend", "Old Spice", "Opium", "Paco R Black XS",
    "Paco R One Million", "Paco R Invictus", "Ted Lapidus", "Terre D'Hermes", "Tom Ford Noir",
    "Aramis Havana", "Tommy Boy", "Tsar", "Versace", "212 V.I.P", "Gianni Versace",
    "Black Musk", "Mr Burberry", "Escada", "Armani Emporio", "Angel", "Lacoste White",
    "Adidas", "Guess", "Tom Ford Unisex", "Armani Divine", "Euphoria", "Gucci Guilty Black",
    "Dunhill Fresh", "Givenchy (Gentlymen Only)", "Tsar Black"
  ];

  const womenFragrances = [
    "Armani Code", "Aromatics Elixir", "Angel", "Celine Dio-Magic", "Black Opium",
    "Britney Spears Curious", "Britney Spears Fantasy", "Bvlgari Omnia Crystaline", "Chloe",
    "Chloe Narcisse", "CKY Exclusion", "Chance Chanel", "Chanel No 5", "Chanel Allure",
    "Coco Mademoiselle", "Cool Water", "Coppelia", "DKNY", "DKNY Be Delicious",
    "Dolce & Gabbana", "D & G The One", "D & G Light Blue", "Elie Saab Le Parfum",
    "5th Avenue", "Far Away Avon", "Giorgio Armani Si", "Gucci Rush", "Gucci Guilty",
    "Good Girl", "Hugo Boss", "Happy Clinic", "Heat Beyonce", "Hypnotic Poison",
    "Issey Miyake", "J'Adore", "Jean Paul Gautier", "JS", "Kenzo Flowers",
    "Knowing", "Lacoste Pour Ferme", "Lacoste Pink", "Lady One Million", "La Vie Est Belle",
    "Mediterranean", "Marc Jacobs Daisy Eau So Fresh", "Narcissi Rodriguez", "Nicky Minaj Pink Friday",
    "Pacco R Olympea", "Panache", "Pleasure", "Poison", "Paris Hilton Teasen", "Provocative",
    "Ralph Lauren Blue", "Red Door", "Sun Flower", "Tommy Girl", "Thierry Mugler Alien",
    "Versace Bright Crystal", "Opium", "212 Carolina Herrera", "White Diamond",
    "Kim Kardashia Kim De Kim", "Little Black Dress", "Jo Life", "Jimmy Choo",
    "Victoria's Secret Bombshell", "Michael Kors", "Gucci Rush Ii", "DKNY Green Apple",
    "CK Euphoria", "Versace Dylan Blue", "Baby Johnson", "Britney Fantasy Midnight",
    "Crazy Love by Armour", "First by Lee Van Clef", "Narciso Rouge", "Our Moment",
    "Royal Desire", "Azaro Now", "Dunhill for Her", "CK One Unisex", "Bvlgari Blue",
    "Channel Premium", "Euphoria Gold", "Issey Miyaki Green", "Red Door Night",
    "Beautyfull", "Versace Rose", "Versace Gold", "Shakira", "Escada Born in Paradise",
    "212 VIP Rose", "212 VIP", "Guess", "Black XS Vanilla", "Taboo"
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-kamalo-red" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Discover Our <span className="text-kamalo-red">Signature Scents</span>
            </h2>
            <Sparkles className="w-8 h-8 text-kamalo-red" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Long-lasting, oil-based fragrances inspired by the world's top designers.
          </p>
          
          {/* Popular Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Wind className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">🔥 Popular Categories</h3>
              <p className="text-gray-300 text-sm">Oud, Vanilla Musk, Fresh Florals</p>
            </div>
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Sparkles className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">🏆 Best-Selling</h3>
              <p className="text-gray-300 text-sm">Designer-inspired favorites</p>
            </div>
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Wind className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Oil-Based</h3>
              <p className="text-gray-300 text-sm">Long-lasting & intense</p>
            </div>
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Sparkles className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Test Available</h3>
              <p className="text-gray-300 text-sm">Try before you buy</p>
            </div>
          </div>
        </div>

        {/* Fragrance Lists */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="men" 
              className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors"
            >
              <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6 px-6 text-xl font-bold">
                🧔 Men's Fragrances ({menFragrances.length} Available)
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {menFragrances.map((fragrance, index) => (
                    <div key={index} className="text-gray-300 text-sm py-1 px-2 bg-gray-800 rounded">
                      {fragrance}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-kamalo-red/20 rounded-lg">
                  <p className="text-kamalo-red font-semibold">Special Pricing:</p>
                  <p className="text-gray-300 text-sm">50ml - R70 | 25ml - R35 | 100ml - R150</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="women" 
              className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors"
            >
              <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6 px-6 text-xl font-bold">
                👩 Women's Fragrances ({womenFragrances.length} Available)
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {womenFragrances.map((fragrance, index) => (
                    <div key={index} className="text-gray-300 text-sm py-1 px-2 bg-gray-800 rounded">
                      {fragrance}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-kamalo-red/20 rounded-lg">
                  <p className="text-kamalo-red font-semibold">Special Pricing:</p>
                  <p className="text-gray-300 text-sm">50ml - R70 | 25ml - R35 | 100ml - R150</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Find Your Perfect <span className="text-kamalo-red">Signature Scent</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Visit our perfume center inside the restaurant. Test any fragrance and discover your new favorite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Call: +27 73 159 8909
              </a>
              <a
                href="/services/perfumes"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfumeSection;
