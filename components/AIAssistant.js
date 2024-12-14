'use client';

import { useState } from 'react';

export default function AIAssistant({ suggestions }) {
  const [expandedSuggestion, setExpandedSuggestion] = useState(null);

  const getIconForType = (type) => {
    switch (type) {
      case 'schedule':
        return '📅';
      case 'response':
        return '📨';
      case 'focus':
        return '🎯';
      case 'organization':
        return '📋';
      default:
        return '💡';
    }
  };

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-red-500';
      case 'medium':
        return 'border-l-4 border-yellow-500';
      case 'low':
        return 'border-l-4 border-green-500';
      default:
        return '';
    }
  };

  return (
    <div className="bg-blue-50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-lg">🤖</span>
          </div>
          <span className="font-medium text-blue-800">AI Assistant</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-blue-600">Active</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-3">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className={`bg-white rounded-lg p-3 cursor-pointer transition-all ${
              getPriorityStyles(suggestion.priority)
            }`}
            onClick={() => setExpandedSuggestion(
              expandedSuggestion === suggestion.id ? null : suggestion.id
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span>{getIconForType(suggestion.type)}</span>
                <span className="text-sm font-medium text-gray-800">
                  {suggestion.content}
                </span>
              </div>
              <svg
                className={`w-4 h-4 text-gray-500 transform transition-transform ${
                  expandedSuggestion === suggestion.id ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {expandedSuggestion === suggestion.id && (
              <div className="mt-3 space-y-3">
                <p className="text-sm text-gray-600">{suggestion.details}</p>
                {suggestion.action && (
                  <button className="w-full px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2">
                    <span>{suggestion.action}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button className="text-sm text-blue-600 hover:text-blue-800">
          View All Suggestions
        </button>
        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Configure AI</span>
        </button>
      </div>
    </div>
  );
}