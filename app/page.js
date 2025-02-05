import { About } from "@/components/About";
import { Address } from "@/components/Address";
import { Events } from "@/components/Events";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <div className="container mx-auto px-5">
        <About />
        <Events />
        <Address />
      </div>
    </main>
  );
}
