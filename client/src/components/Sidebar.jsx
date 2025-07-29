import { Home, BarChart2, Users, Settings, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { icon: <Home />, label: "Home" },
  { icon: <BarChart2 />, label: "Analytics" },
  { icon: <Users />, label: "Users" },
  { icon: <Settings />, label: "Settings" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      animate={{ width: expanded ? 220 : 60 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 text-white h-screen p-4 space-y-8"
    >
      <div className="flex items-center justify-between">
        {expanded && <h2 className="text-xl font-bold">Dashboard</h2>}
        <button onClick={() => setExpanded(!expanded)}>
          <Menu />
        </button>
      </div>
      <nav className="flex flex-col gap-4">
        {navItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            {item.icon}
            {expanded && <span>{item.label}</span>}
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
