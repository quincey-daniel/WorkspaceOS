'use client';

export default function ShortcutsGuide({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'i', description: 'Go to inbox' },
    { key: 'f', description: 'Toggle focus mode' },
    { key: '1-3', description: 'Switch contexts' },
    { key: 'r', description: 'Quick reply' },
    { key: 's', description: 'Search' },
    { key: '?', description: 'Show/hide shortcuts' },
    { key: 'Esc', description: 'Close popups' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Keyboard Shortcuts</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {shortcuts.map((shortcut) => (
            <div key={shortcut.key} className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm">
                {shortcut.key}
              </kbd>
              <span className="text-gray-600">{shortcut.description}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>Pro tip: Most actions can be performed without leaving your keyboard!</p>
        </div>
      </div>
    </div>
  );
}