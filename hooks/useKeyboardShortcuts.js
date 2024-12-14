'use client';

import { useEffect } from 'react';

export function useKeyboardShortcuts(shortcuts) {
  useEffect(() => {
    function handleKeyPress(event) {
      // Check if user is typing in an input or textarea
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      const key = event.key.toLowerCase();
      const shortcut = shortcuts.find(s => s.key.toLowerCase() === key);
      
      if (shortcut) {
        event.preventDefault();
        shortcut.action();
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [shortcuts]);
}