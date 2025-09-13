import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export default function App() {
  const [admin] = useState({
    name: "Admin",
    role: "Administrator",
  });

  const signupData = [
    { date: "Sep 7", users: 5 },
    { date: "Sep 8", users: 8 },
    { date: "Sep 9", users: 12 },
    { date: "Sep 10", users: 6 },
    { date: "Sep 11", users: 10 },
    { date: "Sep 12", users: 15 },
    { date: "Sep 13", users: 20 },
  ];

  const revenueData = [
    { month: "Mar", revenue: 1200 },
    { month: "Apr", revenue: 1600 },
    { month: "May", revenue: 1400 },
    { month: "Jun", revenue: 2000 },
    { month: "Jul", revenue: 1800 },
    { month: "Aug", revenue: 2200 },
    { month: "Sep", revenue: 2500 },
  ];

  const recentTickets = [
    { id: 101, user: "Lavu", issue: "Slow Internet", status: "Open" },
    { id: 102, user: "Ravi", issue: "Billing Issue", status: "Resolved" },
    { id: 103, user: "Priya", issue: "Connection Drop", status: "Pending" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-red-600">BroadbandPro</h1>
          <p className="mt-4">👋 Welcome, {admin.name}</p>
          <p className="text-gray-500">Role: {admin.role}</p>
          <nav className="mt-6 space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100">📊 Dashboard</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">👥 Manage Users</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">📦 Plans</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">📈 Reports</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">⚙️ Settings</button>
          </nav>
        </div>
        <div className="mt-6 text-gray-500">🔒 Logout</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6">
        <h1 className="text-2xl font-bold">📊 Admin Dashboard</h1>
        <p className="text-gray-600">System overview and management tools.</p>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { value: "1,245", label: "Total Users", sub: "All Registered" },
            { value: "980", label: "Active Plans", sub: "Currently Active" },
            { value: "43", label: "Open Tickets", sub: "Support Requests" },
            { value: "$12,450", label: "Monthly Revenue", sub: "This Month" },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl p-6 text-white shadow-md bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition">
              <div className="text-3xl font-bold">{card.value}</div>
              <div className="text-lg">{card.label}</div>
              <div className="text-sm opacity-80">{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-2">User Signups (7 days)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={signupData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-2">Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#f43f5e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Support Tickets Table */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="font-semibold mb-4">Recent Support Tickets</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="p-2">Ticket ID</th>
                <th className="p-2">User</th>
                <th className="p-2">Issue</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTickets.map((t) => (
                <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">#{t.id}</td>
                  <td className="p-2">{t.user}</td>
                  <td className="p-2">{t.issue}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        t.status === "Open"
                          ? "bg-red-100 text-red-600"
                          : t.status === "Resolved"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

