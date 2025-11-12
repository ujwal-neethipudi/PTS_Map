import React from 'react';
import { CategoryData } from '../types';
import LogoTile from './LogoTile';
import FieldTools from './FieldTools';

interface VoterContactCategoryProps {
  categoryData: CategoryData;
  categoryId: string;
}

const VoterContactCategory: React.FC<VoterContactCategoryProps> = ({ categoryData, categoryId }) => {
  // Filter entities for Voter Education subcategory (top section)
  const voterEducationEntities = categoryData.entities.filter(
    (e) => e.subcategory === 'Voter Education'
  );

  // Filter entities for Field Tools (everything except Voter Education)
  const fieldToolsEntities = categoryData.entities.filter(
    (e) => e.subcategory !== 'Voter Education'
  );

  const colors = { bg: '#283593', border: '#283593' };

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

      {/* Voter Education Section */}
      <div className="border-b-2 border-black bg-white">
        <div 
          className="px-2 py-1 border-b-2 border-black bg-gray-100 text-center"
        >
          <h3 className="text-xs font-bold uppercase tracking-tight text-black">
            Voter Education
          </h3>
        </div>
        <div className="p-2">
          {voterEducationEntities.length > 0 ? (
            <div className="grid grid-cols-4 gap-1">
              {voterEducationEntities.map((entity) => (
                <LogoTile
                  key={entity.entityName}
                  entity={entity}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[100px] text-gray-400 text-xs">
              No tools in this category
            </div>
          )}
        </div>
      </div>

      {/* Field Tools Section - 8 subsections in 4x2 grid */}
      <div>
        <div 
          className="px-2 py-1 border-b-2 border-black bg-gray-100 text-center"
        >
          <h3 className="text-xs font-bold uppercase tracking-tight text-black">
            Field Tools
          </h3>
        </div>
        <FieldTools entities={fieldToolsEntities} />
      </div>
    </div>
  );
};

export default VoterContactCategory;
