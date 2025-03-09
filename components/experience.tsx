"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Software Engineer III",
    company: "Dubizzle",
    location: "Dubai, UAE",
    period: "Aug 2024 – Feb 2025",
    stack: "React, React Native, TypeScript, Expo",
    contributions: [
      "Fixed iOS locators for E2E testing suites",
      "Added native and JavaScript error boundaries to handle crashes with custom error screens",
      "Implemented a feedback and rating popup to improve app ratings",
      "Enabled draft listings for users and made UI enhancements to listing screens",
      "Upgraded Android SDK to version 34 to comply with Play Store deprecations",
      "Introduced a billing system for agents to manage their payments",
      "Added a badges feature for listings to improve visibility and categorization",
    ],
  },
  {
    title: "Senior React Native Developer",
    company: "Linnk (Du)",
    location: "Dubai, UAE",
    period: "Apr 2024 – Aug 2024",
    stack: "React, React Native, TypeScript",
    contributions: [
      "Contributed to the transition from native iOS and Android to React Native",
      "Led the performance optimization team, applying best practices to enhance efficiency",
      "Replaced onboarding flow loading screens with custom-made Lottie animations",
      "Implemented a feature to allow users to cancel recurring add-ons",
      "Resolved issues with the login process on BAU (Brownfield Application)",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Nomo Fintech",
    location: "Remote, UK",
    period: "Feb 2023 – May 2024",
    stack: "React, React Native, TypeScript",
    contributions: [
      "Led the transition from UI Kitten package to a custom design system using Storybook",
      "Enhanced app's development workflow by optimizing CI/CD pipelines",
      "Implemented AIS, PIS, and COF flows for open banking API integration",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Breadfast",
    location: "Cairo, Egypt",
    period: "Feb 2022 – Mar 2023",
    stack: "React Native, TypeScript",
    contributions: [
      "Joined as the first mobile engineer post-COVID and fixed 20+ critical bugs",
      "Led shopping & growth development for the app with over 1 million active users",
      "Successfully introduced TypeScript to the codebase",
      "Implemented a new design system for consistent UI/UX",
      "Enhanced project infrastructure and CI/CD pipelines",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={cn(
                  "relative mb-12 md:mb-24 md:w-1/2 pl-10 md:pl-0",
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
                    : "md:pl-12 md:ml-auto md:mr-0"
                )}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute left-0 top-0 w-4 h-4 rounded-full bg-primary z-10",
                    index % 2 === 0
                      ? "md:left-auto md:right-0 md:transform md:translate-x-1/2"
                      : "md:right-auto md:left-0 md:transform md:-translate-x-1/2"
                  )}
                />

                {/* Content */}
                <div className="bg-card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <Briefcase className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>

                  <div className="mb-3">
                    <div className="text-lg font-medium">{exp.company}</div>
                    <div className="text-foreground/70">{exp.location}</div>
                  </div>

                  <div
                    className={cn(
                      "flex items-center  mb-4 text-sm text-foreground/60",
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    )}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-primary mb-1">
                      Technology Stack:
                    </div>
                    <div className="text-foreground/80">{exp.stack}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-primary mb-2">
                      Key Contributions:
                    </div>
                    <ul className="space-y-1.5">
                      {exp.contributions.map((contribution, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">
                            {contribution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
