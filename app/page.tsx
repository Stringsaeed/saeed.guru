import Header from '@/components/header';
import WorkExperience from '@/components/work-experience';
import ProjectSection from '@/components/project-section';
import Writing from '@/components/writing';
import SocialLinks from '@/components/social-links';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-32">
        <Header />
        <WorkExperience />
        <ProjectSection />
        <Writing />
        <SocialLinks />
      </div>
    </div>
  );
}
