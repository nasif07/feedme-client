import About from "@/components/home/about";
import Categories from "@/components/home/categories";
import Faq from "@/components/home/faq";
import Header from "@/components/home/header";
import OurTeam from "@/components/home/ourTeam";
import ServingCustomer from "@/components/home/servingCustomer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Categories/>
      <ServingCustomer />
      <OurTeam />
      <Faq/>
    </>
  );
};

export default Home;
