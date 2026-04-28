import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import StaffingSolutions from "@/components/sections/StaffingSolutions";
import Careers from "@/components/sections/Careers";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Clients />
        <About />
        <Services />
        <StaffingSolutions />
        <Careers />
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
