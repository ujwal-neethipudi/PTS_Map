import React from 'react';
import Xarrow from 'react-xarrows';

interface ConnectionArrowsProps {
  arrows: Array<{ start: string; end: string }>;
}

const ConnectionArrows: React.FC<ConnectionArrowsProps> = ({ arrows }) => {
  return (
    <>
      {arrows.map((arrow, idx) => (
        <Xarrow
          key={`arrow-${idx}`}
          start={arrow.start}
          end={arrow.end}
          color="#60a5fa"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          showHead={true}
          dashness={false}
          curveness={0.8}
          zIndex={-1}
        />
      ))}
    </>
  );
};

export default ConnectionArrows;
