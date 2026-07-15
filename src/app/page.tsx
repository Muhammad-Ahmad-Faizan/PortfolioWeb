import HomeHero from "@/components/sections/home-hero";
import FeaturedProjects from "@/components/sections/featured-projects";
import EngineeringPrinciples from "@/components/sections/engineering-principles";
import CurrentFocus from "@/components/sections/current-focus";
import ExperienceTimeline from "@/components/sections/experience-timeline";
import HomeTechStack from "@/components/sections/home-tech-stack";
import FeaturedNotes from "@/components/sections/featured-notes";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedProjects />
      <EngineeringPrinciples />
      <CurrentFocus />
      <ExperienceTimeline />
      <HomeTechStack />
      <FeaturedNotes />
    </>
  );
}