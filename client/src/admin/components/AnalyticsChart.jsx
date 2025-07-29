import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Mon", users: 400, sales: 240 },
  { name: "Tue", users: 300, sales: 139 },
  { name: "Wed", users: 200, sales: 980 },
  { name: "Thu", users: 278, sales: 390 },
  { name: "Fri", users: 189, sales: 480 },
  { name: "Sat", users: 239, sales: 380 },
  { name: "Sun", users: 349, sales: 430 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Weekly Analytics Overview
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }} />
          <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={3} />
          <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
