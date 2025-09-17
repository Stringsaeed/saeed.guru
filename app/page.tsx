import Description from '@/components/description';
import ProjectSection from '@/components/project-section';
import SocialLinks from '@/components/social-links';
import WorkExperience from '@/components/work-experience';
import Writing from '@/components/writing';

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <Description />
        <WorkExperience />
        <ProjectSection />
        <Writing />
        <SocialLinks />
      </div>
    </div>
  );
}
