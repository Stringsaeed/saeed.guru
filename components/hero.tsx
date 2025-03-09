"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-foreground"
          >
            Muhammed Saeed
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium text-primary mb-6 h-16"
          >
            <TypeAnimation
              sequence={[
                "React Native Engineer",
                1000,
                "Mobile & UX Specialist",
                1000,
                "AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-foreground/80 text-lg mb-8"
          >
            Based in Dubai, UAE
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <Link
              href="mailto:stringsaeed@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/stringsaeed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://github.com/stringsaeed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="tel:+971501361648"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="#about">
              <Button variant="default" className="rounded-full px-6">
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
