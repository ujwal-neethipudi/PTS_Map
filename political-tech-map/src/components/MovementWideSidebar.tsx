import React from 'react';
import { CategoryData } from '../types';
import LogoTile from './LogoTile';

interface MovementWideSidebarProps {
  categoryData: CategoryData;
  categoryId: string;
}

const MovementWideSidebar: React.FC<MovementWideSidebarProps> = ({ categoryData, categoryId }) => {
  const colors = { bg: '#78909C', border: '#78909C' };

  // Define the subcategory order
  const subcategoryOrder = [
    'Information Integrity',
    'Knowledge & Policy',
    'Electoral Admin & Voter Resources',
    'Internal Comms & Productivity',
    'Campaign Strategy & Management',
  ];

  return (
    <div 
      id={categoryId}
      className="bg-white border-4 flex-shrink-0 w-full h-full"
      style={{ borderColor: colors.border }}
    >
      {/* Category Header */}
      <div 
        className="px-3 py-2 border-b-4 text-center"
        style={{ backgroundColor: colors.bg, borderBottomColor: colors.border }}
      >
        <h2 className="text-sm font-bold uppercase tracking-tight text-white">
          {categoryData.category}
        </h2>
      </div>

      {/* Subcategories stacked vertically */}
      <div className="flex flex-col h-full">
        {subcategoryOrder.map((subcategory, index) => {
          const subcategoryEntities = categoryData.entities.filter(
            (e) => e.subcategory === subcategory
          );

          if (subcategoryEntities.length === 0) return null;

          return (
            <div
              key={subcategory}
              className={`flex-1 ${index > 0 ? 'border-t-2 border-black' : ''}`}
            >
              {/* Subsection Header */}
              <div 
                className="px-2 py-1 border-b-2 border-black bg-gray-100 text-center"
              >
                <h3 className="text-xs font-bold uppercase tracking-tight text-black">
                  {subcategory}
                </h3>
              </div>

              {/* Subsection Content */}
              <div className="p-2">
                <div className="grid grid-cols-2 gap-1">
                  {subcategoryEntities.map((entity) => (
                    <LogoTile
                      key={entity.entityName}
                      entity={entity}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovementWideSidebar;
