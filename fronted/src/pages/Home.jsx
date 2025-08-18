import HeroSection from "../components/Home/HeroSection";
import AlternatingSections from "../components/Home/AlternatingSections";
import SquarespaceSection from "../components/Home/SquarespaceSection";
import SkillsSection from "../components/Home/SkillsSection";
import ExperienceSection from "../components/Home/ExperienceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AlternatingSections />
      <SkillsSection/>
      <ExperienceSection/>
      <SquarespaceSection/>
    </>
  );
}
