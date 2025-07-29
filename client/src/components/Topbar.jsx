const Topbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />
      <div className="flex items-center gap-4">
        <button className="text-gray-700 dark:text-white">🔔</button>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-indigo-600"
        />
      </div>
    </div>
  );
};

export default Topbar;
