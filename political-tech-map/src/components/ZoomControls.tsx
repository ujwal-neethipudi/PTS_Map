import React from 'react';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  zoomLevel: number;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ onZoomIn, onZoomOut, onReset, zoomLevel }) => {
  return (
    <div className="absolute top-4 right-4 z-50 bg-white border-2 border-black p-1 flex flex-col gap-1">
      <button
        onClick={onZoomIn}
        className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-black font-bold text-lg transition-colors"
        title="Zoom In"
      >
        +
      </button>
      <button
        onClick={onZoomOut}
        className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-black font-bold text-lg transition-colors"
        title="Zoom Out"
      >
        −
      </button>
      <button
        onClick={onReset}
        className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-black font-bold text-xs transition-colors"
        title="Reset Zoom"
      >
        ⟲
      </button>
      <div className="w-8 text-center py-1 bg-black text-white font-bold text-[10px]">
        {Math.round(zoomLevel * 100)}%
      </div>
    </div>
  );
};

export default ZoomControls;
