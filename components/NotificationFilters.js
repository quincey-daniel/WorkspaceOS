'use client';

export default function NotificationFilters({ filters, onFilterChange }) {
  return (
    <div className="flex items-center space-x-3">
      <select
        className="border rounded-md px-3 py-1.5 text-sm bg-white"
        onChange={(e) => onFilterChange('source', e.target.value)}
        value={filters.source}
      >
        <option value="email">Email</option>
        <option value="slack">Slack</option>
        <option value="calendar">Calendar</option>
        <option value="all">All Sources</option>
      </select>

      <select
        className="border rounded-md px-3 py-1.5 text-sm bg-white"
        onChange={(e) => onFilterChange('priority', e.target.value)}
        value={filters.priority}
      >
        <option value="all">All Priorities</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>

      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={filters.unreadOnly}
          onChange={(e) => onFilterChange('unreadOnly', e.target.checked)}
          className="rounded border-gray-300"
        />
        <span>Unread Only</span>
      </label>

      <button
        onClick={() => onFilterChange('reset')}
        className="text-blue-600 hover:text-blue-800 text-sm"
      >
        Reset Filters
      </button>
    </div>
  );
}