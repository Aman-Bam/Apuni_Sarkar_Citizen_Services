import { useState } from "react";
import About from "./About";
import Grievances from "./Grievances"; 
import Analytics from "./Analytics";
import Services from "./Services";

import {
  Search,
  FileText,
  BarChart3,
  Info,
  Bell,
  Moon,
  Sun,
  ChevronRight,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";


const analyticsData = {
  totalGrievances: 1250,
  resolvedGrievances: 890,
  pendingGrievances: 360,
  averageResolutionTime: 10,
};

const departmentStats = [
  { name: "Public Works", count: 340, color: "bg-blue-500" },
  { name: "Municipal Corp", count: 280, color: "bg-purple-500" },
  { name: "Water Works", count: 220, color: "bg-cyan-500" },
  { name: "Sanitation", count: 190, color: "bg-green-500" },
  { name: "Others", count: 220, color: "bg-pink-500" },
];

const grievancesData = [
  {
    id: "GRV001",
    title: "Road maintenance issue in Dehradun",
    department: "Public Works",
    status: "In Progress",
    date: "2025-11-05",
  },
  {
    id: "GRV002",
    title: "Street light not working",
    department: "Municipal Corporation",
    status: "Pending",
    date: "2025-11-09",
  },
  {
    id: "GRV003",
    title: "Water supply disruption",
    department: "Water Works",
    status: "Resolved",
    date: "2024-05-08",
  },
  {
    id: "GRV004",
    title: "Garbage collection delay",
    department: "Sanitation",
    status: "In Progress",
    date: "2024-11-07",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "services", label: "Services", icon: Search },
    { id: "grievances", label: "Grievances", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "about", label: "About", icon: Info },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview darkMode={darkMode} />;
      case "services":
        return <Services darkMode={darkMode} />;
      case "grievances":
        return <Grievances darkMode={darkMode} />;
      case "analytics":
        return <Analytics darkMode={darkMode} />;
      case "about":
        return <About darkMode={darkMode} />;
      default:
        return <Overview darkMode={darkMode} />;
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode 
        ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-sm border-b ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <h1 className="text-xl font-bold">Apuni Sarkar</h1>
              </div>
              <span className="text-sm text-gray-500">
                Uttarakhand Citizen Services Portal
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                <Bell className="w-5 h-5" />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>


      <nav className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : `border-transparent ${
                          darkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-500 hover:text-gray-700"
                        }`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};





const Overview = ({ darkMode }) => {
  const resolutionRate = Math.round(
    (analyticsData.resolvedGrievances / analyticsData.totalGrievances) * 100
  );
  const pendingRate = Math.round(
    (analyticsData.pendingGrievances / analyticsData.totalGrievances) * 100
  );

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div
        className={`${
          darkMode
            ? "bg-gradient-to-r from-gray-800 to-gray-700"
            : "bg-gradient-to-r from-blue-600 to-cyan-600"
        } rounded-2xl shadow-xl p-8 relative overflow-hidden`}
      >
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Welcome back, Citizen
          </h2>
          <p className={`${darkMode ? "text-gray-300" : "text-blue-100"}`}>
            Here's your grievance resolution dashboard - Stay informed and track
            your requests in real-time
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Grievances */}
        <div
          className={`${
            darkMode
              ? "bg-gray-800 border-gray-700 hover:border-blue-500"
              : "bg-white border-gray-200 hover:border-blue-400"
          } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
        >
          <div className="flex items-center justify-between mb-4">
            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } uppercase tracking-wider`}
            >
              Total Grievances
            </p>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-xl">
              📄
            </div>
          </div>
          <p
            className={`text-4xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {analyticsData.totalGrievances.toLocaleString()}
          </p>
          <div className="flex items-center space-x-1 text-green-600">
            <span>📈</span>
            <span className="text-sm font-medium">12% from last month</span>
          </div>
        </div>

        {/* Resolved */}
        <div
          className={`${
            darkMode
              ? "bg-gray-800 border-gray-700 hover:border-green-500"
              : "bg-white border-gray-200 hover:border-green-400"
          } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
        >
          <div className="flex items-center justify-between mb-4">
            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } uppercase tracking-wider`}
            >
              Resolved
            </p>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center text-xl">
              ✅
            </div>
          </div>
          <p className="text-4xl font-bold text-green-600 mb-3">
            {analyticsData.resolvedGrievances.toLocaleString()}
          </p>
          <div className="flex items-center space-x-1 text-green-600">
            <span>📈</span>
            <span className="text-sm font-medium">{resolutionRate}% resolution rate</span>
          </div>
        </div>

        {/* Pending */}
        <div
          className={`${
            darkMode
              ? "bg-gray-800 border-gray-700 hover:border-orange-500"
              : "bg-white border-gray-200 hover:border-orange-400"
          } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
        >
          <div className="flex items-center justify-between mb-4">
            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } uppercase tracking-wider`}
            >
              Pending
            </p>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center text-xl">
              ⚠️
            </div>
          </div>
          <p className="text-4xl font-bold text-orange-600 mb-3">
            {analyticsData.pendingGrievances.toLocaleString()}
          </p>
          <div className="flex items-center space-x-1 text-orange-600">
            <span>📉</span>
            <span className="text-sm font-medium">{pendingRate}% pending</span>
          </div>
        </div>

        {/* Resolution Time */}
        <div
          className={`${
            darkMode
              ? "bg-gray-800 border-gray-700 hover:border-purple-500"
              : "bg-white border-gray-200 hover:border-purple-400"
          } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
        >
          <div className="flex items-center justify-between mb-4">
            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } uppercase tracking-wider`}
            >
              Avg Resolution
            </p>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center text-xl">
              ⏱️
            </div>
          </div>
          <p className="text-4xl font-bold text-purple-600 mb-3">
            {analyticsData.averageResolutionTime}
          </p>
          <span className="text-sm font-medium text-gray-500">days average</span>
        </div>
      </div>

      {/* Stats Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Distribution */}
        <div
          className={`${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } rounded-2xl shadow-lg border p-6`}
        >
          <h3 className="text-lg font-bold mb-6">Grievances by Department</h3>
          <div className="space-y-5">
            {departmentStats.map((dept, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">{dept.name}</span>
                  <span
                    className={`text-sm font-bold ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {dept.count}
                  </span>
                </div>
                <div
                  className={`h-3 rounded-full ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  } overflow-hidden`}
                >
                  <div
                    className={`h-full ${dept.color} rounded-full transition-all duration-500`}
                    style={{
                      width: `${(dept.count / analyticsData.totalGrievances) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div
          className={`${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } rounded-2xl shadow-lg border p-6`}
        >
          <h3 className="text-lg font-bold mb-6">Performance Metrics</h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium">Excellence Rating</span>
              </div>
              <span className="text-xl font-bold text-yellow-500">4.8/5</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <span className="text-sm font-medium">Success Rate</span>
              </div>
              <span className="text-xl font-bold text-green-500">
                {resolutionRate}%
              </span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">👥</span>
                <span className="text-sm font-medium">Active Citizens</span>
              </div>
              <span className="text-xl font-bold text-blue-500">2,340</span>
            </div>
          </div>
        </div>

        {/* Status Summary */}
        <div
          className={`${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } rounded-2xl shadow-lg border p-6`}
        >
          <h3 className="text-lg font-bold mb-6">Status Summary</h3>
          <div className="space-y-5">
            {[
              {
                label: "In Progress",
                count: 250,
                color: "bg-orange-500",
                icon: "⏳",
              },
              {
                label: "Resolved",
                count: 890,
                color: "bg-green-500",
                icon: "✓",
              },
              { label: "Pending", count: 110, color: "bg-red-500", icon: "!" },
            ].map((status, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${status.color}`} />
                  <span className="text-sm font-medium">{status.label}</span>
                </div>
                <span className="text-sm font-bold">{status.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Grievances Table */}
      <div
        className={`${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } rounded-2xl shadow-lg border overflow-hidden`}
      >
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-bold">Recent Grievances</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead
              className={`${
                darkMode ? "bg-gray-700" : "bg-gray-50"
              } border-b ${darkMode ? "border-gray-600" : "border-gray-200"}`}
            >
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Priority
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {grievancesData.map((grievance, idx) => (
                <tr
                  key={grievance.id}
                  className={`${
                    idx % 2 === 0
                      ? darkMode
                        ? "bg-gray-800"
                        : "bg-white"
                      : darkMode
                      ? "bg-gray-750"
                      : "bg-gray-50"
                  } border-b ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors cursor-pointer`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                    {grievance.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {grievance.title}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {grievance.department}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        grievance.status === "Resolved"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : grievance.status === "In Progress"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {grievance.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        grievance.priority === "High"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : grievance.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {grievance.priority}
                    </span>
                  </td>
                  <td
                    className={`px-6 py-4 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {grievance.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className={`${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } rounded-2xl shadow-lg p-6 text-center border hover:shadow-xl transition-shadow transform hover:scale-105 duration-300`}
        >
          <div className="flex justify-center mb-3 text-4xl">📅</div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Last Updated
          </p>
          <p className="text-xl font-bold">Today, 2:30 PM</p>
        </div>
        <div
          className={`${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } rounded-2xl shadow-lg p-6 text-center border hover:shadow-xl transition-shadow transform hover:scale-105 duration-300`}
        >
          <div className="flex justify-center mb-3 text-4xl">📍</div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Service Region
          </p>
          <p className="text-xl font-bold">Uttarakhand</p>
        </div>
        <div
          className={`${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } rounded-2xl shadow-lg p-6 text-center border hover:shadow-xl transition-shadow transform hover:scale-105 duration-300`}
        >
          <div className="flex justify-center mb-3 text-4xl">⚡</div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            System Status
          </p>
          <p className="text-xl font-bold text-green-600">Active</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;























// const Overview = ({ darkMode }) => {
//   return (
//     <div className="space-y-8">
//       {/* Key Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700"
//               : "bg-white border-gray-200"
//           } p-6 rounded-lg shadow-sm border`}
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <p
//                 className={`text-sm font-medium ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Total Grievances
//               </p>
//               <p
//                 className={`text-2xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 {analyticsData.totalGrievances.toLocaleString()}
//               </p>
//             </div>
//             <FileText className="w-8 h-8 text-blue-600" />
//           </div>
//         </div>
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700"
//               : "bg-white border-gray-200"
//           } p-6 rounded-lg shadow-sm border`}
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <p
//                 className={`text-sm font-medium ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Resolved
//               </p>
//               <p className="text-2xl font-bold text-green-600">
//                 {analyticsData.resolvedGrievances.toLocaleString()}
//               </p>
//             </div>
//             <CheckCircle className="w-8 h-8 text-green-600" />
//           </div>
//         </div>
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700"
//               : "bg-white border-gray-200"
//           } p-6 rounded-lg shadow-sm border`}
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <p
//                 className={`text-sm font-medium ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Pending
//               </p>
//               <p className="text-2xl font-bold text-orange-600">
//                 {analyticsData.pendingGrievances.toLocaleString()}
//               </p>
//             </div>
//             <AlertCircle className="w-8 h-8 text-orange-600" />
//           </div>
//         </div>
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700"
//               : "bg-white border-gray-200"
//           } p-6 rounded-lg shadow-sm border`}
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <p
//                 className={`text-sm font-medium ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Avg Resolution Time
//               </p>
//               <p className="text-2xl font-bold text-blue-600">
//                 {analyticsData.averageResolutionTime} days
//               </p>
//             </div>
//             <Clock className="w-8 h-8 text-blue-600" />
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div
//         className={`${
//           darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//         } rounded-lg shadow-sm border`}
//       >
//         <div className="p-6">
//           <h3 className="text-lg font-semibold mb-4">Recent Grievances</h3>
//           <div className="space-y-4">
//             {grievancesData.slice(0, 3).map((grievance) => (
//               <div
//                 key={grievance.id}
//                 className={`flex items-center justify-between py-3 border-b ${
//                   darkMode ? "border-gray-700" : "border-gray-200"
//                 } last:border-b-0`}
//               >
//                 <div>
//                   <p className="font-medium">{grievance.title}</p>
//                   <p
//                     className={`text-sm ${
//                       darkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {grievance.department} • {grievance.date}
//                   </p>
//                 </div>
//                 <span
//                   className={`px-3 py-1 text-sm rounded-full ${
//                     grievance.status === "Resolved"
//                       ? darkMode
//                         ? "bg-green-900 text-green-200"
//                         : "bg-green-100 text-green-800"
//                       : grievance.status === "In Progress"
//                       ? darkMode
//                         ? "bg-orange-900 text-orange-200"
//                         : "bg-orange-100 text-orange-800"
//                       : darkMode
//                       ? "bg-gray-700 text-gray-300"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {grievance.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;








// const analyticsData = {
//   totalGrievances: 1250,
//   resolvedGrievances: 890,
//   pendingGrievances: 360,
//   averageResolutionTime: 10,
// };

// const grievancesData = [
//   {
//     id: "GRV001",
//     title: "Road maintenance issue in Dehradun",
//     department: "Public Works",
//     status: "In Progress",
//     date: "2025-11-05",
//     priority: "High",
//   },
//   {
//     id: "GRV002",
//     title: "Street light not working",
//     department: "Municipal Corporation",
//     status: "Pending",
//     date: "2025-11-09",
//     priority: "Medium",
//   },
//   {
//     id: "GRV003",
//     title: "Water supply disruption",
//     department: "Water Works",
//     status: "Resolved",
//     date: "2024-05-08",
//     priority: "High",
//   },
//   {
//     id: "GRV004",
//     title: "Garbage collection delay",
//     department: "Sanitation",
//     status: "In Progress",
//     date: "2024-11-07",
//     priority: "Low",
//   },
//   {
//     id: "GRV005",
//     title: "Pothole repair needed",
//     department: "Public Works",
//     status: "Resolved",
//     date: "2024-10-15",
//     priority: "Medium",
//   },
// ];

// const departmentStats = [
//   { name: "Public Works", count: 340, color: "bg-blue-500" },
//   { name: "Municipal Corp", count: 280, color: "bg-purple-500" },
//   { name: "Water Works", count: 220, color: "bg-cyan-500" },
//   { name: "Sanitation", count: 190, color: "bg-green-500" },
//   { name: "Others", count: 220, color: "bg-pink-500" },
// ];

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [darkMode, setDarkMode] = useState(false);

//   const tabs = [
//     { id: "overview", label: "Overview" },
//     { id: "services", label: "Services" },
//     { id: "grievances", label: "Grievances" },
//     { id: "analytics", label: "Analytics" },
//     { id: "about", label: "About" },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case "overview":
//         return <Overview darkMode={darkMode} />;
//       case "services":
//         return <Services darkMode={darkMode} />;
//       case "grievances":
//         return <Grievances darkMode={darkMode} />;
//       case "analytics":
//         return <Analytics darkMode={darkMode} />;
//       case "about":
//         return <About darkMode={darkMode} />;
//       default:
//         return <Overview darkMode={darkMode} />;
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         darkMode
//           ? "bg-gray-900 text-white"
//           : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Header */}
//       <header
//         className={`${
//           darkMode ? "bg-gray-800" : "bg-white"
//         } shadow-md border-b ${
//           darkMode ? "border-gray-700" : "border-gray-200"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold">AS</span>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   Apuni Sarkar
//                 </h1>
//                 <p className="text-xs text-gray-500">Uttarakhand Services</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`p-2 rounded-lg transition-colors ${
//                 darkMode ? "hover:bg-gray-700 bg-gray-700" : "hover:bg-gray-100"
//               }`}
//             >
//               <span className="text-lg">{darkMode ? "☀️" : "🌙"}</span>
//             </button>
//           </div>
//         </div>
//       </header>

      // {/* Navigation */}
      // <nav className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="flex space-x-8">
      //       {tabs.map((tab) => {
      //         const IconEmoji = {
      //           overview: "📊",
      //           services: "🔍",
      //           grievances: "📄",
      //           analytics: "📈",
      //           about: "ℹ️",
      //         }[tab.id];

      //         return (
      //           <button
      //             key={tab.id}
      //             onClick={() => setActiveTab(tab.id)}
      //             className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
      //               activeTab === tab.id
      //                 ? "border-blue-500 text-blue-600"
      //                 : `border-transparent ${
      //                     darkMode
      //                       ? "text-gray-300 hover:text-white"
      //                       : "text-gray-500 hover:text-gray-700"
      //                   }`
      //             }`}
      //           >
      //             <span className="text-lg">{IconEmoji}</span>
      //             <span>{tab.label}</span>
      //           </button>
      //         );
      //       })}
      //     </div>
      //   </div>
      // </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };























// const Overview = ({ darkMode }) => {
//   const resolutionRate = Math.round(
//     (analyticsData.resolvedGrievances / analyticsData.totalGrievances) * 100
//   );
//   const pendingRate = Math.round(
//     (analyticsData.pendingGrievances / analyticsData.totalGrievances) * 100
//   );

//   return (
//     <div className="space-y-8">
//       {/* Welcome Banner */}
//       <div
//         className={`${
//           darkMode
//             ? "bg-gradient-to-r from-gray-800 to-gray-700"
//             : "bg-gradient-to-r from-blue-600 to-cyan-600"
//         } rounded-2xl shadow-xl p-8 relative overflow-hidden`}
//       >
//         <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
//         <div className="relative z-10">
//           <h2 className="text-4xl font-bold mb-2 text-white">
//             Welcome back, Citizen
//           </h2>
//           <p className={`${darkMode ? "text-gray-300" : "text-blue-100"}`}>
//             Here's your grievance resolution dashboard - Stay informed and track
//             your requests in real-time
//           </p>
//         </div>
//       </div>

//       {/* Key Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Total Grievances */}
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700 hover:border-blue-500"
//               : "bg-white border-gray-200 hover:border-blue-400"
//           } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <p
//               className={`text-sm font-semibold ${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               } uppercase tracking-wider`}
//             >
//               Total Grievances
//             </p>
//             <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-xl">
//               📄
//             </div>
//           </div>
//           <p
//             className={`text-4xl font-bold mb-3 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             {analyticsData.totalGrievances.toLocaleString()}
//           </p>
//           <div className="flex items-center space-x-1 text-green-600">
//             <span>📈</span>
//             <span className="text-sm font-medium">12% from last month</span>
//           </div>
//         </div>

//         {/* Resolved */}
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700 hover:border-green-500"
//               : "bg-white border-gray-200 hover:border-green-400"
//           } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <p
//               className={`text-sm font-semibold ${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               } uppercase tracking-wider`}
//             >
//               Resolved
//             </p>
//             <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center text-xl">
//               ✅
//             </div>
//           </div>
//           <p className="text-4xl font-bold text-green-600 mb-3">
//             {analyticsData.resolvedGrievances.toLocaleString()}
//           </p>
//           <div className="flex items-center space-x-1 text-green-600">
//             <span>📈</span>
//             <span className="text-sm font-medium">{resolutionRate}% resolution rate</span>
//           </div>
//         </div>

//         {/* Pending */}
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700 hover:border-orange-500"
//               : "bg-white border-gray-200 hover:border-orange-400"
//           } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <p
//               className={`text-sm font-semibold ${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               } uppercase tracking-wider`}
//             >
//               Pending
//             </p>
//             <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center text-xl">
//               ⚠️
//             </div>
//           </div>
//           <p className="text-4xl font-bold text-orange-600 mb-3">
//             {analyticsData.pendingGrievances.toLocaleString()}
//           </p>
//           <div className="flex items-center space-x-1 text-orange-600">
//             <span>📉</span>
//             <span className="text-sm font-medium">{pendingRate}% pending</span>
//           </div>
//         </div>

//         {/* Resolution Time */}
//         <div
//           className={`${
//             darkMode
//               ? "bg-gray-800 border-gray-700 hover:border-purple-500"
//               : "bg-white border-gray-200 hover:border-purple-400"
//           } p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <p
//               className={`text-sm font-semibold ${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               } uppercase tracking-wider`}
//             >
//               Avg Resolution
//             </p>
//             <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center text-xl">
//               ⏱️
//             </div>
//           </div>
//           <p className="text-4xl font-bold text-purple-600 mb-3">
//             {analyticsData.averageResolutionTime}
//           </p>
//           <span className="text-sm font-medium text-gray-500">days average</span>
//         </div>
//       </div>

//       {/* Stats Grid Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Department Distribution */}
//         <div
//           className={`${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           } rounded-2xl shadow-lg border p-6`}
//         >
//           <h3 className="text-lg font-bold mb-6">Grievances by Department</h3>
//           <div className="space-y-5">
//             {departmentStats.map((dept, idx) => (
//               <div key={idx}>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-semibold">{dept.name}</span>
//                   <span
//                     className={`text-sm font-bold ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     {dept.count}
//                   </span>
//                 </div>
//                 <div
//                   className={`h-3 rounded-full ${
//                     darkMode ? "bg-gray-700" : "bg-gray-200"
//                   } overflow-hidden`}
//                 >
//                   <div
//                     className={`h-full ${dept.color} rounded-full transition-all duration-500`}
//                     style={{
//                       width: `${(dept.count / analyticsData.totalGrievances) * 100}%`,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Performance Metrics */}
//         <div
//           className={`${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           } rounded-2xl shadow-lg border p-6`}
//         >
//           <h3 className="text-lg font-bold mb-6">Performance Metrics</h3>
//           <div className="space-y-5">
//             <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//               <div className="flex items-center space-x-3">
//                 <span className="text-2xl">🏆</span>
//                 <span className="text-sm font-medium">Excellence Rating</span>
//               </div>
//               <span className="text-xl font-bold text-yellow-500">4.8/5</span>
//             </div>
//             <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//               <div className="flex items-center space-x-3">
//                 <span className="text-2xl">📊</span>
//                 <span className="text-sm font-medium">Success Rate</span>
//               </div>
//               <span className="text-xl font-bold text-green-500">
//                 {resolutionRate}%
//               </span>
//             </div>
//             <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//               <div className="flex items-center space-x-3">
//                 <span className="text-2xl">👥</span>
//                 <span className="text-sm font-medium">Active Citizens</span>
//               </div>
//               <span className="text-xl font-bold text-blue-500">2,340</span>
//             </div>
//           </div>
//         </div>

//         {/* Status Summary */}
//         <div
//           className={`${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           } rounded-2xl shadow-lg border p-6`}
//         >
//           <h3 className="text-lg font-bold mb-6">Status Summary</h3>
//           <div className="space-y-5">
//             {[
//               {
//                 label: "In Progress",
//                 count: 250,
//                 color: "bg-orange-500",
//                 icon: "⏳",
//               },
//               {
//                 label: "Resolved",
//                 count: 890,
//                 color: "bg-green-500",
//                 icon: "✓",
//               },
//               { label: "Pending", count: 110, color: "bg-red-500", icon: "!" },
//             ].map((status, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className={`w-4 h-4 rounded-full ${status.color}`} />
//                   <span className="text-sm font-medium">{status.label}</span>
//                 </div>
//                 <span className="text-sm font-bold">{status.count}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Recent Grievances Table */}
//       <div
//         className={`${
//           darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//         } rounded-2xl shadow-lg border overflow-hidden`}
//       >
//         <div className="p-6 border-b border-gray-700">
//           <h3 className="text-lg font-bold">Recent Grievances</h3>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead
//               className={`${
//                 darkMode ? "bg-gray-700" : "bg-gray-50"
//               } border-b ${darkMode ? "border-gray-600" : "border-gray-200"}`}
//             >
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-semibold">
//                   ID
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold">
//                   Title
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold">
//                   Department
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold">
//                   Status
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold">
//                   Priority
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold">
//                   Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {grievancesData.map((grievance, idx) => (
//                 <tr
//                   key={grievance.id}
//                   className={`${
//                     idx % 2 === 0
//                       ? darkMode
//                         ? "bg-gray-800"
//                         : "bg-white"
//                       : darkMode
//                       ? "bg-gray-750"
//                       : "bg-gray-50"
//                   } border-b ${
//                     darkMode ? "border-gray-700" : "border-gray-200"
//                   } hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors cursor-pointer`}
//                 >
//                   <td className="px-6 py-4 text-sm font-semibold text-blue-600">
//                     {grievance.id}
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium">
//                     {grievance.title}
//                   </td>
//                   <td
//                     className={`px-6 py-4 text-sm ${
//                       darkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {grievance.department}
//                   </td>
//                   <td className="px-6 py-4 text-sm">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         grievance.status === "Resolved"
//                           ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                           : grievance.status === "In Progress"
//                           ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
//                           : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
//                       }`}
//                     >
//                       {grievance.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm">
//                     <span
//                       className={`px-2 py-1 rounded text-xs font-semibold ${
//                         grievance.priority === "High"
//                           ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
//                           : grievance.priority === "Medium"
//                           ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//                           : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//                       }`}
//                     >
//                       {grievance.priority}
//                     </span>
//                   </td>
//                   <td
//                     className={`px-6 py-4 text-sm ${
//                       darkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {grievance.date}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Footer Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div
//           className={`${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           } rounded-2xl shadow-lg p-6 text-center border hover:shadow-xl transition-shadow transform hover:scale-105 duration-300`}
//         >
//           <div className="flex justify-center mb-3 text-4xl">📅</div>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
//             Last Updated
//           </p>
//           <p className="text-xl font-bold">Today, 2:30 PM</p>
//         </div>
//         <div
//           className={`${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           } rounded-2xl shadow-lg p-6 text-center border hover:shadow-xl transition-shadow transform hover:scale-105 duration-300`}
//         >
//           <div className="flex justify-center mb-3 text-4xl">📍</div>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
//             Service Region
//           </p>
//           <p className="text-xl font-bold">Uttarakhand</p>
//         </div>
//         <div
//           className={`${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           } rounded-2xl shadow-lg p-6 text-center border hover:shadow-xl transition-shadow transform hover:scale-105 duration-300`}
//         >
//           <div className="flex justify-center mb-3 text-4xl">⚡</div>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
//             System Status
//           </p>
//           <p className="text-xl font-bold text-green-600">Active</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;