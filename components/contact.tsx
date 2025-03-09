"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Info */}
          <div className="bg-card rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <Link
                    href="mailto:stringsaeed@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    stringsaeed@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <Link href="tel:+971501361648" className="text-foreground/70 hover:text-primary transition-colors">
                    +971 50 136 1648
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-foreground/70">Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/muhammed-saeed
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">GitHub</h4>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    github.com/stringsaeed
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" className="w-full" />
              </div>

              <div>
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>

              <div>
                <Input type="text" placeholder="Subject" className="w-full" />
              </div>

              <div>
                <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
              </div>

              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

