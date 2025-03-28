import Image from 'next/image';

interface WorkItemProps {
  logo: React.ReactNode;
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
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-muted text-xl">
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
          logo={<Image src="/dubizzle.png" alt="Dubizzle" width={40} height={40} />}
          company="Dubizzle"
          role="Software Engineer III"
          period="Aug 2024 - Feb 2025"
          link="https://business.dubizzle.com/?page_id=2444"
        />
        <WorkItem
          logo={<Image src="/du.png" alt="du" width={40} height={40} />}
          company="Linnk (Du)"
          role="Senior React Native Developer"
          period="Apr 2024 - Aug 2024"
          link="https://du.ae"
        />
        <WorkItem
          logo={<Image src="/nomo.png" alt="nomo" width={40} height={40} />}
          company="Nomo Fintech"
          role="Senior Software Engineer"
          period="Feb 2023 - May 2024"
          link="https://nomobank.com/"
        />
        <WorkItem
          logo={<Image src="/breadfast.png" alt="Breadfast" width={40} height={40} />}
          company="Breadfast"
          role="Senior Software Engineer"
          period="Feb 2022 - Mar 2023"
          link="https://breadfast.com/"
        />
        <WorkItem
          logo={
            <Image
              src="https://anspire.agency/wp-content/uploads/2019/02/anspire_white.svg"
              alt="Anspire Agency"
              className="p-1"
              width={40}
              height={40}
            />
          }
          company="Anspire Agency"
          role="Senior Software Developer"
          period="Apr 2020 - Jun 2022"
          link="https://anspire.agency/"
        />
      </div>
    </section>
  );
}

export { WorkItem };
