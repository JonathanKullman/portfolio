import Hero from "./pages/hero"
import About from "./pages/about"
import Navbar from "./components/global/navbar";
import Experience from "./pages/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
      <About />
      
      <Experience />
    </main>
  );
}
