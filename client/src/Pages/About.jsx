import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import profileImg from "../assets/About.jpg";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

// You can use animate.css or Tailwind CSS animation utilities for simple effects

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-[100vh] px-6 py-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="w-100 h-130 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg  animate-fade-in">
              <img
                src={profileImg}
                alt="Ramanand Mandal"
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-700"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
          {/* About Content */}
          <div className="flex-1 text-center md:text-left animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 transition-colors duration-500">
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-opacity duration-700 delay-100 animate-fade-in">
              Hello! I'm <strong>Ramanand Mandal</strong>, a passionate and creative full-stack web
              developer based in Nepal. I specialize in building modern, responsive, and
              high-performance web applications using technologies like React, Tailwind CSS,
              Node.js, Express, and MongoDB.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-opacity duration-700 delay-200 animate-fade-in">
              I love solving real-world problems through code, designing user-centric
              interfaces, and continuously improving my skills. My goal is to become a
              world-class software engineer and contribute to impactful tech projects.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-opacity duration-700 delay-300 animate-fade-in">
              When I'm not coding, I enjoy exploring new tools, reading about AI & startups,
              and sharing knowledge through blogs or open-source.
            </p>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-6 animate-fade-in">
              <a
                href="https://github.com/ramanand00"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="GitHub"
              >
                <FaGithub size={28} className="hover:scale-125 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramanand-mandal-24a124324/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={28} className="hover:scale-125 transition-transform duration-300" />
              </a>
              <a
  href="https://drive.google.com/file/d/1Hin5gNeNgdr8dKrC9R5SAy21LdDtDYiI/view"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm text-white font-medium shadow-md hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out animate-fade-in glow-on-hover"
>
  <FaFilePdf size={16} className="text-white drop-shadow-sm" />
  View CV
</a>

            </div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
              <span className="flex items-center gap-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold animate-bounce-slow">
                <FaReact /> React
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold animate-bounce-slow delay-100">
                <FaNodeJs /> Node.js
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-xs font-semibold animate-bounce-slow delay-200">
                <SiExpress /> Express.js
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold animate-bounce-slow delay-300">
                <SiMongodb /> MongoDB
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-semibold animate-bounce-slow delay-400">
                <SiTailwindcss /> Tailwind CSS
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold animate-bounce-slow delay-500">
                <FaJs /> JavaScript
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-xs font-semibold animate-bounce-slow delay-600">
                <FaHtml5 /> HTML5
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold animate-bounce-slow delay-700">
                <FaCss3Alt /> CSS3
              </span>
            </div>
          </div>
          {/* View CV from Google Drive */}
{/* <div className="flex justify-center md:justify-start gap-6 mt-6 animate-fade-in">
  <a
    href="https://drive.google.com/file/d/1Hin5gNeNgdr8dKrC9R5SAy21LdDtDYiI/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
  >
    View My CV
  </a>
</div> */}
        </div>
      </section>

      {/* <Footer /> */}

      {/* Tailwind custom animation styles */}
      <style>
        {`
        .glow-on-hover:hover {
      box-shadow: 0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(138, 43, 226, 0.4);
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(60px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-up {
            animation: slide-up 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-8px);}
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-700 { animation-delay: 0.7s; }
        `}
      </style>
    </>
  );
}
