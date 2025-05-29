"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Mail,
  Phone,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Twitter,
  Linkedin,
  Coffee,
} from "lucide-react";

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-gray-800 z-50" role="banner">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6" aria-label="Main navigation">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Shubh Verma
          </h1>
          <ul className="hidden md:flex space-x-8" role="menubar">
            <li role="none">
              <a href="#about" className="hover:text-blue-400 transition-colors" role="menuitem">
                About
              </a>
            </li>
            <li role="none">
              <a href="#skills" className="hover:text-blue-400 transition-colors" role="menuitem">
                Skills
              </a>
            </li>
            <li role="none">
              <a href="#projects" className="hover:text-blue-400 transition-colors" role="menuitem">
                Projects
              </a>
            </li>
            <li role="none">
              <a href="#contact" className="hover:text-blue-400 transition-colors" role="menuitem">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="container mx-auto text-center py-32 px-6 mt-14"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-4xl mx-auto">
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hello, I'm Shubh Verma
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full-Stack Web Developer | MERN & Next.js Specialist | Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building scalable, high-performance web applications with modern technologies. 
            Passionate about creating innovative SaaS solutions that make a difference. 
            Currently pursuing B.Tech in Computer Science Engineering from Indore, India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="View Shubh Verma's portfolio projects"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border border-gray-600 bg-gray-800/50 text-gray-200 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-400 px-8 py-3 transition-all duration-300 cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Contact Shubh Verma"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-20 px-6" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Shubh Verma
          </h2>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am <strong>Shubh Verma</strong>, a passionate <strong>Full-Stack Web Developer</strong> from <strong>Indore, India</strong>, 
                specializing in <strong>MERN stack</strong>, <strong>Next.js</strong>, and <strong>modern web technologies</strong>. 
                With expertise in building scalable, high-performance applications, I focus on creating innovative SaaS solutions 
                that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my <strong>B.Tech in Computer Science Engineering</strong> (2022-2026) from 
                <strong> Acropolis Institute of Technology and Research, Indore</strong>. I have successfully delivered 
                multiple projects including food ordering platforms, feedback systems, and developer tools, 
                continuously learning and contributing to the tech community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 px-6" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="projects-heading" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects by Shubh Verma
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group rounded-lg border">
              <header className="p-6">
                <h3 className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors font-semibold">
                  InvisiFeed - SaaS Feedback System
                </h3>
                <p className="text-gray-300 mt-2">
                  AI-Powered Feedback Collection Platform for Freelancers
                </p>
              </header>
              <div className="px-6 pb-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <strong>InvisiFeed</strong> is an innovative SaaS tool built by Shubh Verma for freelancers, consultants, 
                  agencies, and service providers to collect structured client feedback through Smart Invoices. 
                  Features AI-powered insights using Gemini AI, smart invoicing with react-pdf, and secure payments via Razorpay.
                </p>
                <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used in InvisiFeed">
                  {[
                    "Next.js",
                    "NextAuth.js", 
                    "Gemini AI",
                    "Razorpay",
                    "React-PDF",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-purple-600/50 text-purple-300"
                      role="listitem"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-blue-400 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-400 transition-all duration-300"
                  asChild
                >
                  <Link href="https://invisifeed.vercel.app" aria-label="Visit InvisiFeed live website">
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    Visit Live
                  </Link>
                </Button>
              </div>
            </article>

            <article className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group rounded-lg border">
              <header className="p-6">
                <h3 className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors font-semibold">
                  OctoSpark - Developer Analytics
                </h3>
                <p className="text-gray-300 mt-2">
                  GitHub GraphQL Powered Developer Assessment Platform
                </p>
              </header>
              <div className="px-6 pb-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <strong>OctoSpark</strong> is a comprehensive developer analytics platform created by Shubh Verma 
                  that evaluates and scores GitHub profiles using advanced metrics and real-time analysis. 
                  Built to help recruiters, open-source maintainers, and developers assess coding talent objectively.
                </p>
                <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used in OctoSpark">
                  {["Next.js", "GraphQL", "ShadCN", "Next-Auth", "TypeScript"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-blue-600/50 text-blue-300"
                        role="listitem"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-blue-400 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 hover:border-blue-400 transition-all duration-300"
                  asChild
                >
                  <Link href="https://octospark.vercel.app" aria-label="Visit OctoSpark live website">
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    Visit Live
                  </Link>
                </Button>
              </div>
            </article>

            <article className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group lg:col-span-2 rounded-lg border">
              <header className="p-6">
                <h3 className="text-2xl text-green-400 group-hover:text-green-300 transition-colors font-semibold">
                  DevTrackr - Chrome Extension
                </h3>
                <p className="text-gray-300 mt-2">
                  Developer Progress Tracking Browser Extension
                </p>
              </header>
              <div className="px-6 pb-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <strong>DevTrackr</strong> is a Chrome extension developed by Shubh Verma using GitHub & LeetCode-Stats APIs 
                  to track coding progress. Built with Manifest V3 and IndexedDB for fast storage, 
                  improving developer workflow efficiency by up to 40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used in DevTrackr">
                  {[
                    "Chrome Extension",
                    "Manifest V3",
                    "IndexedDB",
                    "GitHub API",
                    "LeetCode API",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-green-600/50 text-green-300"
                      role="listitem"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-green-400 hover:bg-gradient-to-r hover:from-green-600/20 hover:to-emerald-600/20 hover:border-green-400 transition-all duration-300"
                  asChild
                >
                  <Link href="https://github.com/shubh-v21/DevTrackr" aria-label="View DevTrackr source code on GitHub">
                    <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20 px-6" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="skills-heading" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-blue-400">
                  Frontend Development
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Modern client-side technologies and frameworks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Frontend development skills">
                  {[
                    "Next.js",
                    "React.js",
                    "TailwindCSS",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-300"
                      role="listitem"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-400">
                  Backend Development
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Server-side technologies and database management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Backend development skills">
                  {[
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "RESTful APIs",
                    "JWT",
                    "Stripe",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-600/20 text-purple-300"
                      role="listitem"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-400">Tools & Technologies</CardTitle>
                <CardDescription className="text-gray-400">
                  Development tools and additional technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Tools and other technologies">
                  {[
                    "Git",
                    "Postman",
                    "C++",
                    "Chrome Extensions",
                    "API Integration",
                    "SaaS",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-green-600/20 text-green-300"
                      role="listitem"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20 px-6" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch with Shubh Verma
          </h2>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to collaborate on your next project? I'm available for freelance work, 
                full-time opportunities, and interesting collaborations. Let's build something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-4" role="list" aria-label="Contact and social media links">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:shubhverma2003@gmail.com" aria-label="Send email to Shubh Verma">
                    <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-gray-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:border-gray-400 px-6 py-3 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/shubh-v21"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Shubh Verma's GitHub profile"
                  >
                    <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-blue-400 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-blue-500/20 hover:border-blue-400 px-6 py-3 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://twitter.com/shubhverma21"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Shubh Verma on X (Twitter)"
                  >
                    <Twitter className="mr-2 h-4 w-4" aria-hidden="true" />
                    X
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-blue-300 hover:bg-gradient-to-r hover:from-blue-700/20 hover:to-blue-600/20 hover:border-blue-300 px-6 py-3 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/shubhverma21"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Shubh Verma on LinkedIn"
                  >
                    <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-600/20 hover:to-orange-600/20 hover:border-yellow-400 px-6 py-3 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://buymeacoffee.com/shubhverma"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Support Shubh Verma by buying a coffee"
                  >
                    <Coffee className="mr-2 h-4 w-4" aria-hidden="true" />
                    Buy me a Coffee
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Footer */}
      <footer className="py-8" role="contentinfo">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} <strong>Shubh Verma</strong>. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Full-Stack Web Developer from Indore, India | MERN Stack Specialist | Building the future, one project at a time.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Page;
