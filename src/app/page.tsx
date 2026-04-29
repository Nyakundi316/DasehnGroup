import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SupportSection } from "@/components/home/SupportSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f4ef] text-[#17211d]">
      <HomeHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
      <SupportSection />
      <ContactSection />
      <HomeFooter />
    </main>
  );
}
