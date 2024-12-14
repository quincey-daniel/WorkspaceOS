'use client';

import { useState, useEffect } from 'react';

export default function FocusMode() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimeLeft(25 * 60);
    setIsActive(false);
  };

  return (
    <div className="text-center py-8 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Focus Mode Active</h2>
      
      <div className="mb-6">
        <div className="text-3xl font-bold text-blue-600 mb-2">
          {formatTime(timeLeft)}
        </div>
        <p className="text-gray-600">
          {isActive 
            ? "Focus mode active. Notifications muted." 
            : "Start a focused work session"}
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isActive ? (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Pause</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              <span>Start Focus</span>
            </>
          )}
        </button>
        
        <button
          onClick={resetTimer}
          className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset</span>
        </button>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Only high-priority notifications will be shown</p>
        <p className="mt-2">Next meeting: Client Review at 4:00 PM</p>
      </div>
    </div>
  );
}