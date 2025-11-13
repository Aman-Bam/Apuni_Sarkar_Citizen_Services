import React from 'react'
import Dashboard from './components/Dashboard'
import './index.css'
import Chatbot from './components/Chatbot'
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Dashboard />
      <Chatbot />
    </div>
  )
}

export default App
