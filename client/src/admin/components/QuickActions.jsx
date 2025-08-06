import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    { name: "Upload Blog", path: "/new-blogs" },
    { name: "Blogs", path: "/admin-blogs" },
    { name: "Users Contacts", path: "/admin-page" },
    { name: "System Settings", path: "/settings" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {actions.map((action) => (
        <Link key={action.name} to={action.path}>
          <button className="w-full bg-indigo-600 text-white p-4 rounded shadow hover:bg-indigo-700 transition duration-200">
            {action.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;
