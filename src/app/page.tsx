import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/home/Banner/Banner";
import About from "@/components/home/About/About";
import Services from "@/components/home/Services/Services";
import SlidingText from "@/components/home/SlidingText/SlidingText";
import Projects from "@/components/home/Projects/Projects";
import WhyChoose from "@/components/home/WhyChoose/WhyChoose";
import Team from "@/components/home/Team/Team";
import Process from "@/components/home/Process/Process";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import WhoWeServe from "@/components/home/WhoWeServe/WhoWeServe";
import Counter from "@/components/home/Counter/Counter";
import Pricing from "@/components/home/Pricing/Pricing";
import Blog from "@/components/home/Blog/Blog";
import Subscribe from "@/components/home/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Services />
        <SlidingText />
        <Projects />
        <WhyChoose />
        <Team />
        <Process />
        <Testimonials />
        <WhoWeServe />
        <Counter />
        <Pricing />
        <Blog />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
