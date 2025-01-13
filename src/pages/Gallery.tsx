import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white pt-24 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Our <span className="text-kamalo-red">Gallery</span>
      </h1>

      <Tabs defaultValue="restaurant" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
          <TabsTrigger value="barbershop">Barbershop</TabsTrigger>
          <TabsTrigger value="catering">Catering Services</TabsTrigger>
          <TabsTrigger value="perfumes">Perfumes & Shisha</TabsTrigger>
        </TabsList>

        <TabsContent value="restaurant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`https://source.unsplash.com/800x600/?restaurant,food`}
                  alt={`Restaurant ${index}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="barbershop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`https://source.unsplash.com/800x600/?barbershop,haircut`}
                  alt={`Barbershop ${index}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="catering">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`https://source.unsplash.com/800x600/?catering,event-food`}
                  alt={`Catering ${index}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="perfumes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={`https://source.unsplash.com/800x600/?perfume,shisha`}
                  alt={`Perfumes & Shisha ${index}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gallery;