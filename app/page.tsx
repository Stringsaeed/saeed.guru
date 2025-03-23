import Header from "@/components/header";
import WorkExperience from "@/components/work-experience";
import ProjectSection from "@/components/project-section";
import Writing from "@/components/writing";
import SocialLinks from "@/components/social-links";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-2xl mx-auto px-6 py-32">
        <Header />
        <WorkExperience />
        <ProjectSection />
        <Writing />
        <SocialLinks />
      </div>
    </div>
  );
}
