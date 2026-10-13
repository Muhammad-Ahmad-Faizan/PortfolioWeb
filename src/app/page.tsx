import HomeHero from "@/components/sections/home-hero";
import ClientsStrip from "@/components/sections/clients-strip";
import FeaturedProjects from "@/components/sections/featured-projects";
import SystemFlow from "@/components/sections/system-flow";
import HowIWork from "@/components/sections/how-i-work";
import HomeTechStack from "@/components/sections/home-tech-stack";
import FeaturedNotes from "@/components/sections/featured-notes";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ClientsStrip />
      <FeaturedProjects />
      <SystemFlow />
      <HowIWork />
      <HomeTechStack />
      <FeaturedNotes />
    </>
  );
}
