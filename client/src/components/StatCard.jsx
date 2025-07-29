// src/components/StatCard.jsx
import { motion } from "framer-motion";

const StatCard = ({ title, value, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition duration-300"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
    >
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-2">
        {title}
      </h4>
      <p className="text-2xl font-bold text-gray-800 dark:text-white">
        {value}
      </p>
    </motion.div>
  );
};

export default StatCard;
