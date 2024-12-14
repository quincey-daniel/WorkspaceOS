'use client';

export default function ContextSwitcher({ contexts, selectedContext, onContextChange }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-600 mb-4">CONTEXTS</h3>
      
      <div className="space-y-3">
        {/* Project Alpha */}
        <div 
          className={`p-3 rounded-lg cursor-pointer ${
            selectedContext === 'project-alpha' ? 'bg-gray-100' : ''
          }`}
          onClick={() => onContextChange('project-alpha')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">📊</span>
              <span className="font-medium">Project Alpha</span>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Design Team */}
        <div 
          className={`p-3 rounded-lg cursor-pointer ${
            selectedContext === 'design-team' ? 'bg-gray-100' : ''
          }`}
          onClick={() => onContextChange('design-team')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">👥</span>
              <span className="font-medium">Design Team</span>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Client Meetings */}
        <div 
          className={`p-3 rounded-lg cursor-pointer ${
            selectedContext === 'client-meetings' ? 'bg-blue-50' : ''
          }`}
          onClick={() => onContextChange('client-meetings')}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🎯</span>
              <span className="font-medium">Client Meetings</span>
            </div>
            <div className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded">
              Focus
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-2">
            External communications and client interactions
          </p>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <span>👥 5 members</span>
            <span>•</span>
            <span>1h ago</span>
          </div>
          
          <div className="text-sm mb-2">
            <span className="text-blue-600">⏰ Next: Today at 4:00 PM</span>
          </div>

          <div className="flex space-x-2">
            <button className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center space-x-1">
              <span>🎥</span>
              <span>Join Meeting</span>
            </button>
            <button className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center space-x-1">
              <span>📝</span>
              <span>View Agenda</span>
            </button>
            <button className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center space-x-1">
              <span>📤</span>
              <span>Share Files</span>
            </button>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-1 rounded">
              <span className="text-gray-500">upcomingMeetings: </span>
              <span className="text-gray-700">3</span>
            </div>
            <div className="bg-gray-50 p-1 rounded">
              <span className="text-gray-500">actionItems: </span>
              <span className="text-gray-700">7</span>
            </div>
            <div className="bg-gray-50 p-1 rounded">
              <span className="text-gray-500">feedback: </span>
              <span className="text-gray-700">Positive</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <button className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>New Context</span>
        </button>
      </div>
    </div>
  );
}