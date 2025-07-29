import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
import AnalyticsChart from "../components/AnalyticsChart";
import ProfileCard from "../components/ProfileCard";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";
// import api from "../../services/api";

const Dashboard = () => {
 

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* <Topbar /> */}

        <main className="p-6 space-y-6">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dashboard Overview
          </motion.h1>

          {/* Analytics & Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AnalyticsChart />
            </div>
            <ProfileCard />
          </div>

          {/* Quick Actions */}
          <QuickActions />

          {/* Recent Activity */}
          <RecentActivity />
        </main>

        <footer className="p-4 text-sm text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Dashboard Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
