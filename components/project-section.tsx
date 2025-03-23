interface Project {
  title: string;
  description: string;
  link: string;
  period: string;
  logo: string;
  name: string;
}

function ProjectItem({ item }: { item: Project }) {
  return (
    <a
      href={item.link}
      className="flex flex-col gap-2 hover:text-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-2">
        <span className="text-base">{item.logo}</span>
        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
        <p className="text-muted-foreground font-medium">{item.period}</p>
      </div>
      <p className="text-muted-foreground font-medium">
        {item.description}
      </p>
    </a>
  );
}

const projects: Project[] = [
  {
    title: "SA Growth",
    description:
      "Mobile app for business growth using React Native & TypeScript",
    link: "https://www.sa-growth.com/en",
    period: "May 2022 - May 2024",
    logo: "📈",
    name: "SA Growth",
  },
  {
    title: "Bynh",
    description:
      "Mobile app featuring voice messaging, video calls, and real-time updates",
    link: "https://bynh.sa/",
    period: "Jan 2023 - Nov 2023",
    logo: "💬",
    name: "Bynh",
  },
  {
    title: "Eldertech",
    description:
      "App for elderly care using AWS (Chime, Lambda, Cognito, AppSync, Amplify)",
    link: "https://www.eldertech.de/",
    period: "Aug 2021 - Nov 2021",
    logo: "👵",
    name: "Eldertech",
  },
  {
    title: "Rabbit Scooters",
    description:
      "Migrated the app to TypeScript & React Native v0.62, optimized micro-interactions",
    link: "https://rabbit-app.com/",
    period: "Feb 2020 - Aug 2020",
    logo: "🛴",
    name: "Rabbit Scooters",
  },
];

export default function ProjectSection() {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-bold mb-4 text-foreground">Projects</h2>
      <ul className="space-y-4">
        {projects.map((item) => (
          <ProjectItem key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
}

export { ProjectItem, type Project };
