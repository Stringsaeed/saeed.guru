import CodingStats from '@/components/coding-stats';
import Description from '@/components/description';
import DynamicStatus from '@/components/dynamic-status';
import GitHubActivity from '@/components/github-activity';
import NowPlaying from '@/components/now-playing';
import ProjectSection from '@/components/project-section';
import SocialLinks from '@/components/social-links';
import WorkExperience from '@/components/work-experience';
import Writing from '@/components/writing';

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="mx-auto max-w-xl px-6 py-10">
        <Description />
        <DynamicStatus />
        <NowPlaying />
        <WorkExperience />
        <ProjectSection />
        {/* <CodingStats /> */}
        <GitHubActivity />
        <Writing />
        <SocialLinks />
      </div>
    </div>
  );
}
