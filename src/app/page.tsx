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
      <header className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Shubh Verma
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="container mx-auto text-center py-32 px-6 mt-14"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hello, I'm Shubh
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full-Stack Web Developer | MERN & Next.js Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building scalable, high-performance applications with modern
            technologies. Passionate about creating innovative solutions that
            make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer">
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border border-gray-600 bg-gray-800/50 text-gray-200 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-400 px-8 py-3 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors">
                  InvisiFeed
                </CardTitle>
                <CardDescription className="text-gray-300">
                  A SaaS for Freelancers and Agencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  InvisiFeed is a SaaS tool built for freelancers, consultants,
                  agencies, and service providers to collect structured client
                  feedback through Smart Invoices. Instead of sending plain
                  invoices, users can upload or create one, add a coupon, and
                  generate a new PDF invoice with a feedback link and QR code
                  attached.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                  <Link href="https://invisifeed.vercel.app">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors">
                  OctoSpark
                </CardTitle>
                <CardDescription className="text-gray-300">
                  GitHub GraphQL Powered Developer Analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A comprehensive developer analytics platform that evaluates
                  and scores GitHub profiles using advanced metrics and
                  real-time analysis. Built to help recruiters, open-source
                  maintainers, and developers assess coding talent objectively.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Next.js",
                    "GraphQL",
                    "ShadCN",
                    "Next-Auth",
                    "TypeScript",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-blue-600/50 text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="border border-gray-600 bg-gray-800/50 text-blue-400 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 hover:border-blue-400 transition-all duration-300"
                  asChild
                >
                  <Link href="https://octospark.vercel.app">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 group-hover:text-green-300 transition-colors">
                  DevTrackr
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Chrome Extension for Developer Progress Tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A Chrome extension using GitHub & LeetCode-Stats APIs to track
                  coding progress. Built with Manifest V3 and IndexedDB for fast
                  storage, improving workflow efficiency by up to 40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                  <Link href="https://github.com/shubh-v21/DevTrackr">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-blue-400">
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-400">Tools & Others</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
      <section id="contact" className="container mx-auto py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h3>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out for collaborations, freelancing
                opportunities, or just to say hello!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:shubhverma2003@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
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
                  >
                    <Github className="mr-2 h-4 w-4" />
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
                  >
                    <Twitter className="mr-2 h-4 w-4" />X
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
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
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
                  >
                    <Coffee className="mr-2 h-4 w-4" />
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
      <footer className="py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Shubh Verma. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Page;
