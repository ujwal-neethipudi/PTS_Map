import React from 'react';

interface ViewToggleProps {
  currentView: 'normal' | 'canvas';
  onViewChange: (view: 'normal' | 'canvas') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold text-black mr-2">VIEW MODE:</span>
      <div className="flex border-4 border-black bg-white">
        <button
          onClick={() => onViewChange('normal')}
          className={`px-6 py-2 text-sm font-bold transition-colors ${
            currentView === 'normal'
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          📋 NORMAL
        </button>
        <button
          onClick={() => onViewChange('canvas')}
          className={`px-6 py-2 text-sm font-bold transition-colors border-l-4 border-black ${
            currentView === 'canvas'
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          🔍 CANVAS
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
