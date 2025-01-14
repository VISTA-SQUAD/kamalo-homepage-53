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

        {/* Main Dishes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Main Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium">Grilled T-Bone Steak</h3>
                    <Badge className="bg-kamalo-red">Popular</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">R 289.99</p>
                  <p className="text-sm text-gray-300">
                    Premium cut T-bone steak grilled to perfection, served with roasted vegetables and your choice of sides.
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
                    <h3 className="text-lg font-medium">Grilled Salmon</h3>
                    <Badge className="bg-kamalo-gold">Chef's Special</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">R 249.99</p>
                  <p className="text-sm text-gray-300">
                    Fresh Atlantic salmon fillet, grilled and glazed with honey-lemon sauce, served with quinoa and asparagus.
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
                    <h3 className="text-lg font-medium">Chicken Supreme</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">R 189.99</p>
                  <p className="text-sm text-gray-300">
                    Tender chicken breast stuffed with spinach and feta, served with mashed potatoes and seasonal vegetables.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Starters */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Starters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Calamari Rings</h3>
                  <p className="text-sm text-gray-400 mb-2">R 89.99</p>
                  <p className="text-sm text-gray-300">
                    Crispy fried calamari rings served with tartar sauce and lemon wedges.
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
                  <h3 className="text-lg font-medium mb-2">Greek Salad</h3>
                  <p className="text-sm text-gray-400 mb-2">R 79.99</p>
                  <p className="text-sm text-gray-300">
                    Fresh mixed greens, feta cheese, olives, cucumber, and tomatoes with olive oil dressing.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Desserts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Chocolate Lava Cake</h3>
                  <p className="text-sm text-gray-400 mb-2">R 69.99</p>
                  <p className="text-sm text-gray-300">
                    Warm chocolate cake with a molten center, served with vanilla ice cream.
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
                  <h3 className="text-lg font-medium mb-2">Crème Brûlée</h3>
                  <p className="text-sm text-gray-400 mb-2">R 59.99</p>
                  <p className="text-sm text-gray-300">
                    Classic French vanilla custard with a caramelized sugar crust.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Beverages */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Beverages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Signature Cocktails</h3>
                  <p className="text-sm text-gray-400 mb-2">From R 79.99</p>
                  <p className="text-sm text-gray-300">
                    Ask your server about our selection of handcrafted cocktails.
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
                  <h3 className="text-lg font-medium mb-2">Premium Wines</h3>
                  <p className="text-sm text-gray-400 mb-2">From R 89.99</p>
                  <p className="text-sm text-gray-300">
                    Extensive selection of local and international wines.
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