import About from "@/components/home/about";
import Faq from "@/components/home/faq";
import Header from "@/components/home/header";
import OurTeam from "@/components/home/ourTeam";
import ServingCustomer from "@/components/home/servingCustomer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServingCustomer />
      <OurTeam />
      <Faq/>
    </>
  );
};

export default Home;
