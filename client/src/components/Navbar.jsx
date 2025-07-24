import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion

const navItems = [
  { name: "Home",     path: "/" },
  { name: "About",    path: "/about" },
  { name: "Blogs",    path: "/blogs"},
  { name: "Projects", path: "/projects" },
  { name: "Skills",   path: "/skills" },
  { name: "Contact",  path: "/contact" },
  // { name: "Admin" ,   path: "/admin/upload"},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Knowtica
              </span>
              {/* <span className="text-gray-800 dark:text-gray-100">.</span> */}
            </Link>
          </motion.div>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ name, path }, idx) => (
              <motion.li
                key={name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.1, color: "#6366f1" }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative font-semibold px-2 py-1 transition-colors duration-200
                    ${isActive
                      ? "text-indigo-600 dark:text-indigo-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-indigo-500 after:rounded"
                      : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-indigo-100 dark:border-gray-800 shadow"
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.85, rotate: 10 }}
            initial={false}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4 space-y-2 shadow-lg rounded-b-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navItems.map(({ name, path }, idx) => (
              <motion.li
                key={name}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ scale: 1.05, color: "#6366f1" }}
              >
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-2 font-semibold rounded transition-colors duration-200
                    ${isActive
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900"
                      : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
