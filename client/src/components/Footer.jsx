import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden">
      {/* Animated Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-pink-400 to-indigo-400 animate-gradient-x" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Left - copyright & made with love */}
        <div className="flex flex-col md:flex-row items-center gap-2 animate-fade-in">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} Ramanand Mandal. All rights reserved.
          </p>
          <span className="hidden md:inline text-xs text-gray-400 dark:text-gray-500 mx-2">|</span>
          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            Made with <FaHeart className="text-red-500 animate-pulse" /> in Nepal
          </span>
        </div>
        {/* Center - quick nav */}
        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 animate-slide-up">
          <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
          <a href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
          <a href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          <a href="/resume.pdf" download className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Resume</a>
        </div>
        {/* Right - social links */}
        <div className="flex space-x-6 text-gray-600 dark:text-gray-400 animate-fade-in delay-200">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            aria-label="GitHub"
          >
            <FaGithub size={20} className="group-hover:scale-125 transition-transform duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} className="group-hover:scale-125 transition-transform duration-300" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            aria-label="Twitter / X"
          >
            <FaTwitter size={20} className="group-hover:scale-125 transition-transform duration-300" />
          </a>
          <a
            href="mailto:you@example.com"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            aria-label="Email"
          >
            <FaEnvelope size={20} className="group-hover:scale-125 transition-transform duration-300" />
          </a>
        </div>
      </div>
      {/* Animated floating shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <span className="absolute left-10 bottom-8 w-6 h-6 bg-indigo-400 opacity-30 rounded-full animate-float-slow"></span>
        <span className="absolute right-10 top-8 w-8 h-8 bg-pink-400 opacity-20 rounded-full animate-float"></span>
        <span className="absolute left-1/2 top-1/2 w-4 h-4 bg-indigo-300 opacity-20 rounded-full animate-float-reverse"></span>
      </div>
      {/* Custom Animations */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
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
          .delay-200 { animation-delay: 0.2s; }
          @keyframes float {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-18px);}
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-10px);}
          }
          .animate-float-slow {
            animation: float-slow 7s ease-in-out infinite;
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(12px);}
          }
          .animate-float-reverse {
            animation: float-reverse 5s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
}
