interface WorkItemProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  link: string;
}

function WorkItem({ logo, company, role, period, link }: WorkItemProps) {
  return (
    <a
      href={link}
      className="flex items-center gap-4 border-b border-border pb-4 transition-colors hover:text-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-xl">
        {logo}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{company}</h3>
        <p className="text-sm font-medium text-muted-foreground sm:text-base">{role}</p>
      </div>
      <div className="whitespace-nowrap text-sm text-muted-foreground">{period}</div>
    </a>
  );
}

export default function WorkExperience() {
  return (
    <section id="work" className="mb-16 w-full max-w-2xl">
      <h2 className="mb-6 text-lg font-bold text-foreground">Work</h2>

      <div className="space-y-8">
        <WorkItem
          logo="🛒"
          company="Dubizzle"
          role="Software Engineer III"
          period="Aug 2024 - Feb 2025"
          link="https://dubai.dubizzle.com/"
        />
        <WorkItem
          logo="📱"
          company="Linnk (Du)"
          role="Senior React Native Developer"
          period="Apr 2024 - Aug 2024"
          link="https://du.ae"
        />
        <WorkItem
          logo="💰"
          company="Nomo Fintech"
          role="Senior Software Engineer"
          period="Feb 2023 - May 2024"
          link="https://nomobank.com/"
        />
        <WorkItem
          logo="🍞"
          company="Breadfast"
          role="Senior Software Engineer"
          period="Feb 2022 - Mar 2023"
          link="https://breadfast.com/"
        />
        <WorkItem
          logo="🚀"
          company="Anspire Agency"
          role="Senior Software Developer"
          period="Dec 2021 - Jun 2022"
          link="https://anspire.agency/"
        />
      </div>
    </section>
  );
}

export { WorkItem };
