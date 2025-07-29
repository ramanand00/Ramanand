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
          src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-1/481264915_1035230885109758_162520755978983577_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGIUM9vrW2lV6yniaDKVYQQWIvFEoTffF9Yi8UShN98X5FKKukYGXCVuopVVaTMQ2qlURJxVkmkNusNumzA40A4&_nc_ohc=VUQDgxEFFXIQ7kNvwFvw3I5&_nc_oc=AdnOEuV7W7NjIHl81nodN3hfM3mFhDnwlFeFkujAO-TzOv4L7nyDoUhs3wnqRVoVjkgiI18ZWRKXAbEJx3u1RNoN&_nc_zt=24&_nc_ht=scontent.fktm21-1.fna&_nc_gid=TPxL5RAMc6V23ICrTySu1w&oh=00_AfR1HTvFGX40cN-mctY_J3rJ32ifSh0eIvPdBt-LyLHybA&oe=6888C07C"
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
