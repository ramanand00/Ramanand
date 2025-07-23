import React from "react";
import Navbar from "../components/Navbar";
import { FaFilePdf, FaTrophy } from "react-icons/fa";
import certificate1 from "../assets/web-cert.jpg";
import certificate2 from "../assets/ramanand.jpg";
import certificate3 from "../assets/about.jpg";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Academia Int'l College",
      date: "10 Jul 2023",
      image: certificate1,
      downloadLink: "#",
    },
    {
      id: 2,
      title: "Ethical Hacking",
      issuer: "Prashikshan & Code Himalaya",
      date: "7 Mar 2024",
      image: certificate2,
      downloadLink: "#",
    },
    {
      id: 3,
      title: "Node.js Certification",
      issuer: "Tech University",
      date: "January 2023",
      image: certificate3,
      downloadLink: "#",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Top 10 Finalist in National Hackathon",
      description: "Secured position among top 10 teams in National Coding Hackathon 2024.",
      date: "Feb 2024",
    },
    {
      id: 2,
      title: "Completed 25+ GitHub Contributions in a Month",
      description: "Maintained consistent coding streak and contributed to open-source.",
      date: "Jan 2024",
    },
    {
      id: 3,
      title: "Organized Coding Workshop",
      description: "Led a 2-day JavaScript bootcamp for beginners with 50+ participants.",
      date: "Dec 2023",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              My Certifications
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the certifications I've earned through dedicated learning and skill development.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Image with Hover Download Icon */}
                <div className="relative group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                    <a
                      href={cert.downloadLink}
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700"
                      download
                    >
                      <FaFilePdf className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <a
                    href={cert.downloadLink}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    download
                  >
                    <FaFilePdf className="mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
              My Achievements
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These achievements highlight my commitment to learning, sharing knowledge, and community contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achieve) => (
              <div
                key={achieve.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <FaTrophy className="text-yellow-500 text-3xl mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {achieve.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {achieve.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  {achieve.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
