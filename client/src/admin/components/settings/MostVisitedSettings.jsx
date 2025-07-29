import React from "react";

const settings = [
  {
    title: "Blocking",
    desc: "Review people you've previously blocked or add someone to your blocked list.",
    icon: "🚫",
  },
  {
    title: "Activity log",
    desc: "View and manage your activity on Facebook.",
    icon: "📄",
  },
  {
    title: "Dark mode",
    desc: "",
    icon: "💡",
  },
];

export default function MostVisitedSettings() {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Most visited settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {settings.map((s, i) => (
          <div key={i} className="bg-[#3A3B3C] p-4 rounded-lg">
            <div className="text-3xl mb-2">{s.icon}</div>
            <h3 className="font-bold">{s.title}</h3>
            <p className="text-sm text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
