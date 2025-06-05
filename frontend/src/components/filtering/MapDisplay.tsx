//             <div
//               onClick={() => handleModalOpen('office')}
//               className={`filtering-button mt-[2rem] ${openModal === 'office' ? 'bg-blue-500 text-white' : ''}`}
//             >
//               Lecturer`s office
//             </div>
//             {openModal === 'office' && (
//               <div className='bg-[var(--background)] w-[150px] h-[100px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] px-[0.5rem] py-[1rem]'>
//                 <form className='flex flex-col justify-around items-center gap-[0.5rem]'>
//                   <input
//                     type="text"
//                     placeholder='Lecturer`s name...'
//                     className='text-[14px] text-center w-full border border-green-500 h-[30px] rounded-[5px] px-2 outline-none'
//                   />
//                   <button
//                     type='submit'
//                     className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             )}

//             <div
//               onClick={() => handleModalOpen('table')}
//               className={`filtering-button mt-[2rem] ${openModal === 'table' ? 'bg-blue-500 text-white' : ''}`}
//             >
//               Your table
//             </div>
//             {openModal === 'table' && (
//               <div className='bg-[var(--background)] w-[150px] h-[180px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] p-[1rem]'>
//                 Log In First
//               </div>
//             )}
//           </div>
//           </section>
//         </article>
//       </div>
//     </div>
//   );
// };

// export default MapDisplay;


'use client'
import React, { useState } from 'react';
import FloorOne from '../floors/FloorOne';
import FloorTwo from '../floors/FloorTwo';
import FloorThree from '../floors/FloorThree';
import FloorFour from '../floors/FloorFour';
import FloorFive from '../floors/FloorFive';
import FloorSix from '../floors/FloorSix';
import { roomCoordinates } from '../../data/roomCoordinates';

interface Floors {
  id: number;
  name: string;
}

interface Props {
  floors: Floors[];
}

const MapDisplay: React.FC<Props> = ({ floors }) => {
  const [openModal, setOpenModal] = useState<null | 'route' | 'office' | 'table'>(null);
  const [fromRoom, setFromRoom] = useState<string>('');
  const [toRoom, setToRoom] = useState<string>('');
  const [pathResult, setPathResult] = useState<string | null>(null);
  const [pathCost, setPathCost] = useState<number | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<number>(1); // Default to Floor 1

  const handleModalOpen = (type: 'route' | 'office' | 'table') => {
    setOpenModal(prev => (prev === type ? null : type));
  };

  const handleRoomClick = (room: string) => {
    if (!fromRoom) {
      setFromRoom(room);
    } else if (!toRoom) {
      setToRoom(room);
    } else {
      setFromRoom(room);
      setToRoom('');
    }
  };

  // Parses path string into rooms array
  const parsePath = (path: string | null): string[] => {
    if (!path) return [];
    return path.split(' -> ');
  };

  // Filter path segments for the selected floor
  // Here we assume roomCoordinates keys are floor numbers,
  // and coordinates contain rooms. We return only path rooms that exist on the floor.
  const getPathForFloor = (pathRooms: string[], floor: number): { x: number; y: number }[] => {
    const floorRooms = roomCoordinates[floor] || {};
    return pathRooms
      .filter(room => floorRooms.hasOwnProperty(room))
      .map(room => floorRooms[room]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromRoom || !toRoom) return;

    try {
      const res = await fetch(`https://unimap-5vf6.onrender.com/minimal-path`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start: fromRoom, end: toRoom }),
      });
      const data = await res.json();
      setPathResult(data.path);
      setPathCost(data.cost);
      // Optionally parse selectedFloor to that of first room in path, if path has multiple floors
    } catch (error) {
      console.error('Failed to fetch path:', error);
      setPathResult('Error fetching path');
    }
  };

  const pathRooms = parsePath(pathResult);

  return (
    <div className='w-full flex justify-center lg:block'>
      <div className='flex flex-col gap-[4rem] items-center w-full h-full pt-[4rem]'>
        <article className='w-full h-full'>
          <div className='flex justify-between'>
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => setSelectedFloor(floor.id)}
                className={`floor-button font-firago text-[12px] font-semibold ${selectedFloor === floor.id ? 'bg-blue-500 text-white' : ''}`}
              >
                {`${floor.name} Floor`}
              </button>
            ))}
          </div>

          <section className='mt-[5rem] mb-[5rem] flex flex-col-reverse lg:flex-row-reverse justify-center items-center lg:items-start gap-[2rem] relative'>

            {selectedFloor === 1 && (
              <FloorOne
                onRoomClick={handleRoomClick}
                pathPoints={getPathForFloor(pathRooms, 1)}
                cost = {pathCost}
              />
            )}
            {selectedFloor === 2 && (
              <FloorTwo
                onRoomClick={handleRoomClick}
                pathPoints={getPathForFloor(pathRooms, 2)}
                cost = {pathCost}
                
              />
            )}
            {selectedFloor === 3 && (
              <FloorThree
                onRoomClick={handleRoomClick}
                pathPoints={getPathForFloor(pathRooms, 3)}
                cost = {pathCost}
              />
            )}
            {selectedFloor === 4 && (
              <FloorFour
                onRoomClick={handleRoomClick}
                pathPoints={getPathForFloor(pathRooms, 4)}
              />
            )}
            {selectedFloor === 5 && (
              <FloorFive
                onRoomClick={handleRoomClick}
                pathPoints={getPathForFloor(pathRooms, 5)}
                cost = {pathCost}
              />
            )}
            {selectedFloor === 6 && (
              <FloorSix
                onRoomClick={handleRoomClick}
                pathPoints={getPathForFloor(pathRooms, 6)}
              />
            )}

            <div className='relative flex flex-col gap-4 min-w-[160px]'>
              <div
                onClick={() => handleModalOpen('route')}
                className={`filtering-button ${openModal === 'route' ? 'bg-blue-500 text-white' : ''}`}
              >
                Route
              </div>

              {openModal === 'route' && (
                <div className='bg-[var(--background)] w-[150px] min-h-[120px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] px-[0.5rem] py-[1rem]'>
                  <form className='flex flex-col justify-around items-center gap-[0.5rem]' onSubmit={handleSubmit}>
                    <div className='flex justify-between gap-4'>
                      <input
                        type="text"
                        value={fromRoom}
                        onChange={(e) => setFromRoom(e.target.value)}
                        placeholder='From...'
                        className='text-[14px] text-center border border-green-500 h-[30px] rounded-[5px] px-2 outline-none w-[60px]'
                      />
                      <input
                        type="text"
                        value={toRoom}
                        onChange={(e) => setToRoom(e.target.value)}
                        placeholder='To...'
                        className='text-[14px] text-center border border-green-500 h-[30px] rounded-[5px] px-2 outline-none w-[60px]'
                      />
                    </div>
                    <button
                      type='submit'
                      className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
                    >
                      Submit
                    </button>
                  </form>
                  {pathResult && (
                    <p className='text-xs text-center mt-2 text-blue-600 break-words'>{pathResult}</p>
                  )}
                </div>
              )}
            <div
          onClick={() => handleModalOpen('office')}
          className={`filtering-button mt-[2rem] ${openModal === 'office' ? 'bg-blue-500 text-white' : ''}`}
        >
          Lecturer`s office
        </div>
        {openModal === 'office' && (
          <div className='bg-[var(--background)] w-[150px] h-[100px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] px-[0.5rem] py-[1rem]'>
            <form className='flex flex-col justify-around items-center gap-[0.5rem]'>
              <input
                type="text"
                placeholder='Lecturer`s name...'
                className='text-[14px] text-center w-full border border-green-500 h-[30px] rounded-[5px] px-2 outline-none'
              />
              <button
                type='submit'
                className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
              >
                Submit
              </button>
            </form>
          </div>
        )}

        <div
          onClick={() => handleModalOpen('table')}
          className={`filtering-button mt-[2rem] ${openModal === 'table' ? 'bg-blue-500 text-white' : ''}`}
        >
          Your table
        </div>
        {openModal === 'table' && (
          <div className='bg-[var(--background)] w-[150px] h-[180px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] p-[1rem]'>
            Log In First
          </div>
        )}
      </div>
      </section>
    </article>
  </div>
</div>
);
};
export default MapDisplay;