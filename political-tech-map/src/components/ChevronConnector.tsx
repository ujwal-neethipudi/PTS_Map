import React from 'react';

interface ChevronConnectorProps {
  direction?: 'right' | 'down';
  color?: string;
}

const ChevronConnector: React.FC<ChevronConnectorProps> = ({ 
  direction = 'right',
  color = '#00BCD4' 
}) => {
  if (direction === 'right') {
    return (
      <div className="flex items-center justify-center">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none"
          className="chevron-connector"
        >
          {/* Triple chevron pointing right >>> */}
          <path 
            d="M8 10 L18 20 L8 30" 
            stroke={color} 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          <path 
            d="M16 10 L26 20 L16 30" 
            stroke={color} 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          <path 
            d="M24 10 L34 20 L24 30" 
            stroke={color} 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  // Down direction vvv
  return (
    <div className="flex items-center justify-center">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none"
        className="chevron-connector"
      >
        {/* Triple chevron pointing down vvv */}
        <path 
          d="M10 8 L20 18 L30 8" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M10 16 L20 26 L30 16" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M10 24 L20 34 L30 24" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ChevronConnector;
