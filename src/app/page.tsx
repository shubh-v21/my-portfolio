import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">Shubh Verma</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="container mx-auto text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Hello, I'm Shubh</h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Full-Stack Web Developer | MERN & Next.js Enthusiast
        </p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:shubhverma2003@gmail.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Email Me
          </a>
          <a href="/Shubh-WebDeveloper-Resume.pdf" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Download Resume
          </a>
        </div>
      </section>

      <section id="about" className="container mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a passionate Full-Stack Web Developer skilled in MERN stack, Next.js and TailwindCSS. I build scalable, high-performance applications, continuously learning and contributing to innovative solutions. Currently pursuing my B.Tech in Computer Science Engineering (2022-2026).
        </p>
      </section>

      <section id="skills" className="container mx-auto py-16 px-6 bg-white rounded-lg shadow">
        <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Frontend</h4>
            <p>Next.js, React.js, TailwindCSS, JavaScript, HTML, CSS</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Backend</h4>
            <p>Node.js, Express.js, RESTful APIs, MongoDB</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Other</h4>
            <p>C++, Git, Postman, API Integration</p>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="space-y-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-2xl font-semibold mb-2">QuickBites</h4>
            <p className="text-gray-700 mb-4">
              A scalable food ordering platform with a Role-Based Admin Panel, JWT authentication, Context API, and Stripe payments—ensuring 99.9% secure transactions and 50% faster order processing.
            </p>
            <Link href="https://github.com/shubh-v21/Food-Delivery-App">
              <p className="text-blue-600 hover:underline">View on GitHub</p>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-2xl font-semibold mb-2">InvisiFeed</h4>
            <p className="text-gray-700 mb-4">
              A SaaS feedback system built with Next.js and NextAuth.js, powered by Gemini AI API for insights, smart invoicing with react-pdf, and payments via Razorpay. Processes 300+ invoices monthly and boosts engagement by 40%.
            </p>
            <Link href="https://invisifeed.vercel.app">
              <p className="text-blue-600 hover:underline">Visit Live</p>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-2xl font-semibold mb-2">DevTrackr</h4>
            <p className="text-gray-700 mb-4">
              A Chrome extension using GitHub & LeetCode-Stats APIs to track coding progress. Built with Manifest V3 and IndexedDB for fast storage, improving workflow efficiency by up to 40%.
            </p>
            <Link href="https://github.com/shubh-v21/DevTrackr">
              <p className="text-blue-600 hover:underline">View on GitHub</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="education" className="container mx-auto py-16 px-6 bg-white rounded-lg shadow">
        <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-semibold">B.Tech in CSE</h4>
            <p className="text-gray-700">Acropolis Institute of Technology and Research, Indore (2022-2026) | CGPA: 7.50</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">CBSE XII</h4>
            <p className="text-gray-700">Pioneer Convent, Indore (2020-2021) | Aggregate: 83%</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">CBSE X</h4>
            <p className="text-gray-700">S.I.C.A Senior Secondary School, Indore (2018-2019) | Aggregate: 94.4%</p>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-700 mb-6">Feel free to reach out for collaborations or freelancing opportunities.</p>
        <div className="space-x-4">
          <a href="mailto:shubhverma2003@gmail.com" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Email Me
          </a>
          <a href="tel:+919009118933" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Call Me
          </a>
        </div>
      </section>

      <footer className="bg-white py-6">
        <div className="container mx-auto text-center text-gray-500">
          © {new Date().getFullYear()} Shubh Verma. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Page;
