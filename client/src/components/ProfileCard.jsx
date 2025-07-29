// src/components/ProfileCard.jsx
import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 w-full sm:w-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100?img=32"
          alt="User"
          loading="lazy"
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Ramanand Mandal
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-300">Admin</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Email: ramanand@example.com</p>
        <p>Status: <span className="text-green-500">Online</span></p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
