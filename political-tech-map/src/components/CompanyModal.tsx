import React from 'react';
import { Entity } from '../types';

interface CompanyModalProps {
  entity: Entity;
  isOpen: boolean;
  onClose: () => void;
}

const CompanyModal: React.FC<CompanyModalProps> = ({ entity, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
        <div className="bg-white border-4 border-black max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0">
            <h2 className="text-xl font-bold">{entity.entityName}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl font-bold leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-4">
            {/* Logo if available */}
            {entity.logoUrl && (
              <div className="flex justify-center py-4 border-b-2 border-gray-200">
                <img 
                  src={entity.logoUrl} 
                  alt={entity.entityName}
                  className="max-h-24 object-contain"
                />
              </div>
            )}

            {/* Company Info Grid */}
            <div className="space-y-3">
              {entity.hq && (
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Headquarters</h3>
                  <p className="text-base text-black">{entity.hq}</p>
                </div>
              )}

              {entity.domain && (
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Website</h3>
                  <a 
                    href={entity.domain.startsWith('http') ? entity.domain : `https://${entity.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-base"
                  >
                    {entity.domain}
                  </a>
                </div>
              )}

              {entity.description && (
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Description</h3>
                  <p className="text-base text-black leading-relaxed">{entity.description}</p>
                </div>
              )}

              {entity.category && (
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Category</h3>
                  <p className="text-base text-black">{entity.category}</p>
                </div>
              )}

              {entity.subcategory && (
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Subcategory</h3>
                  <p className="text-base text-black">{entity.subcategory}</p>
                </div>
              )}

              {entity.subBucket && (
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Sub Bucket</h3>
                  <p className="text-base text-black">{entity.subBucket}</p>
                </div>
              )}

              {entity.toolsProducts && (
                <div>
                  <h3 className="text-sm font-bold text-gray-600 uppercase">Tools / Products</h3>
                  <p className="text-base text-black">{entity.toolsProducts}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t-2 border-gray-200 flex gap-3">
              {entity.websiteUrl && (
                <a
                  href={entity.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors"
                >
                  Visit Website →
                </a>
              )}
              <button
                onClick={onClose}
                className="border-2 border-black text-black px-6 py-3 font-bold hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyModal;
