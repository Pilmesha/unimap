'use client'
import React, { lazy, Suspense, useState } from 'react';
import { roomCoordinates } from '../../data/roomCoordinates';
import LoaderComp from '../loaders/LoaderComp';
const FloorOne = lazy(() => import('../floors/FloorOne'));
const FloorTwo = lazy(() => import('../floors/FloorTwo'));
const FloorThree = lazy(() => import('../floors/FloorThree'));
const FloorFour = lazy(() => import('../floors/FloorFour'));
const FloorFive = lazy(() => import('../floors/FloorFive'));
const FloorSix = lazy(() => import('../floors/FloorSix'));
import { useTranslation } from 'react-i18next';

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
  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const { t } = useTranslation()

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

  const parsePath = (path: string | null): string[] => {
    if (!path) return [];
    return path.split(' -> ');
  };

  const getPathForFloor = (pathRooms: string[], floor: number): { x: number; y: number }[] => {
    const floorRooms = roomCoordinates[floor] || {};
    return pathRooms
      .filter(room => floorRooms.hasOwnProperty(room))
      .map(room => floorRooms[room]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromRoom || !toRoom) {
      alert('Please select both "From" and "To" rooms.');
    };

    try {
      const res = await fetch(`https://unimap-5vf6.onrender.com/minimal-path`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ start: fromRoom, end: toRoom }),
      });
      const data = await res.json();
      setPathResult(data.path);
      setPathCost(data.cost);
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
                className={`floor-button font-firago text-[12px] font-semibold ${selectedFloor === floor.id ? 'bg-blue-500 text-white' : ''}`}>
                {`${floor.name} ${t('indoorMap.floors')} `}
              </button>
            ))}
          </div>

          <section className='mt-[5rem] mb-[5rem] flex flex-col-reverse lg:flex-row-reverse justify-center items-center lg:items-start gap-[2rem] relative py-[2rem] object-center object-contain'>
            {selectedFloor === 1 && (
              <Suspense fallback={<LoaderComp  />}>
                <FloorOne
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 1)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 2 && (
              <Suspense fallback={<LoaderComp />}>
                <FloorTwo
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 2)}
                  cost = {pathCost}  
                  />
                </Suspense>
            )}
            {selectedFloor === 3 && (
              <Suspense fallback={<LoaderComp />}>
                <FloorThree
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 3)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 4 && (
              <Suspense fallback={<LoaderComp />}>
                <FloorFour
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 4)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 5 && (
              <Suspense fallback={<LoaderComp />}>
                <FloorFive
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 5)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 6 && (
              <Suspense fallback={<LoaderComp />}>
                <FloorSix
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 6)}
                />
              </Suspense>
            )}

            <div className='relative flex flex-col gap-4 min-w-[160px]'>
              <div
                onClick={() => handleModalOpen('route')}
                className={`filtering-button text-[12px] ${openModal === 'route' ? 'bg-blue-500 text-white' : ''}`}>
                {t('indoorMap.route')}
              </div>

              {openModal === 'route' && (
                <div className='bg-[var(--background)] w-[150px] min-h-[120px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] px-[0.5rem] py-[1rem]'>
                  <form className='flex flex-col gap-[1rem] items-center' onSubmit={handleSubmit}>
                    <div className='flex justify-between gap-4'>
                      <input
                        type="text"
                        value={fromRoom}
                        onChange={(e) => setFromRoom(e.target.value)}
                        placeholder={`${t('indoorMap.from')}`}
                        className='text-[12px] text-center border border-green-500 h-[30px] rounded-[5px] px-2 outline-none w-[60px]'
                      />
                      <input
                        type="text"
                        value={toRoom}
                        onChange={(e) => setToRoom(e.target.value)}
                        placeholder={`${t('indoorMap.to')}`}
                        className='text-[12px] text-center border border-green-500 h-[30px] rounded-[5px] px-2 outline-none w-[60px]'
                      />
                    </div>
                    <button
                      type='submit'
                      className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
                    >
                      {t('indoorMap.search')}
                    </button>
                  </form>
                </div>
              )}
          <div
          onClick={() => handleModalOpen('office')}
          className={`filtering-button text-[12px] mt-[2rem] ${openModal === 'office' ? 'bg-blue-500 text-white' : ''}`}
        >
          {t('indoorMap.office')}
        </div>
        {openModal === 'office' && (
          <div className='bg-[var(--background)] w-[150px] h-[100px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] px-[0.5rem] py-[1rem]'>
            <form className='flex flex-col justify-around items-center gap-[0.5rem]'>
              <input
                type="text"
                placeholder={`${t('indoorMap.lecturerName')}`}
                className='text-[12px] text-center w-full border border-green-500 h-[30px] rounded-[5px] px-2 outline-none'
              />
              <button
                type='submit'
                className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
              >
                {t('indoorMap.search')}
              </button>
            </form>
          </div>
        )}

        <div
          onClick={() => handleModalOpen('table')}
          className={`filtering-button text-[12px] mt-[2rem] ${openModal === 'table' ? 'bg-blue-500 text-white' : ''}`}
        >
          {t('indoorMap.yourTable')}
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