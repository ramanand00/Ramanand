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
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">
      {/* Sidebar: fixed on md+ screens, collapsible on mobile (optional) */}
      <aside className="w-full md:w-64 shrink-0">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Optional Topbar */}
        {/* <Topbar /> */}

        <main className="p-4 sm:p-6 space-y-6">
          <motion.h1
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Dashboard Overview
          </motion.h1>

          {/* Analytics & Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-1 lg:col-span-2">
              <div className="w-full h-full">
                <AnalyticsChart />
              </div>
            </div>
            <div className="w-full">
              <ProfileCard />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="w-full">
            <QuickActions />
          </div>

          {/* Recent Activity */}
          {/* <div className="w-full">
            <RecentActivity />
          </div> */}
        </main>

        {/* Footer */}
        <footer className="p-4 text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Dashboard Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
