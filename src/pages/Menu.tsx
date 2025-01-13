import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white pt-24 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Our <span className="text-kamalo-red">Menu</span>
      </h1>

      {/* Daily Standard Dishes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Daily Standard Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium">Beef Stew (355 g)</h3>
                  <Badge className="bg-green-500">Popular</Badge>
                </div>
                <p className="text-sm text-gray-400 mb-2">R 133.65</p>
                <p className="text-sm text-gray-300">
                  Beef in a light tomatoes and brinjals sauce. Served with pap or rice and veg.
                </p>
              </div>
              <Button size="icon" className="bg-green-500 hover:bg-green-600">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium">Grilled Thomson</h3>
                  <Badge className="bg-green-500">Popular</Badge>
                </div>
                <p className="text-sm text-gray-400 mb-2">R 133.65</p>
                <p className="text-sm text-gray-300">
                  Well seasoned grilled thomson. Served with pap or rice and a side of traditional veg.
                </p>
              </div>
              <Button size="icon" className="bg-green-500 hover:bg-green-600">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Add more menu items following the same pattern */}
        </div>
      </section>

      {/* Daily Specials Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Today's Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Similar card structure for specials */}
        </div>
      </section>

      {/* Vegetable Sides */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Vegetable Sides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium mb-2">Spinach</h3>
                <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                <p className="text-sm text-gray-300">
                  A combination of fresh vegetables to bring maximum flavor to the dish.
                </p>
              </div>
              <Button size="icon" className="bg-green-500 hover:bg-green-600">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>
          {/* Add more vegetable sides following the same pattern */}
        </div>
      </section>
    </div>
  );
};

export default Menu;