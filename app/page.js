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
    <main>
      <Header />
      <Main />
      <div className="container mx-auto px-5">
        <About />
        <Events />
        <May />
        <Fitness />
        <Address />
      </div>
      <Footer />
    </main>
  );
}
