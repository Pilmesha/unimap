'use client';
import React, { useRef, useEffect, useState } from 'react';
import { roomCoordinates } from '../../roomCoordinates/roomCoordinates';
import "app/globals.css";
import Image from 'next/image';
import FirstFloorRooms from 'components/rooms/FirstFloorRooms';
import { useTranslation } from 'react-i18next';

interface FloorOneProps {
  onRoomClick: (room: string) => void;
  pathPoints?: { x: number; y: number }[];
  cost?: number | null;
  hilightedRoom?: string;
  handleStairClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FloorOne: React.FC<FloorOneProps> = ({ onRoomClick, pathPoints = [], cost, hilightedRoom, handleStairClick }) => {
  const floorRooms = roomCoordinates[1];
  const { t } = useTranslation() 

  const containerRef = useRef<HTMLDivElement>(null);

  const [containerSize, setContainerSize] = useState<{width: number; height: number}>({width: 0, height: 0});

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }
  }, []);


  const pathD = pathPoints.length > 0
    ? pathPoints.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ')
    : '';

  return (
    <div ref={containerRef} className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className='relative w-auto h-auto'>
          <Image
          src="/images/100.png"
          alt="Floor 1 Map"
          className="w-full h-auto block"
          draggable={false}
          width={3000}
          height={3000}
          />
         
         {/* otakhebi */}
          <FirstFloorRooms  
          hilightedRoom={hilightedRoom}
          handleStairClick={handleStairClick} />

           {cost && <div className='absolute top-[25px] left-[-2px] text-[var(--text-color)] font-sans font-semibold tracking-wide
           text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]'>{t('indoorMap.distance', {count: cost})}</div>}
        </div>

      {Object.entries(floorRooms).map(([room, coords]) => (
        <div
          key={room}
          onClick={() => onRoomClick(room)}
          className="absolute bg-yellow-500 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            left: `${coords.x}%`,
            top: `${coords.y}%`,
            width: '3px',
            height: '3px',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            boxShadow: '0 0 5px rgba(255,255,50,0.8)',
          }}
          title={`Room ${room}`}
        />
      ))}

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
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-animation"
            style={{ filter: 'drop-shadow(0 0 3px rgba(255,0,0,0.7))', vectorEffect: 'non-scaling-stroke', }}/>
        )}

        {cost !== null && pathPoints.length > 1 && (() => {
        const p1 = pathPoints[0];
        const p2 = pathPoints[1];

        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        const length = Math.sqrt(dx * dx + dy * dy);
        if (length === 0) return null;

        const offsetAmount = -1;
        const offsetX = (-dy / length) * offsetAmount;
        const offsetY = (dx / length) * offsetAmount;

        const labelX = midX + offsetX;
        const labelY = midY + offsetY;

        })()}
      </svg>
    </div>
  );
};

export default FloorOne;
