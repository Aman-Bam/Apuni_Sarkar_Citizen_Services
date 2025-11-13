import React, { useState, useRef, useEffect } from 'react'

const CHAT_URL = 'https://www.chatbase.co/chatbot-iframe/rI4V0XC7zl1yGBW5VBoDP'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* Minimized pill (shows when minimized) */}
      {isMinimized && !isOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <button
            className="flex items-center gap-2 px-3 py-2 bg-white shadow-md rounded-full text-sm"
            onClick={() => {
              setIsOpen(true)
              setIsMinimized(false)
            }}
            aria-label="Restore chat"
          >
            <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-gray-700">Chat</span>
          </button>
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          ref={panelRef}
          className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 h-96 sm:h-[600px] bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-3 py-2 bg-indigo-600 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Support Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-1 rounded hover:bg-indigo-500"
                onClick={() => {
                  setIsOpen(false)
                  setIsMinimized(true)
                }}
                aria-label="Minimize chat"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="p-1 rounded hover:bg-indigo-500"
                onClick={() => {
                  setIsOpen(false)
                  setIsMinimized(false)
                }}
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white">
            <iframe
              title="Chatbot"
              src={CHAT_URL}
              className="w-full h-full"
              frameBorder="0"
              allow="microphone; camera;"            
            />
          </div>
        </div>
      )}

      {/* Launcher/logo button (always visible) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            setIsOpen((v) => !v)
            setIsMinimized(false)
          }}
          className="w-14 h-14 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform"
          aria-label="Open chat"
        >
          {/* Simple chat icon */}
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  )
}
