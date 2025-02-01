import { About, Address, Events, Header, Main } from "@/components";

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
