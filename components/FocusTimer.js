'use client';

import { useState, useEffect } from 'react';

export default function FocusTimer({ 
  initialMinutes = 25,
  onComplete,
  onPause,
  onResume,
  onReset 
}) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(initialMinutes);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            clearInterval(interval);
            setIsActive(false);
            onComplete?.();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const toggleTimer = () => {
    setIsActive(!isActive);
    if (isActive) {
      onPause?.();
    } else {
      onResume?.();
    }
  };

  const resetTimer = () => {
    setTimeLeft(initialMinutes * 60);
    setIsActive(false);
    onReset?.();
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const progress = (timeLeft / (initialMinutes * 60)) * 100;

  return (
    <div className="text-center py-8 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Focus Mode</h2>
      
      <div className="relative inline-block mb-6">
        {/* Circular progress indicator */}
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="58"
            cx="64"
            cy="64"
          />
          <circle
            className="text-blue-600 transition-all duration-1000"
            strokeWidth="8"
            strokeDasharray={58 * 2 * Math.PI}
            strokeDashoffset={((100 - progress) / 100) * 58 * 2 * Math.PI}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="58"
            cx="64"
            cy="64"
          />
        </svg>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          {formatTime()}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        {isActive ? (
          "Focus mode active. Notifications muted."
        ) : timeLeft === 0 ? (
          "Focus session complete!"
        ) : (
          "Start a focused work session"
        )}
      </p>

      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
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
          className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset</span>
        </button>
      </div>

      {isActive && (
        <div className="mt-6 text-sm text-gray-500">
          <p>Only high-priority notifications will be shown</p>
          <p>Current context: Project Alpha</p>
        </div>
      )}

      {timeLeft === 0 && (
        <div className="mt-6">
          <button
            onClick={resetTimer}
            className="text-blue-600 hover:text-blue-800"
          >
            Start another session?
          </button>
        </div>
      )}
    </div>
  );
}