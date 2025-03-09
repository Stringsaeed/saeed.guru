"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SA Growth",
    description: "Developed a beta mobile app for business growth using React Native & TypeScript.",
    role: "Senior Software Engineer",
    period: "May 2022 – May 2024",
    location: "Remote, Saudi",
    tags: ["React Native", "TypeScript", "Business Growth"],
  },
  {
    title: "Baeynh",
    description: "Built a new mobile app featuring voice messaging, video calls, and real-time updates using Pusher.",
    role: "Senior Software Engineer",
    period: "Jan 2023 – Nov 2023",
    location: "Remote, Saudi",
    tags: ["React Native", "TypeScript", "Pusher", "Real-time"],
  },
  {
    title: "Eldertech",
    description: "Developed an app for elderly care using AWS (Chime, Lambda, Cognito, AppSync, Amplify).",
    role: "Mid-Level React Native Developer",
    period: "Aug 2021 – Nov 2021",
    location: "Remote, Germany",
    tags: ["React Native", "AWS", "Elderly Care"],
  },
  {
    title: "Rabbit Scooters",
    description: "Migrated the app to TypeScript & React Native v0.62, optimized micro-interactions.",
    role: "Mid-Level React Native Developer",
    period: "Feb 2020 – Aug 2020",
    location: "Cairo, Egypt",
    tags: ["React Native", "TypeScript", "Micro-interactions"],
  },
  {
    title: "react-native-tooltiplize",
    description: "A tooltip library for React Native.",
    role: "Open Source Contribution",
    isOpenSource: true,
    tags: ["React Native", "UI Library", "Open Source"],
  },
  {
    title: "react-native-notifications-utils",
    description: "Utilities for managing notifications in React Native.",
    role: "Open Source Contribution",
    isOpenSource: true,
    tags: ["React Native", "Notifications", "Open Source"],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>

                {!project.isOpenSource && (
                  <div className="mb-4">
                    <div className="text-sm font-medium">{project.role}</div>
                    {project.period && <div className="text-sm text-foreground/60">{project.period}</div>}
                    {project.location && <div className="text-sm text-foreground/60">{project.location}</div>}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  {project.isOpenSource ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Code className="h-4 w-4 mr-1" />
                        Docs
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

