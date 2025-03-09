"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="bg-card rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Professional Summary</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              React Native Engineer with 7+ years of experience in mobile development, UI/UX, and AI-driven
              applications. Proven expertise in designing, developing, and optimizing mobile applications using React
              Native, TypeScript, and modern cloud services. Passionate about delivering high-performance applications
              and mentoring teams to drive innovation and efficiency. Strong background in DevOps, native modules
              development (iOS & Android), and infrastructure optimization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-medium">Bachelor's Degree in Computer Science</h4>
                  <p className="text-foreground/70">El-Shorouk Academy, Cairo | 2014 – 2019</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
                <div className="bg-background rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span>English</span>
                    <span className="text-primary">Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arabic</span>
                    <span className="text-primary">Native</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Soft Skills & Leadership</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-background rounded-lg p-3 flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Team Leadership & Mentorship</span>
                </div>
                <div className="bg-background rounded-lg p-3 flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Problem-Solving & Critical Thinking</span>
                </div>
                <div className="bg-background rounded-lg p-3 flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Agile Development & Collaboration</span>
                </div>
                <div className="bg-background rounded-lg p-3 flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Cross-Functional Communication</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

