'use client'

import React from 'react';

interface CourseSidebarStudentProps {
  activeTab?: 'assignments' | 'gradebook';
  onTabChange?: (tab: 'assignments' | 'gradebook') => void;
}

export default function CourseSidebarStudent({ 
  activeTab = 'assignments',
  onTabChange 
}: CourseSidebarStudentProps) {
  return (
    <aside className="w-64 min-h-screen bg-white border-r">
      <nav className="p-4">
        <div className="mb-4">
          <button 
            onClick={() => onTabChange?.('assignments')}
            className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
              activeTab === 'assignments'
                ? 'bg-green-100 text-green-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            📋 Assignments
          </button>
        </div>
        <div className="mb-4">
          <button 
            onClick={() => onTabChange?.('gradebook')}
            className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
              activeTab === 'gradebook'
                ? 'bg-green-100 text-green-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            📚 Grade Book
          </button>
        </div>
      </nav>
    </aside>
  );
} 