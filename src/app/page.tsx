import { Navbar } from "@/components/navbar";
import HeroFuturistic from "@/components/ui/hero-futuristic";
import { Timeline } from "@/components/timeline";
import { Features } from "@/components/features";
import { Contact } from "@/components/contact";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <HeroFuturistic />
      <Timeline />
      <Features />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
