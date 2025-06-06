'use client';
import React from 'react';

import {roomCoordinates} from '../../data/roomCoordinates'

interface FloorFourProps {
  onRoomClick: (room: string) => void;
}

const FloorFour: React.FC<FloorFourProps> = ({ onRoomClick }) => {
  const floorRooms = roomCoordinates[4]; // Get coordinates for floor 4

  return (
    <div className="relative w-full max-w-[1500px] mx-auto ml-32">
      {/* Map image */}
      <img
        src="/images/400.png"
        alt="Floor 4 Map"
        className="w-full h-auto"
      />

      {/* Clickable dots */}
      {Object.entries(floorRooms).map(([room, coords]) => (
        <div
          key={room}
          onClick={() => onRoomClick(room)}
          className="absolute bg-red-500 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            left: `${coords.x}%`,
            top: `${coords.y}%`,
            width: '5px',
            height: '5px',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
          title={`Room ${room}`}
        />
      ))}
    </div>
  );
};

export default FloorFour;
