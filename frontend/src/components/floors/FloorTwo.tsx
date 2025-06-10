// 'use client';
// import React from 'react';
// import {roomCoordinates} from '../../data/roomCoordinates'

// interface FloorTwoProps {
//   onRoomClick: (room: string) => void;
// }

// const FloorTwo: React.FC<FloorTwoProps> = ({ onRoomClick }) => {
//   const floorRooms = roomCoordinates[2]; // Get coordinates for floor 2
//   return (
//     <div className="relative w-full max-w-[1000px] mx-auto">
//       {/* Map image */}
//       <img
//         src="/images/200-ianebi.png"
//         alt="Floor 2 Map"
//         className="w-full h-auto"
//       />

//       {/* Clickable dots */}
//       {Object.entries(floorRooms).map(([room, coords]) => (
//         <div
//           key={room}
//           onClick={() => onRoomClick(room)}
//           className="absolute bg-red-500 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
//           style={{
//             left: `${coords.x}%`,
//             top: `${coords.y}%`,
//             width: '5px',
//             height: '5px',
//             transform: 'translate(-50%, -50%)',
//             zIndex: 10
//           }}
//           title={`Room ${room}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default FloorTwo;



'use client';
import React, { useRef, useEffect, useState } from 'react';
import { roomCoordinates } from '../../data/roomCoordinates';

interface FloorTwoProps {
  onRoomClick: (room: string) => void;
  pathPoints?: { x: number; y: number }[]; // Optional path points on this floor
  cost?: number | null;
}

const FloorTwo: React.FC<FloorTwoProps> = ({ onRoomClick, pathPoints = [], cost }) => {
  const floorRooms = roomCoordinates[2]; // Get coordinates for floor 2
  const handleDebugClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    console.log(`{ x: ${x.toFixed(1)}, y: ${y.toFixed(1)} }`);
  };
  
  // Ref to the container div to track size if needed
  const containerRef = useRef<HTMLDivElement>(null);

  // State for container dimensions (optional, if needed for further scaling)
  const [containerSize, setContainerSize] = useState<{width: number; height: number}>({width: 0, height: 0});

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }
  }, []);

  // Build SVG path string from pathPoints
  const pathD = pathPoints.length > 0
    ? pathPoints.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ')
    : '';

  return (
    <div ref={containerRef} className="relative w-full max-w-[1500px] mx-auto" style={{ userSelect: 'none' }} onClick={handleDebugClick}>
      <img
        src="/images/200.png"
        alt="Floor 2 Map"
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Room markers */}
      {Object.entries(floorRooms).map(([room, coords]) => (
        <div
          key={room}
          onClick={() => onRoomClick(room)}
          className="absolute bg-red-500 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            left: `${coords.x}%`,
            top: `${coords.y}%`,
            width: '3px',
            height: '3px',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            boxShadow: '0 0 5px rgba(255,50,50,0.8)'
          }}
          title={`Room ${room}`}
        />
      ))}

      {/* SVG overlay for path */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 5 }}
        aria-hidden="true"
      >
        {pathD && (
          <path
            d={pathD}
            fill="none"
            stroke="red"
            strokeWidth={0.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-animation"
            style={{ filter: 'drop-shadow(0 0 3px rgba(255,0,0,0.7))' }}
          />
        )}
        {/* 🚩 Cost label above path */}
        {cost !== null && pathPoints.length > 1 && (() => {
        const p1 = pathPoints[0];
        const p2 = pathPoints[1];

        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        const length = Math.sqrt(dx * dx + dy * dy);
        if (length === 0) return null;

        const offsetAmount = -1; // You can tweak this
        const offsetX = (-dy / length) * offsetAmount;
        const offsetY = (dx / length) * offsetAmount;

        const labelX = midX + offsetX;
        const labelY = midY + offsetY;

        return (
          <g>
            <text
              x={labelX}
              y={labelY}
              fontSize="1.7"
              fill="black"
              textAnchor="middle"
              alignmentBaseline="middle"
              style={{ pointerEvents: 'none' }}
            >
              {cost}
            </text>
          </g>
        );
        })()}
        {pathPoints.map((pt, idx) => (
          <circle
            key={idx}
            cx={pt.x}
            cy={pt.y}
            r={0.4}
            fill="red"
            className="animate-ping-fast"
          />
        ))}
        
      </svg>
    </div>
  );
};

export default FloorTwo;
