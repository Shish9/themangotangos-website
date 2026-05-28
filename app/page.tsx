import { Navbar } from "@/components/Navbar";
import { CursorGlow } from "@/components/CursorGlow";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Clips } from "@/sections/Clips";
import { Community } from "@/sections/Community";
import { Socials } from "@/sections/Socials";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Clips />
      <Community />
      <Socials />
      <Footer />
    </main>
  );
}
