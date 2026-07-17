import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/home/Banner/Banner";
import About from "@/components/home/About/About";
import SlidingText from "@/components/home/SlidingText/SlidingText";
import Projects from "@/components/home/Projects/Projects";
import WhyChoosePartner from "@/components/home/WhyChoosePartner/WhyChoosePartner";
import Process from "@/components/home/Process/Process";
import Faq from "@/components/home/Faq/Faq";
import Testimonials from "@/components/home/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <SlidingText />
        <Projects />
        <WhyChoosePartner />
        <Process />
        <Faq />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
