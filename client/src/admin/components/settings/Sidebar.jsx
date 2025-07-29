import React from "react";

export default function Sidebar({ setActiveSection }) {
  const menuItems = [
    { label: "Personal details", key: "personalDetails" },
    { label: "Most Visited Settings", key: "mostVisited" },
    { label: "Tools & Resources", key: "tools" },
    { label: "Preferences", key: "preferences" },
  ];

  return (
    <aside className="w-full md:w-72 bg-[#242526] p-6 border-r border-[#3E4042]">
      <h2 className="text-lg font-semibold mb-4">Settings Menu</h2>
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-blue-400 transition"
            onClick={() => setActiveSection(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
