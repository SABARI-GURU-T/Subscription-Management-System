import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export default function App() {
  const [user] = useState({
    name: "Lavu",
    created_at: "2025-09-07T12:00:00Z",
    plan: { name: "1GB Pack", speed: 100, cap: 1 },
  });

  const dailyData = [
    { date: "Sep 7", usage: 4 },
    { date: "Sep 8", usage: 8 },
    { date: "Sep 9", usage: 6 },
    { date: "Sep 10", usage: 10 },
    { date: "Sep 11", usage: 3 },
    { date: "Sep 12", usage: 5 },
    { date: "Sep 13", usage: 7 },
  ];

  const hourlyData = Array.from({ length: 24 }, (_, h) => ({

    usage: Math.random() * 3,
  }));

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-600">BroadbandPro</h1>
          <p className="mt-4">👋 Welcome, {user.name}</p>
          <p className="text-gray-500">Role: User</p>
          <p className="mt-2">⭐ Loyalty Points: 169</p>
          <nav className="mt-6 space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100">🏠 Dashboard</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">🛒 Marketplace</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">📊 Analytics</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">👤 Profile</button>
          </nav>
        </div>
        <div className="mt-6 text-gray-500">⚙ Settings</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6">
        <h1 className="text-2xl font-bold">🏠 Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user.name}! 👋</p>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { value: "6", label: "Days Active", sub: "Account Age" },
            { value: "0 GB", label: "Data Used", sub: "This Month" },
            { value: "94%", label: "Connection Quality", sub: "Average Score" },
            { value: "1", label: "Open Tickets", sub: "Support Requests" },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl p-6 text-white shadow-md bg-gradient-to-r from-indigo-500 to-blue-500 hover:scale-105 transition">
              <div className="text-3xl font-bold">{card.value}</div>
              <div className="text-lg">{card.label}</div>
              <div className="text-sm opacity-80">{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Connection / Plan / Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h2 className="font-semibold mb-2">🌐 Connection Status</h2>
            <p className="text-green-600 font-bold">🟢 Online</p>
            <p className="mt-2">Speed: 64 Mbps</p>
            <p className="text-xs text-gray-500 mt-2">Last checked: 07:01:19</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h2 className="font-semibold mb-2">📦 My Plan</h2>
            <p>Plan: {user.plan.name}</p>
            <p>Speed: {user.plan.speed} Mbps</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
            </div>
            <p className="text-sm mt-1">29 days remaining</p>
            <button className="mt-3 w-full bg-blue-600 text-white px-3 py-2 rounded-lg">🔄 Renew/Upgrade</button>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h2 className="font-semibold mb-2">📊 Data Usage</h2>
            <p>Used: 0 GB / {user.plan.cap} GB</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "0%" }}></div>
            </div>
          </div>
        </div>

        {/* Usage Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-2">Daily Data Usage (7 days)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dailyData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="usage" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="font-semibold mb-2">Hourly Usage Pattern</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={hourlyData}>
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="usage" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Network Performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <h2 className="font-semibold">Latency</h2>
            <p className="text-xl font-bold">12ms</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <h2 className="font-semibold">Uptime</h2>
            <p className="text-xl font-bold">99.8%</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <h2 className="font-semibold">Packet Loss</h2>
            <p className="text-xl font-bold">0.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
}