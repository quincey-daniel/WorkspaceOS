'use client';

import { useState, useEffect } from 'react';
import ContextSwitcher from './ContextSwitcher';
import NotificationFilters from './NotificationFilters';
import FocusMode from './FocusMode';

const initialNotifications = [
  {
    id: 1,
    source: 'Email',
    sender: 'John Wilson',
    avatar: '👨‍💼',
    content: 'RE: Project Timeline Update - Thanks for the detailed breakdown. Could we schedule a quick call to discuss the Q2 milestones?',
    priority: 'high',
    time: '10min ago',
    unread: true,
    context: 'project-alpha'
  },
  {
    id: 2,
    source: 'Slack',
    sender: 'Sarah Chen',
    avatar: '👩‍🎨',
    content: 'New wireframes ready for review - Please check the latest dashboard mockups',
    priority: 'medium',
    time: '25min ago',
    unread: true,
    context: 'design-team'
  },
  {
    id: 3,
    source: 'Teams',
    sender: 'Product Team',
    avatar: '👥',
    content: 'Sprint planning meeting notes attached - Updated priorities for next week',
    priority: 'medium',
    time: '1h ago',
    unread: false,
    context: 'project-alpha'
  }
];

const contexts = [
  {
    id: 'project-alpha',
    name: 'Project Alpha',
    type: 'project',
    status: 'active'
  },
  {
    id: 'design-team',
    name: 'Design Team',
    type: 'team',
    status: 'active'
  },
  {
    id: 'client-meetings',
    name: 'Client Meetings',
    type: 'focus',
    description: 'External communications and client interactions',
    members: 5,
    lastActivity: '1h ago',
    nextMeeting: 'Today at 4:00 PM',
    metrics: {
      upcomingMeetings: 3,
      actionItems: 7,
      feedback: 'Positive'
    }
  }
];

const aiSuggestions = [
  {
    id: 1,
    type: 'conflict',
    content: 'Detected overlapping meetings in "Project Alpha" context',
    details: 'Design review at 2 PM conflicts with client call',
    priority: 'high',
    action: 'Reschedule design review to 3 PM?'
  },
  {
    id: 2,
    type: 'response',
    content: '3 messages from client@acme.com awaiting response >24h',
    details: 'Important client communications need attention',
    priority: 'medium',
    action: 'Generate response drafts?'
  },
  {
    id: 3,
    type: 'focus',
    content: 'Optimal focus time detected',
    details: 'Calendar clear from 2:00 PM - 4:00 PM',
    priority: 'low',
    action: 'Block for deep work?'
  }
];

export default function WorkspaceDemo() {
  // State declarations
  const [activeTab, setActiveTab] = useState('inbox');
  const [selectedContext, setSelectedContext] = useState('client-meetings');
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filters, setFilters] = useState({
    source: 'email',
    priority: 'all',
    unreadOnly: false
  });

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-t-lg">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-gray-800">WorkspaceOS</div>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('inbox')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'inbox'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Universal Inbox
            </button>
            <button
              onClick={() => setActiveTab('focus')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'focus'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Focus Mode
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">AI Assistant</span>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Left Sidebar */}
        <div className="col-span-1 border-r pr-4">
          <ContextSwitcher
            contexts={contexts}
            selectedContext={selectedContext}
            onContextChange={setSelectedContext}
          />
        </div>

        {/* Main Content Area */}
        <div className="col-span-3">
          {activeTab === 'focus' ? (
            <FocusMode />
          ) : (
            <>
              <div className="mb-4">
                <NotificationFilters
                  filters={filters}
                  onFilterChange={(type, value) => {
                    setFilters(prev => ({ ...prev, [type]: value }));
                  }}
                />
              </div>

              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${notification.unread ? 'bg-blue-50' : 'bg-white'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs rounded ${
                          notification.priority === 'high' 
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {notification.priority}
                        </span>
                        <span className="font-medium">{notification.source}</span>
                      </div>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <div className="flex space-x-3">
                      <div className="text-2xl">{notification.avatar}</div>
                      <div>
                        <div className="font-medium text-sm">{notification.sender}</div>
                        <div className="text-gray-600">{notification.content}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-4">
                      <button className="text-sm text-blue-600 hover:text-blue-800">Reply</button>
                      <button className="text-sm text-gray-500 hover:text-gray-700">Mark Done</button>
                      <button className="text-sm text-gray-500 hover:text-gray-700">Snooze</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-lg">🤖</span>
            </div>
            <span className="font-medium text-blue-800">AI Assistant Suggestions</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-blue-600">Active</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-3">
          {aiSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className={`bg-white rounded-lg p-3 ${
                suggestion.priority === 'high' 
                  ? 'border-l-4 border-red-500'
                  : suggestion.priority === 'medium'
                  ? 'border-l-4 border-yellow-500'
                  : 'border-l-4 border-green-500'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-800 font-medium">{suggestion.content}</p>
                  <p className="text-sm text-gray-600 mt-1">{suggestion.details}</p>
                </div>
                <button className="text-blue-600 text-sm hover:text-blue-800">
                  {suggestion.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}