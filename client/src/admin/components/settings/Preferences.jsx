import React from "react";

export default function Preferences() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Preferences</h2>
      <div className="bg-[#3A3B3C] p-4 rounded-lg flex justify-between items-center">
        <div>
          <h3 className="font-bold">Privacy Center</h3>
          <p className="text-sm text-gray-300">
            Learn how to manage and control your privacy across Meta products.
          </p>
        </div>
        <span className="text-2xl">➡️</span>
      </div>
    </div>
  );
}
