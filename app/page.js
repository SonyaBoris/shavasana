import { About } from "@/components/About";
import { Address } from "@/components/Address";
import { Events } from "@/components/Events";
import Fitness from "@/components/Fitness";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import May from "@/components/May";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Header />
      <Main />
      <div className="site-container space-y-16 md:space-y-24">
        <About />
        <Events />
        {/* <May /> */}
        <Fitness />
        <Address />
      </div>
      <Footer />
    </main>
  );
}
