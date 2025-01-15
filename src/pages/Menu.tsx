import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Menu = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Our <span className="text-kamalo-red">Menu</span>
        </h1>

        {/* Standard Menu */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Standard Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Beef Stew (355g)</h3>
                  <p className="text-sm text-gray-400 mb-2">R 133.65</p>
                  <p className="text-sm text-gray-300">
                    Beef in a light tomatoes and brinjals sauce. Served with pap or rice and veg.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Sides Menu */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Sides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Portion Pap</h3>
                  <p className="text-sm text-gray-400 mb-2">R 13.50</p>
                  <p className="text-sm text-gray-300">
                    Found in all traditional African homes, can be eaten with any of our other dishes.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Portion Rice</h3>
                  <p className="text-sm text-gray-400 mb-2">R 34.00</p>
                  <p className="text-sm text-gray-300">
                    Fried rice, perfect accompaniment to any main dish.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Veg Sides */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Veg Sides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Spinach</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    A combination of fresh vegetables to bring maximum flavour to the dish.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Kasava Leaves</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Tender kasava leaves, a unique and flavourful savoury taste, a very go to traditional meal.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Matembele</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Sweet potato leaves.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ndunda</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Also known as "Lenga Lenga", traditional vegetables used, also cultivated in South African soil.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ngai Ngai</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Ngai ngai or osielle, very delightful and sour taste to it which complements every other dish on our menu.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Repu</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    A very popular dish in places in Zimbabwe and has a very delightful flavour known for its freshness.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Daily Specials Notice */}
        <div className="bg-kamalo-red/10 border border-kamalo-red rounded-lg p-4 mb-8">
          <p className="text-center text-sm">
            Please note: Daily specials are only available on their designated days. Each day offers unique dishes that can only be ordered on that specific day unless otherwise indicated.
          </p>
        </div>

        {/* Monday's Specials */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Monday's Specials</h2>
          <p className="text-sm text-gray-400 mb-4">Only available on Mondays</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium">Kapenta</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">R 162.00</p>
                  <p className="text-sm text-gray-300">
                    Kapenta, cooked in a light tomato sauce. Served with pap and a veg of your choice.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium">Ngolo (Cat Fish)</h3>
                    <Badge className="bg-kamalo-gold">Popular</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">R 162.00</p>
                  <p className="text-sm text-gray-300">
                    Cooked ngolo with light green pepper sauce. Served with pap with veg of your choice.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Tuesday's Specials */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Tuesday's Specials</h2>
          <p className="text-sm text-gray-400 mb-4">Only available on Tuesdays</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Chicken Curry</h3>
                  <p className="text-sm text-gray-400 mb-2">R 145.00</p>
                  <p className="text-sm text-gray-300">
                    Tender chicken pieces cooked in a rich curry sauce. Served with rice or pap.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Vegetable Stir Fry</h3>
                  <p className="text-sm text-gray-400 mb-2">R 120.00</p>
                  <p className="text-sm text-gray-300">
                    A mix of seasonal vegetables stir-fried in a savory sauce. Served with rice.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Continue with Wednesday through Sunday specials */}
        {/* Add remaining daily specials sections */}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
