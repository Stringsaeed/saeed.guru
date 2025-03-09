"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Server, Database, Cloud, Smartphone, Palette, Wrench, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["React", "React Native", "TypeScript", "JavaScript", "Expo"],
  },
  {
    title: "Native Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["Swift", "Kotlin", "Java", "Objective-C"],
  },
  {
    title: "UI/UX",
    icon: <Palette className="h-6 w-6" />,
    skills: ["UI/UX Optimization", "Performance Tuning", "Figma"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "GraphQL", "REST APIs", "Flask (Python)"],
  },
  {
    title: "DevOps",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["CI/CD Pipelines", "Release Management", "Fastlane"],
  },
  {
    title: "Cloud Services",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "GCP", "Firebase", "AppCenter"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Xcode", "Android Studio", "Jira", "VSCode"],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span className="text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

