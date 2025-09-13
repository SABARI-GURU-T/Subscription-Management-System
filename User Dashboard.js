import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

export default function App() {
  const [user] = useState({
    name: "Lavu",
    role: "User",
  });

  const usageData = [
    { date: "Sep 7", usage: 2 },
    { date: "Sep 8", usage: 3.5 },
    { date: "Sep 9", usage: 4 },
    { date: "Sep 10", usage: 1.2 },
    { date: "Sep 11", usage: 2.8 },
    { date: "Sep 12", usage: 3.6 },
    { date: "Sep 13", usage: 4.1 },
  ];

  const billData = [
    { month: "Mar", amount: 45 },
    { month: "Apr", amount: 50 },
    { month: "May", amount: 48 },
    { month: "Jun", amount: 60 },
    { month: "Jul", amount: 55 },
    { month: "Aug", amount: 62 },
    { month: "Sep", amount: 58 },
  ];

  const recentPayments = [
    { id: 1, date: "2025-09-05", amount: 58, status: "Paid" },
    { id: 2, date: "2025-08-05", amount: 62, status: "Paid" },
    { id: 3, date: "2025-07-05", amount: 55, status: "Paid" },
  ];

  return (
    React.createElement("div", { className: "flex h-screen bg-gray-100" },
      // Sidebar
      React.createElement("aside", { className: "w-64 bg-white shadow-md" },
        React.createElement("div", { className: "p-6 text-xl font-bold text-indigo-600" }, "User Dashboard"),
        React.createElement("nav", { className: "mt-6" },
          React.createElement("ul", null,
            React.createElement("li", { className: "px-6 py-2 hover:bg-indigo-50 cursor-pointer" }, "Overview"),
            React.createElement("li", { className: "px-6 py-2 hover:bg-indigo-50 cursor-pointer" }, "Usage"),
            React.createElement("li", { className: "px-6 py-2 hover:bg-indigo-50 cursor-pointer" }, "Billing"),
            React.createElement("li", { className: "px-6 py-2 hover:bg-indigo-50 cursor-pointer" }, "Support")
          )
        )
      ),

      // Main content
      React.createElement("main", { className: "flex-1 p-6 overflow-y-auto" },
        // Header
        React.createElement("header", { className: "flex justify-between items-center mb-6" },
          React.createElement("h1", { className: "text-2xl font-semibold text-gray-800" }, `Welcome, ${user.name}`),
          React.createElement("span", { className: "text-sm text-gray-500" }, user.role)
        ),

        // Stats grid
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" },
          React.createElement("div", { className: "bg-white p-4 rounded-xl shadow" },
            React.createElement("h2", { className: "text-gray-500 text-sm" }, "Current Plan"),
            React.createElement("p", { className: "text-xl font-bold text-indigo-600" }, "Premium 100Mbps")
          ),
          React.createElement("div", { className: "bg-white p-4 rounded-xl shadow" },
            React.createElement("h2", { className: "text-gray-500 text-sm" }, "Monthly Data Used"),
            React.createElement("p", { className: "text-xl font-bold text-indigo-600" }, "120 GB / 200 GB")
          ),
          React.createElement("div", { className: "bg-white p-4 rounded-xl shadow" },
            React.createElement("h2", { className: "text-gray-500 text-sm" }, "Next Bill Due"),
            React.createElement("p", { className: "text-xl font-bold text-indigo-600" }, "Sep 20, 2025")
          )
        ),

        // Charts
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" },
          // Usage Trend Chart
          React.createElement("div", { className: "bg-white p-4 rounded-xl shadow" },
            React.createElement("h3", { className: "text-gray-700 mb-2" }, "Weekly Usage (GB)"),
            React.createElement(ResponsiveContainer, { width: "100%", height: 200 },
              React.createElement(LineChart, { data: usageData },
                React.createElement(XAxis, { dataKey: "date" }),
                React.createElement(YAxis, null),
                React.createElement(Tooltip, null),
                React.createElement(Line, { type: "monotone", dataKey: "usage", stroke: "#6366F1", strokeWidth: 2 })
              )
            )
          ),
          // Billing Chart
          React.createElement("div", { className: "bg-white p-4 rounded-xl shadow" },
            React.createElement("h3", { className: "text-gray-700 mb-2" }, "Monthly Bills ($)"),
            React.createElement(ResponsiveContainer, { width: "100%", height: 200 },
              React.createElement(BarChart, { data: billData },
                React.createElement(XAxis, { dataKey: "month" }),
                React.createElement(YAxis, null),
                React.createElement(Tooltip, null),
                React.createElement(Bar, { dataKey: "amount", fill: "#10B981" })
              )
            )
          )
        ),

        // Recent Payments
        React.createElement("div", { className: "bg-white p-4 rounded-xl shadow" },
          React.createElement("h3", { className: "text-gray-700 mb-4" }, "Recent Payments"),
          React.createElement("table", { className: "w-full text-left" },
            React.createElement("thead", null,
              React.createElement("tr", { className: "text-gray-500 text-sm" },
                React.createElement("th", { className: "pb-2" }, "Date"),
                React.createElement("th", { className: "pb-2" }, "Amount ($)"),
                React.createElement("th", { className: "pb-2" }, "Status")
              )
            ),
            React.createElement("tbody", null,
              recentPayments.map(payment =>
                React.createElement("tr", { key: payment.id, className: "border-t" },
                  React.createElement("td", { className: "py-2" }, payment.date),
                  React.createElement("td", { className: "py-2" }, payment.amount),
                  React.createElement("td", { className: "py-2" }, payment.status)
                )
              )
            )
          )
        )
      )
    )
  );
}
