'use client';

import { useState } from 'react';

export default function NotificationMessage({ 
  notification, 
  onReply,
  onMarkDone,
  onSnooze 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    onReply(notification.id, replyText);
    setReplyText('');
    setShowReplyBox(false);
  };

  const getPriorityStyles = (priority) => {
    const styles = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return styles[priority] || styles.low;
  };

  return (
    <div 
      className={`p-4 border rounded-lg transition-shadow hover:shadow-md ${
        notification.unread ? 'bg-blue-50 border-blue-100' : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className={`px-2 py-1 text-xs rounded ${getPriorityStyles(notification.priority)}`}>
            {notification.priority}
          </span>
          <span className="font-medium">{notification.source}</span>
          <span className="text-gray-500">{notification.channel}</span>
        </div>
        <div className="flex items-center space-x-2">
          {notification.thread && (
            <span className="text-xs text-gray-500">
              thread: {notification.thread}
            </span>
          )}
          <span className="text-sm text-gray-500">{notification.time}</span>
        </div>
      </div>

      <div className="mt-2 flex items-start space-x-3">
        <div className="text-2xl">{notification.avatar}</div>
        <div className="flex-1">
          <p className="font-medium text-sm text-gray-900">{notification.sender}</p>
          <p className={`text-gray-800 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {notification.content}
          </p>
          {notification.content.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-blue-600 hover:text-blue-800 mt-1"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>

      {showReplyBox ? (
        <div className="mt-3">
          <textarea 
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your reply..."
            rows="2"
            autoFocus
          />
          <div className="mt-2 flex justify-end space-x-2">
            <button 
              onClick={() => setShowReplyBox(false)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button 
              onClick={handleReplySubmit}
              disabled={!replyText.trim()}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3 flex space-x-4">
          <button 
            onClick={() => setShowReplyBox(true)}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            <span>Reply</span>
          </button>
          
          <button 
            onClick={() => onMarkDone(notification.id)}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Done</span>
          </button>
          
          <button 
            onClick={() => onSnooze(notification.id)}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Snooze</span>
          </button>
        </div>
      )}
    </div>
  );
}