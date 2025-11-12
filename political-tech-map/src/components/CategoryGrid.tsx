import React from 'react';
import { CategoryData } from '../types';
import LogoTile from './LogoTile';

interface CategoryGridProps {
  categoryData: CategoryData;
  categoryId: string;
}

// Category accent colors map - exact colors from reference images
const categoryColors: Record<string, { bg: string; border: string }> = {
  'messaging-&-media': { bg: '#00BCD4', border: '#00BCD4' },  // Bright Cyan
  'paid-media': { bg: '#1E88E5', border: '#1E88E5' },         // Medium Blue
  'owned-media-/-digital-content': { bg: '#43A047', border: '#43A047' }, // Grass Green
  'data-analytics-&-modeling': { bg: '#283593', border: '#283593' },     // Dark Blue
  'voter-engagement': { bg: '#283593', border: '#283593' },    // Dark Blue
  'volunteer-&-activist-mobilization': { bg: '#283593', border: '#283593' }, // Dark Blue
  'voter-contact': { bg: '#283593', border: '#283593' },       // Dark Blue
  'fundraising': { bg: '#283593', border: '#283593' },         // Dark Blue
  'movement-wide': { bg: '#78909C', border: '#78909C' },       // Blue Gray
  'research': { bg: '#283593', border: '#283593' },            // Dark Blue
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ categoryData, categoryId }) => {
  const hasSubcategories = categoryData.subcategories && Object.keys(categoryData.subcategories).length > 0;
  const colors = categoryColors[categoryId] || { bg: '#000000', border: '#000000' };

  return (
    <div 
      id={categoryId}
      className="bg-white border-4 flex-shrink-0 w-full h-full"
      style={{ borderColor: colors.border }}
    >
      {/* Category Header with dark filled background */}
      <div 
        className="px-3 py-2 border-b-4 text-center"
        style={{ backgroundColor: colors.bg, borderBottomColor: colors.border }}
      >
        <h2 className="text-sm font-bold uppercase tracking-tight text-white">
          {categoryData.category}
        </h2>
      </div>

      {/* Category Content */}
      <div className="p-2">
        {hasSubcategories ? (
          // Render subcategories with their own borders
          Object.entries(categoryData.subcategories!).map(([subcategory, entities]) => (
            <div key={subcategory} className="border-b-2 border-black bg-white last:border-b-0">
              <h3 className="text-xs font-bold uppercase tracking-tight text-black bg-gray-100 px-2 py-1 border-b-2 border-black text-center">
                {subcategory}
              </h3>
              <div className="p-2 grid grid-cols-4 gap-1">
                {entities.map((entity, idx) => (
                  <LogoTile key={`${entity.entityName}-${idx}`} entity={entity} />
                ))}
              </div>
            </div>
          ))
        ) : (
          // Render entities without subcategories
          <div className="p-2 grid grid-cols-4 gap-1">
            {categoryData.entities.map((entity, idx) => (
              <LogoTile key={`${entity.entityName}-${idx}`} entity={entity} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryGrid;
