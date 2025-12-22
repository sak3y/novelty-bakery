import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import Banner from "../components/banner";
import Hero from "../components/hero";
import CategoriesSection from "../components/productCat";
import AboutCard from "../components/aboutCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Banner />
        <Navbar />
      </header>

      <main>
        <Hero />
        <CategoriesSection />
        <AboutCard />
      </main>

      <Gmap />
      <Footer />
    </div>
  );
};



export default Home;
