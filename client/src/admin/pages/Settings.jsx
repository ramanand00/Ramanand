import React, { useState } from "react"; // ✅ Fix here
import PersonalDetails from "../components/settings/PersonalDetails";
import Sidebar from "../components/settings/Sidebar";
import MostVisitedSettings from "../components/settings/MostVisitedSettings";
import ToolsResources from "../components/settings/ToolsResources";
import Preferences from "../components/settings/Preferences";
// import Navbar from "../components/Navbar";

export default function App() {
  const [activeSection, setActiveSection] = useState("mostVisited");

  const renderContent = () => {
    switch (activeSection) {
      case "personalDetails":
        return <PersonalDetails />;
      case "mostVisited":
        return <MostVisitedSettings />;
      case "tools":
        return <ToolsResources />;
      case "preferences":
        return <Preferences />;
      default:
        return <MostVisitedSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-[#18191A] text-white flex flex-col md:flex-row">
      <Sidebar setActiveSection={setActiveSection} />
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}
