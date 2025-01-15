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

        {/* Monday's Specials */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Monday's Specials</h2>
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

            {/* Add more Monday specials here */}
          </div>
        </section>

        {/* Sides */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Sides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium">Portion Pap</h3>
                    <Badge className="bg-kamalo-gold">100% (3)</Badge>
                  </div>
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
                    Fried rice, a very popular dish among customers to be enjoyed with other dishes such as beans or matembele.
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
                  <h3 className="text-lg font-medium mb-2">Shikwanga (Sour Pap)</h3>
                  <p className="text-sm text-gray-400 mb-2">R 33.75</p>
                  <p className="text-sm text-gray-300">
                    Soured kasva pap, enjoy it with any other of our delicious dishes.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;