import { useEffect, useState } from 'react';
import Xarrow from 'react-xarrows';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CategoryGrid from './components/CategoryGrid';
import VoterContactCategory from './components/VoterContactCategory';
import MovementWideSidebar from './components/MovementWideSidebar';
import ViewToggle from './components/ViewToggle';
import ZoomControls from './components/ZoomControls';
import { sampleEntities, groupEntitiesByCategory } from './data/entities';
import './index.css';

function App() {
  const [categories, setCategories] = useState<Map<string, any>>(new Map());
  const [arrows, setArrows] = useState<Array<{ start: string; end: string }>>([]);
  const [viewMode, setViewMode] = useState<'normal' | 'canvas'>('normal');

  useEffect(() => {
    // Filter by relevance flag and group by category
    const filtered = sampleEntities.filter((e) => e.relevanceFlag === 'Y');
    const grouped = groupEntitiesByCategory(filtered);
    setCategories(grouped);

    // Create arrows based on linked categories
    // CONNECTION STRATEGY:
    // Arrows connect categories based on the "linkedCategory" field in entity data
    // When an entity has linkedCategory = "Category Name", an arrow is drawn from
    // the entity's category to the linkedCategory
    // 
    // Example flow (based on Political Tech infographic):
    // - "Messaging & Media" → "Paid Media" (content flows to ads)
    // - "Paid Media" → "Voter Engagement" (ads drive engagement)
    // - "Data Analytics & Modeling" → "Voter Engagement" (data informs outreach)
    // - "Voter Engagement" → "Volunteer & Activist Mobilization" (engagement to action)
    // - "Fundraising" → Multiple categories (funding enables all activities)
    //
    // Arrow IDs are generated from category names:
    // - Replace spaces with hyphens
    // - Convert to lowercase
    // - Example: "Data Analytics & Modeling" → "data-analytics-&-modeling"
    const arrowConnections: Array<{ start: string; end: string }> = [];
    filtered.forEach((entity) => {
      if (entity.linkedCategory) {
        const startId = entity.category.replace(/\s+/g, '-').toLowerCase();
        const endId = entity.linkedCategory.replace(/\s+/g, '-').toLowerCase();
        
        // Avoid duplicates
        const exists = arrowConnections.some(
          (a) => a.start === startId && a.end === endId
        );
        if (!exists) {
          arrowConnections.push({ start: startId, end: endId });
        }
      }
    });
    setArrows(arrowConnections);
  }, []);

  // Define the order and grid placement of categories
  const categoryOrder = [
    'Messaging & Media',
    'Paid Media',
    'Owned Media / Digital Content',
    'Data Analytics & Modeling',
    'Voter Engagement',
    'Volunteer & Activist Mobilization',
    'Voter Contact',
    'Fundraising',
    'Movement-Wide',
    'Research',
  ];

  // Grid configuration for each category
  const gridConfig: Record<string, { col: string; row: string; class?: string }> = {
    'Messaging & Media': { col: 'col-span-4', row: 'row-start-1', class: 'min-h-[180px]' },
    'Paid Media': { col: 'col-start-1', row: 'row-start-2', class: 'min-h-[400px]' },
    'Owned Media / Digital Content': { col: 'col-span-2 col-start-3', row: 'row-start-2', class: 'min-h-[400px]' },
    'Data Analytics & Modeling': { col: 'col-start-1', row: 'row-start-3', class: 'min-h-[300px]' },
    'Voter Engagement': { col: 'col-start-2', row: 'row-start-3', class: 'min-h-[300px]' },
    'Volunteer & Activist Mobilization': { col: 'col-start-3', row: 'row-start-3', class: 'min-h-[300px]' },
    'Fundraising': { col: 'col-start-4', row: 'row-start-3', class: 'min-h-[600px]' },
    'Research': { col: 'col-start-1', row: 'row-start-4', class: 'min-h-[500px]' },
    'Voter Contact': { col: 'col-span-3 col-start-2', row: 'row-start-4', class: 'min-h-[500px]' },
    'Movement-Wide': { col: 'col-start-5', row: 'row-span-4 row-start-1', class: 'min-h-full' },
  };

  // Sort categories based on the defined order
  const sortedCategories = Array.from(categories.entries()).sort(([a], [b]) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  // Render category grid content
  const renderCategoryGrid = () => (
    <div className="grid grid-cols-5 gap-1 auto-rows-auto pb-0 bg-white" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr 0.8fr' }}>
      {sortedCategories.map(([category, categoryData]) => {
        const categoryId = category.replace(/\s+/g, '-').toLowerCase();
        const config = gridConfig[category] || { col: '', row: '', class: '' };
        
        return (
          <div key={categoryId} className={`${config.col} ${config.row} ${config.class}`}>
            {category === 'Voter Contact' ? (
              <VoterContactCategory
                categoryId={categoryId}
                categoryData={categoryData}
              />
            ) : category === 'Movement-Wide' ? (
              <MovementWideSidebar
                categoryId={categoryId}
                categoryData={categoryData}
              />
            ) : (
              <CategoryGrid
                categoryId={categoryId}
                categoryData={categoryData}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  // Render arrows
  const renderArrows = () => (
    <>
      {arrows.map((arrow, idx) => (
        <Xarrow
          key={`arrow-${idx}`}
          start={arrow.start}
          end={arrow.end}
          color="#000000"
          strokeWidth={3}
          headSize={10}
          path="grid"
          showHead={true}
          dashness={false}
          gridBreak="50%"
          zIndex={0}
        />
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Black Background */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-white">
                Political Tech Landscape Map
              </h1>
              <p className="text-gray-300 text-base">
                Comprehensive ecosystem of political technology tools and platforms
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.politicaltech.eu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Visit Political Tech Summit →
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* View Toggle */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
        </div>
      </div>

      {/* Normal Scrolling View */}
      {viewMode === 'normal' && (
        <div className="relative p-0 overflow-x-auto bg-white">
          {renderCategoryGrid()}
          {renderArrows()}
        </div>
      )}

      {/* Canvas View with Zoom/Pan - Fixed drag */}
      {viewMode === 'canvas' && (
        <div className="relative h-[calc(100vh-200px)] bg-white border-4 border-black">
          <TransformWrapper
            initialScale={0.7}
            minScale={0.3}
            maxScale={2}
            centerOnInit={true}
            wheel={{ 
              step: 0.1,
              disabled: false 
            }}
            panning={{ 
              disabled: false,
              velocityDisabled: false,
              excluded: []
            }}
            doubleClick={{ disabled: true }}
            limitToBounds={false}
            centerZoomedOut={false}
          >
            {({ zoomIn, zoomOut, resetTransform, instance }) => (
              <>
                <TransformComponent
                  wrapperClass="w-full h-full cursor-grab active:cursor-grabbing"
                  contentClass="w-full h-full flex items-start justify-start p-12"
                  wrapperStyle={{ width: '100%', height: '100%' }}
                >
                  <div className="relative">
                    {renderCategoryGrid()}
                    {renderArrows()}
                  </div>
                </TransformComponent>

                {/* Zoom Controls */}
                <ZoomControls
                  onZoomIn={() => zoomIn()}
                  onZoomOut={() => zoomOut()}
                  onReset={() => resetTransform()}
                  zoomLevel={instance.transformState.scale}
                />
              </>
            )}
          </TransformWrapper>
        </div>
      )}

      {/* Footer - Black */}
      <footer className="py-6 text-center text-sm bg-black text-white border-t-4 border-white">
        <p className="font-semibold">POLITICAL TECH SUMMIT 2026 • LANDSCAPE MAP • CLICK LOGOS TO VISIT WEBSITES</p>
      </footer>
    </div>
  );
}

export default App;
