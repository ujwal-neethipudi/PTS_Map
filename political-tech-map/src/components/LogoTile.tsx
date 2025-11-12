import React, { useState } from 'react';
import { Entity } from '../types';
import CompanyModal from './CompanyModal';

interface LogoTileProps {
  entity: Entity;
}

const LogoTile: React.FC<LogoTileProps> = ({ entity }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div
          onClick={handleClick}
          className={`
            bg-white
            p-2
            transition-colors duration-100
            hover:bg-gray-100
            cursor-pointer
            flex items-center justify-center
            h-[32px] w-full
          `}
        >
          {entity.logoUrl && !imageError ? (
            <img
              src={entity.logoUrl}
              alt={entity.entityName}
              className="max-h-[28px] max-w-full object-contain"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <span className="text-[8px] text-black font-bold text-center leading-tight px-0.5">
              {entity.entityName}
            </span>
          )}
        </div>
        
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-white text-xs whitespace-nowrap z-50 pointer-events-none">
            {entity.entityName}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
          </div>
        )}
      </div>

      {/* Company Info Modal */}
      <CompanyModal
        entity={entity}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default LogoTile;
