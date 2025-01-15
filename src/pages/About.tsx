import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-kamalo-gold mb-8">About Kamalo City</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-4">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2020, Kamalo City has become a cornerstone of fine dining in Cape Town. 
                Our restaurant combines traditional African flavors with modern culinary techniques, 
                creating an unforgettable dining experience that celebrates our heritage while 
                embracing contemporary gastronomy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-4">Our Philosophy</h2>
              <p className="text-gray-300 leading-relaxed">
                At Kamalo City, we believe in the power of food to bring people together. Our 
                commitment to using locally-sourced ingredients supports our community while ensuring 
                the freshest, highest-quality dishes for our guests. Every meal is crafted with 
                passion, precision, and respect for our culinary traditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-4">Our Team</h2>
              <p className="text-gray-300 leading-relaxed">
                Our talented team of chefs and staff members brings together years of experience 
                in the culinary arts. Led by our head chef, we work tirelessly to create innovative 
                dishes that surprise and delight our guests while maintaining the highest standards 
                of service and hospitality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                We strive to be more than just a restaurant – we aim to be a cultural hub where 
                food lovers can explore the rich tapestry of African cuisine. Our vision is to 
                continue pushing culinary boundaries while preserving the authentic flavors that 
                make our dishes unique.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;