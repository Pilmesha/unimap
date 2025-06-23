import FloorOne from 'components/floors/FloorOne';
import LoaderComp from 'components/loaders/LoaderComp';
import React, { Suspense } from 'react'
interface IFloorProps {
    selectedFloor: number;
    handleRoomClick: (roomId: string) => void;
}

const Floors: React.FC<IFloorProps> = ({ selectedFloor, handleRoomClick }) => {
  return (
    {selectedFloor === 1 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorOne
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 1)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 2 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorTwo
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 2)}
                  cost = {pathCost}  
                  />
                </Suspense>
            )}
            {selectedFloor === 3 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorThree
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 3)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 4 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorFour
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 4)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 5 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorFive
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 5)}
                  cost = {pathCost}
                />
              </Suspense>
            )}
            {selectedFloor === 6 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorSix
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 6)}
                />
              </Suspense>
            )}
  )
}

export default Floors