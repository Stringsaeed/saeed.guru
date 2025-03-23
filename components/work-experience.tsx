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
      className="flex items-center gap-4 border-b border-border pb-4 hover:text-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-muted border border-border rounded-full text-xl">
        {logo}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{company}</h3>
        <p className="text-muted-foreground text-sm sm:text-base font-medium">{role}</p>
      </div>
      <div className="text-muted-foreground text-sm whitespace-nowrap">
        {period}
      </div>
    </a>
  );
}

export default function WorkExperience() {
  return (
    <section id="work" className="w-full max-w-2xl mb-16">
      <h2 className="text-lg font-bold mb-6 text-foreground">Work</h2>

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