import React from 'react';
import { Entity } from '../types';
import LogoTile from './LogoTile';

interface FieldToolsProps {
  entities: Entity[];
}

const FieldTools: React.FC<FieldToolsProps> = ({ entities }) => {
  // Define the 8 subsections for Field Tools in 4x2 grid
  const subsections = [
    { title: 'Mobile Canvassing', subcategory: 'Mobile Canvassing' },
    { title: 'Grassroots Action Tools', subcategory: 'Grassroots Action' },
    { title: 'Dialer Tools', subcategory: 'Dialer Tools' },
    { title: 'Peer-to-Peer Texting', subcategory: 'Peer-to-Peer Texting' },
    { title: 'Mapping/Turf Cutting', subcategory: 'Mapping' },
    { title: 'Events', subcategory: 'Events' },
    { title: 'Broadcast Messaging', subcategory: 'Broadcast' },
    { title: 'Relational Organizing', subcategory: 'Relational' },
  ];

  return (
    <div className="grid grid-cols-2 gap-0 w-full">
      {subsections.map((subsection, index) => {
        const sectionEntities = entities.filter(
          (e) => e.subcategory === subsection.subcategory
        );

        return (
          <div
            key={subsection.title}
            className={`
              border-black
              ${index % 2 === 1 ? 'border-l-2' : ''}
              ${index >= 2 ? 'border-t-2' : ''}
            `}
          >
            {/* Subsection Header */}
            <div className="bg-gray-100 text-black px-2 py-1 border-b-2 border-black text-center">
              <h3 className="text-xs font-bold uppercase tracking-tight">
                {subsection.title}
              </h3>
            </div>

            {/* Subsection Content */}
            <div className="p-2 bg-white min-h-[80px]">
              {sectionEntities.length > 0 ? (
                <div className="grid grid-cols-3 gap-1">
                  {sectionEntities.map((entity) => (
                    <LogoTile
                      key={entity.entityName}
                      entity={entity}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-[60px] text-gray-400 text-xs">
                  No tools
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FieldTools;
