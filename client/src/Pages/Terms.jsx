import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const sections = [
  {
    id: "intro",
    title: "1. Welcome to Our Blogging Platform",
    content:
      "By using our blog website, you agree to these terms and conditions. Please read them carefully before publishing or reading any content.",
  },
  {
    id: "ownership",
    title: "2. Content Ownership",
    content:
      "All blog posts published by users remain their intellectual property. However, by posting on our platform, you grant us the right to display and distribute your content.",
  },
  {
    id: "responsibilities",
    title: "3. User Responsibilities",
    content:
      "You agree not to post any abusive, illegal, or plagiarized content. Any such violation can result in account suspension or termination.",
  },
  {
    id: "comments",
    title: "4. Comments & Interaction",
    content:
      "We encourage discussions but expect users to stay respectful. Spam, hate speech, or harassment will not be tolerated.",
  },
  {
    id: "termination",
    title: "5. Account Termination",
    content:
      "We reserve the right to disable or delete accounts that violate our terms without prior notice.",
  },
  {
    id: "updates",
    title: "6. Updates to Terms",
    content:
      "These terms may be updated over time. Significant changes will be announced on the blog dashboard.",
  },
  {
    id: "contact",
    title: "7. Contact",
    content:
      "Have questions? Email us at contact@yourblogsite.com. We're here to help!",
  },
];

const TermsAndConditions = () => {
  const [agreed, setAgreed] = useState(false);
  const contentRef = useRef(null);

  const handleScroll = () => {
    const bottom =
      contentRef.current.getBoundingClientRect().bottom <= window.innerHeight;
    if (bottom) setAgreed(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-indigo-100 dark:bg-indigo-900 transition-colors duration-500 py-10 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">
          Terms & Conditions
        </h1>
        <p className="text-indigo-600 dark:text-indigo-200 text-lg">
          Please read these carefully before using our platform.
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-4 gap-10">
        {/* Sidebar TOC */}
        <aside className="sticky top-20 hidden md:block">
          <div className="bg-white dark:bg-indigo-800 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
              Sections
            </h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-indigo-600 dark:text-indigo-200 hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <section
          ref={contentRef}
          className="md:col-span-3 space-y-10 transition-colors"
        >
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              custom={i}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-indigo-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                {section.title}
              </h2>
              <p className="text-indigo-600 dark:text-indigo-200 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Agree Button */}
          <div className="text-center pt-10">
            <button
              disabled={!agreed}
              className={`px-6 py-3 rounded-full font-semibold text-white transition-all ${
                agreed
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-300 cursor-not-allowed"
              }`}
            >
              {agreed ? "I Agree & Continue" : "Scroll to Agree"}
            </button>
          </div>
        </section>
      </div>

      <p className="text-center mt-16 text-sm text-indigo-500 dark:text-indigo-200">
        Last Updated: July 26, 2025
      </p>
    </div>
  );
};

export default TermsAndConditions;
