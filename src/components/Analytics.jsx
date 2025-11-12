// import React from 'react'
// import { TrendingUp, Users, Clock, CheckCircle, Download } from 'lucide-react'

// const Analytics = ({ darkMode = false }) => {
//   const analyticsData = {
//     totalGrievances: 1247,
//     resolvedGrievances: 892,
//     pendingGrievances: 355,
//     successRate: 71.5,
//     averageResolutionTime: 5.2,
//     sentimentData: [
//       { name: 'Satisfied', value: 654, percentage: 52.4, color: '#10B981' },
//       { name: 'Neutral', value: 412, percentage: 33.0, color: '#F59E0B' },
//       { name: 'Dissatisfied', value: 181, percentage: 14.6, color: '#EF4444' }
//     ],
//     departmentData: [
//       { department: 'Housing', avgResolutionDays: 4.5, resolved: 234 },
//       { department: 'Employment', avgResolutionDays: 6.2, resolved: 189 },
//       { department: 'Health', avgResolutionDays: 5.8, resolved: 156 },
//       { department: 'Education', avgResolutionDays: 7.1, resolved: 143 },
//       { department: 'Infrastructure', avgResolutionDays: 8.3, resolved: 170 }
//     ],
//     demandData: [
//       { day: 'Mon', total: 126 },
//       { day: 'Tue', total: 146 },
//       { day: 'Wed', total: 135 },
//       { day: 'Thu', total: 156 },
//       { day: 'Fri', total: 140 },
//       { day: 'Sat', total: 75 },
//       { day: 'Sun', total: 60 }
//     ],

    
//     feedbackSamples: {
//       Satisfied: [
//         "Excellent service! My housing issue was resolved within 3 days.",
//         "Very helpful staff. They kept me updated throughout the process."
//       ],
//       Neutral: [
//         "Service was okay, but took longer than expected.",
//         "The process could be more streamlined, but issue was resolved."
//       ],
//       Dissatisfied: [
//         "Very disappointed. My complaint is still pending after 2 weeks.",
//         "Poor communication and slow response time."
//       ]
//     }
//   }

//   const exportData = () => {
//     try {
//       const dataStr = JSON.stringify(analyticsData, null, 2)
//       const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
//       const exportFileDefaultName = 'apuni-sarkar-analytics.json'
//       const linkElement = document.createElement('a')
//       linkElement.setAttribute('href', dataUri)
//       linkElement.setAttribute('download', exportFileDefaultName)
//       linkElement.click()
//     } catch (error) {
//       console.error('Export failed:', error)
//     }
//   }

//   return (
//     <div className={`w-full min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//       <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div>
//             <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Analytics Dashboard</h2>
//             <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Insights from citizen services and grievance data</p>
//           </div>
//           <button
//             onClick={exportData}
//             className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//           >
//             <Download className="w-4 h-4" />
//             <span>Export Data</span>
//           </button>
//         </div>

//           {/* Key Metrics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Grievances</p>
//                 <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{analyticsData.totalGrievances}</p>
//               </div>
//               <Users className="w-8 h-8 text-blue-600" />
//             </div>
//           </div>

//           <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resolved</p>
//                 <p className="text-2xl font-bold text-green-600">{analyticsData.resolvedGrievances}</p>
//               </div>
//               <CheckCircle className="w-8 h-8 text-green-600" />
//             </div>
//           </div>

//           <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pending</p>
//                 <p className="text-2xl font-bold text-orange-600">{analyticsData.pendingGrievances}</p>
//               </div>
//               <Clock className="w-8 h-8 text-orange-600" />
//             </div>
//           </div>

//           <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Avg Resolution Time</p>
//                 <p className="text-2xl font-bold text-blue-600">{analyticsData.averageResolutionTime} days</p>
//               </div>
//               <TrendingUp className="w-8 h-8 text-blue-600" />
//             </div>
//           </div>
//         </div>

//         {/* Sentiment Analysis */}
//         <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
//           <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Citizen Sentiment</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {analyticsData.sentimentData.map((sentiment) => (
//               <div key={sentiment.name} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
//                 <div className="flex items-center space-x-2 mb-3">
//                   <div className="w-4 h-4 rounded-full" style={{ backgroundColor: sentiment.color }} />
//                   <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{sentiment.name}</span>
//                 </div>
//                 <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{sentiment.percentage}%</p>
//                 <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{sentiment.value} grievances</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Department Performance */}
//         <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
//           <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Department Performance</h3>
//           <div className="space-y-4">
//             {analyticsData.departmentData.map((dept) => (
//               <div key={dept.department}>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className={darkMode ? 'text-white' : 'text-gray-900'}>{dept.department}</span>
//                   <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{dept.resolved} resolved</span>
//                 </div>
//                 <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
//                   <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(dept.resolved / 250) * 100}%` }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Feedback */}
//         <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
//           <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sample Feedback</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {analyticsData.sentimentData.map((sentiment) => (
//               <div key={sentiment.name} className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sentiment.color }} />
//                   <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{sentiment.name}</h4>
//                 </div>
//                 {analyticsData.feedbackSamples[sentiment.name]?.map((feedback, i) => (
//                   <div key={i} className={`text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'} p-3 rounded`}>
//                     "{feedback}"
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Analytics


























































































import React from 'react'
import { TrendingUp, Users, Clock, CheckCircle, Download, BarChart3, MessageSquare, Zap } from 'lucide-react'

const Analytics = ({ darkMode = false }) => {
  const analyticsData = {
    totalGrievances: 1247,
    resolvedGrievances: 892,
    pendingGrievances: 355,
    successRate: 71.5,
    averageResolutionTime: 5.2,
    sentimentData: [
      { name: 'Satisfied', value: 654, percentage: 52.4, color: '#10B981' },
      { name: 'Neutral', value: 412, percentage: 33.0, color: '#F59E0B' },
      { name: 'Dissatisfied', value: 181, percentage: 14.6, color: '#EF4444' }
    ],
    departmentData: [
      { department: 'Housing', avgResolutionDays: 4.5, resolved: 234 },
      { department: 'Employment', avgResolutionDays: 6.2, resolved: 189 },
      { department: 'Health', avgResolutionDays: 5.8, resolved: 156 },
      { department: 'Education', avgResolutionDays: 7.1, resolved: 143 },
      { department: 'Infrastructure', avgResolutionDays: 8.3, resolved: 170 }
    ],
    demandData: [
      { day: 'Mon', total: 126 },
      { day: 'Tue', total: 146 },
      { day: 'Wed', total: 135 },
      { day: 'Thu', total: 156 },
      { day: 'Fri', total: 140 },
      { day: 'Sat', total: 75 },
      { day: 'Sun', total: 60 }
    ],

    
    feedbackSamples: {
      Satisfied: [
        "Excellent service! My housing issue was resolved within 3 days.",
        "Very helpful staff. They kept me updated throughout the process."
      ],
      Neutral: [
        "Service was okay, but took longer than expected.",
        "The process could be more streamlined, but issue was resolved."
      ],
      Dissatisfied: [
        "Very disappointed. My complaint is still pending after 2 weeks.",
        "Poor communication and slow response time."
      ]
    }
  }

  const exportData = () => {
    try {
      const dataStr = JSON.stringify(analyticsData, null, 2)
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
      const exportFileDefaultName = 'apuni-sarkar-analytics.json'
      const linkElement = document.createElement('a')
      linkElement.setAttribute('href', dataUri)
      linkElement.setAttribute('download', exportFileDefaultName)
      linkElement.click()
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  return (
    <div className={`w-full min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent mb-2`}>Analytics Dashboard</h2>
            <p className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Zap className="w-4 h-4 text-yellow-500" />
              Insights from citizen services and grievance data
            </p>
          </div>
          <button
            onClick={exportData}
            className={`flex items-center space-x-2 px-6 py-3 ${darkMode ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
          >
            <Download className="w-5 h-5" />
            <span>Export Data</span>
          </button>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-2xl' : 'bg-white border-blue-100 shadow-xl'} p-6 rounded-2xl shadow-sm border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Grievances</p>
                <p className={`text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{analyticsData.totalGrievances}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-2xl' : 'bg-white border-green-100 shadow-xl'} p-6 rounded-2xl shadow-sm border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Resolved</p>
                <p className="text-3xl font-bold mt-2 text-green-600">{analyticsData.resolvedGrievances}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-2xl' : 'bg-white border-orange-100 shadow-xl'} p-6 rounded-2xl shadow-sm border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending</p>
                <p className="text-3xl font-bold mt-2 text-orange-600">{analyticsData.pendingGrievances}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-2xl' : 'bg-white border-indigo-100 shadow-xl'} p-6 rounded-2xl shadow-sm border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Avg Resolution Time</p>
                <p className="text-3xl font-bold mt-2 text-indigo-600">{analyticsData.averageResolutionTime} days</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-xl">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-100'} p-8 rounded-2xl shadow-lg border backdrop-blur-sm`}>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <BarChart3 className="w-6 h-6 text-blue-600" />
            Citizen Sentiment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analyticsData.sentimentData.map((sentiment) => (
              <div key={sentiment.name} className={`${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'} p-6 rounded-2xl border ${darkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-5 h-5 rounded-full shadow-lg" style={{ backgroundColor: sentiment.color }} />
                  <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{sentiment.name}</span>
                </div>
                <p className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{sentiment.percentage}%</p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{sentiment.value} grievances</p>
              </div>
            ))}
          </div>
        </div>

        {/* Department Performance */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-100'} p-8 rounded-2xl shadow-lg border backdrop-blur-sm`}>
          <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <BarChart3 className="w-6 h-6 text-indigo-600" />
            Department Performance
          </h3>
          <div className="space-y-6">
            {analyticsData.departmentData.map((dept, idx) => (
              <div key={dept.department} className={`${darkMode ? 'bg-gray-700 bg-opacity-50' : 'bg-gray-50'} p-5 rounded-xl border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{dept.department}</span>
                    <span className={`ml-3 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{dept.resolved} resolved</span>
                  </div>
                  <span className={`text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{((dept.resolved / 250) * 100).toFixed(0)}%</span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full h-3 overflow-hidden shadow-inner`}>
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${idx % 2 === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`} 
                    style={{ width: `${(dept.resolved / 250) * 100}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-100'} p-8 rounded-2xl shadow-lg border backdrop-blur-sm`}>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <MessageSquare className="w-6 h-6 text-cyan-600" />
            Sample Feedback
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analyticsData.sentimentData.map((sentiment) => (
              <div key={sentiment.name} className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-4 h-4 rounded-full shadow-md" style={{ backgroundColor: sentiment.color }} />
                  <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{sentiment.name}</h4>
                </div>
                {analyticsData.feedbackSamples[sentiment.name]?.map((feedback, i) => (
                  <div key={i} className={`text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200 border border-gray-600' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 border border-gray-200'} p-4 rounded-xl leading-relaxed shadow-sm hover:shadow-md transition-all duration-300`}>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>❝</span> {feedback} <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>❞</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics




























































