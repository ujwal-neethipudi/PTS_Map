import React from 'react';

interface ZigzagConnectorProps {
  from: string;
  to: string;
}

const ZigzagConnector: React.FC<ZigzagConnectorProps> = ({ from, to }) => {
  const [fromEl, setFromEl] = React.useState<HTMLElement | null>(null);
  const [toEl, setToEl] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setFromEl(document.getElementById(from));
    setToEl(document.getElementById(to));
  }, [from, to]);

  if (!fromEl || !toEl) return null;

  const fromRect = fromEl.getBoundingClientRect();
  const toRect = toEl.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate positions
  const startX = fromRect.right + scrollLeft;
  const startY = fromRect.top + fromRect.height / 2 + scrollTop;
  const endX = toRect.left + scrollLeft;
  const endY = toRect.top + toRect.height / 2 + scrollTop;

  // Create zigzag path
  const midX = startX + (endX - startX) / 2;
  
  const pathData = `
    M ${startX} ${startY}
    L ${midX} ${startY}
    L ${midX} ${endY}
    L ${endX} ${endY}
  `;

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <defs>
        <marker
          id={`arrowhead-${from}-${to}`}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#00BCD4" />
        </marker>
      </defs>
      <path
        d={pathData}
        stroke="#00BCD4"
        strokeWidth="3"
        fill="none"
        markerEnd={`url(#arrowhead-${from}-${to})`}
      />
    </svg>
  );
};

export default ZigzagConnector;
