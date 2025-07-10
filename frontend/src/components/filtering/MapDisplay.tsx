'use client'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { roomCoordinates } from '../../roomCoordinates/roomCoordinates';
import LoaderComp from '../loaders/LoaderComp';
const FloorOne = lazy(() => import('../floors/FloorOne'));
const FloorTwo = lazy(() => import('../floors/FloorTwo'));
const FloorThree = lazy(() => import('../floors/FloorThree'));
const FloorFour = lazy(() => import('../floors/FloorFour'));
const FloorFive = lazy(() => import('../floors/FloorFive'));
const FloorSix = lazy(() => import('../floors/FloorSix'));
import { useTranslation } from 'react-i18next';
import { WiDirectionRight } from 'react-icons/wi';
import { fetchOffice } from 'assets/fetch_office/fetchOffice';
import ButtonLoader from 'components/loaders/ButtonLoader';
import { droebitiCxrili } from 'assets/droebitiCxrili';
import { UseUser } from 'app/context/UseProvider';
import Gopher from 'components/mainPage/Gopher';

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
  const [lecturerName, setLecturerName] = useState<string>('');
  const [lecturerRoom, setLecturerRoom] = useState<string | null>(null)
  const [lecturerError, setLecturerError] = useState<string | null>(null);
  const [hilightedRoom,sethilightedRoom] = useState<string | null>(null);
  const [lecturerLoading, setLecturerLoading] = useState<boolean>(false);
  const [pathError, setPathError] = useState<string | null>(null);
  const [pathLoader, setPathLoader] = useState<boolean>(false);
  const [laststair, setLaststair] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<'ყველა საგანი' |  'ორშაბათი' | 'სამშაბათი' | 'ოთხშაბათი' |
  'ხუთშაბათი' | 'პარასკევი' | 'შაბათი'>('ყველა საგანი')
  const { t } = useTranslation();
  const { user, setIsLoginModalOpen} = UseUser()

  useEffect(() => {
  if (pathResult) {
    const last = getLastStair(pathResult.split(' -> '));
    setLaststair(last);
  }
}, [pathResult]);

const handleFilteringTable = () => {
  if (selectedDay === 'ყველა საგანი') {
    return user?.საგნები;
  }

  return user?.საგნები.filter((subject) =>
    subject.გაკვეთილები.some((lesson) => lesson.დღე === selectedDay)
  );
};


const getLastStair = (pathArray: string[]): string | null => {
  const stairs = pathArray.filter(item => /^s[1-6][a-d]1$/.test(item));
  return stairs.length> 0 ? stairs[stairs.length -1] : null
}

const handleStairClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const stairId = e.currentTarget.getAttribute('room-data')
  if(!stairId) return;

    if (laststair) {
      const nextFloor = findFloorByroom(laststair);
      if(nextFloor){
        setSelectedFloor(nextFloor)
      }
    }
}


const findFloorByroom = (roomNumber: string): number | null => {
  for(const [floor, rooms] of Object.entries(roomCoordinates)){
    if(rooms.hasOwnProperty(roomNumber)) {
      return parseInt(floor);
    }
  }
  return null;
}
const handlePathAndCost = () => {
  setPathCost(null)
  setPathResult(null)
}


  const handldeLecturerSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLecturerError(null);
    
    if(!lecturerName.trim()) {
      setLecturerRoom(null);
      setLecturerError(t('indoorMap.error.lecturerNameRequired'))
      return;
    }
      setLecturerLoading(true);
      try {
      
      const room = await fetchOffice(lecturerName);
      if(!room) {
        setLecturerRoom(null);
        setLecturerError(t('indoorMap.error.noLecturerFound'));
      }else {
        setLecturerRoom(room);
        setLecturerError(null);
        setLecturerName(''); 
        const  floor = findFloorByroom(room);
        if(floor) setSelectedFloor(floor);
        sethilightedRoom(String(room)); 
        setOpenModal(null);
      }
    } catch (error) {
      setLecturerRoom(null)
    } finally {
      setLecturerLoading(false);
    }
  } 



  const handleTableRoom = (room: string, tableType: string) => {
    for(const[floor, rooms] of Object.entries(roomCoordinates)){
      if(rooms.hasOwnProperty(room)){
        setSelectedFloor(Number(floor))
        sethilightedRoom(room);
        handleModalOpen(tableType as 'route' | 'office' | 'table')
      }
     }
    }

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
    setPathError(null);

    if (!fromRoom || !toRoom) {
      return;
    };
    if (fromRoom === toRoom) {
      setPathError(t('indoorMap.error.sameRoom'));
      return;
    };
    
    setPathLoader(true);

    try {
      const res = await fetch(`https://unimap-5vf6.onrender.com/minimal-path`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ start: fromRoom, end: toRoom }),
      });
      const contentType = res.headers.get('Content-Type');
      if(contentType && contentType.includes('application/json')) {
        const data = await res.json();
        setPathResult(data.path);
        setPathCost(data.cost);
        setPathLoader(false);
        setFromRoom('')
        setToRoom('')

        const startingFloor = findFloorByroom(fromRoom);
        if(startingFloor) setSelectedFloor(startingFloor);

      } else {
        setPathResult(null);
        setPathCost(null);
        setPathError(t('indoorMap.error.irrelevantData'));
      }
    } catch (error) {
      console.error('Failed to fetch path:', error);
      setPathResult('Error fetching path');   
    }finally {
      setPathLoader(false);
    }
  };
  const pathRooms = parsePath(pathResult);

  return (
    <div className='w-full flex justify-center lg:block'>
      <div className='flex flex-col gap-[4rem] items-center w-full h-full pt-[4rem]'>
        <article className='w-full h-full'>
          <div className='w-full text-center mb-[2.5rem]'>
            <h1 className='inline-block  relative text-[3.5vw] font-semibold font-firago mt-0 text-center'>
              {t('indoorMap.heading')}
              <span className='absolute bottom-[-5px] left-0 h-[3px] w-full bg-[var(--color-twitter-blue)]'></span>
            </h1>
          </div>
          <div className='flex justify-around'>
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => setSelectedFloor(floor.id)}
                className={`floor-button font-firago lg:text-[12px] md:text-[10px] text-[10px] font-semibold ${selectedFloor === floor.id ? 'bg-blue-700 text-white' : 'bg-cyan-500 text-white '}`}>
                {`${floor.name} ${t('indoorMap.floors')} `}
              </button>
            ))}
          </div>
          <section className='mt-[3rem] mb-[1rem] flex flex-col lg:flex-row-reverse md:flex-row-reverse justify-center items-center lg:items-start gap-[2rem] relative py-[2rem] object-center object-contain'>
            {selectedFloor === 1 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorOne
                  hilightedRoom={hilightedRoom ?? undefined}
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 1)}
                  cost = {pathCost}
                  handleStairClick={handleStairClick}
                />
              </Suspense>
            )}
            {selectedFloor === 2 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorTwo
                  hilightedRoom={hilightedRoom ?? undefined}
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 2)}
                  cost = {pathCost}  
                  handleStairClick={handleStairClick}
                  />
                </Suspense>
            )}
            {selectedFloor === 3 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorThree
                  hilightedRoom={hilightedRoom ?? undefined}
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 3)}
                  cost = {pathCost}
                  handleStairClick={handleStairClick}
                />
              </Suspense>
            )}
            {selectedFloor === 4 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorFour
                  hilightedRoom={hilightedRoom ?? undefined}
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 4)}
                  cost = {pathCost}
                  handleStairClick={handleStairClick}
                />
              </Suspense>
            )}
            {selectedFloor === 5 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorFive
                  hilightedRoom={hilightedRoom ?? undefined}
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 5)}
                  cost = {pathCost}
                  handleStairClick={handleStairClick}
                />
              </Suspense>
            )}
            {selectedFloor === 6 && (
              <Suspense fallback={
              <div className="relative w-full max-w-[1300px] mx-auto -mt-25 px-2 sm:px-4 md:px-6 lg:px-8">
                <LoaderComp />
              </div>}>
                <FloorSix
                  hilightedRoom={hilightedRoom ?? undefined}
                  onRoomClick={handleRoomClick}
                  pathPoints={getPathForFloor(pathRooms, 6)}
                  cost = {pathCost}
                  handleStairClick={handleStairClick}
                />
              </Suspense>
            )}

            <div className='relative flex  lg:flex-col md:flex-col flex-row gap-4 min-w-[160px] lg:mt-[2rem] md:mt-[0.5rem] mt-0'>
                <div className='relative'> 
                  <div
                    onClick={() => handleModalOpen('route')}
                    className={`filtering-button text-[12px] text-center ${openModal === 'route' ? 'bg-blue-700 text-white' : 'bg-cyan-500 text-white'}`}>
                    {t('indoorMap.route')}
                  </div>
                  <Gopher />
                
                  {openModal === 'route' && (
                    <div className='bg-[var(--background)] lg:w-[160px] md:w-[160px] w-[150px] min-h-[120px] border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] px-[0.5rem] py-[1rem]'>
                      <form className='flex flex-col gap-[1rem] items-center' onSubmit={handleSubmit}>
                        <div className='flex justify-between gap-1'>
                          <input
                            type="text"
                            value={fromRoom}
                            onChange={(e) => setFromRoom(e.target.value)}
                            placeholder={`${t('indoorMap.from')}`}
                            className='text-[12px] text-center border border-green-500 h-[30px] rounded-[5px] px-2 outline-none w-[50px] md:w-[60px]'
                          />
                          <div className='h-[30px] flex justify-center items-center'>
                            <WiDirectionRight className='text-[var-(--foreground)] text-[20px]' />
                          </div>
                          <input
                            type="text"
                            value={toRoom}
                            onChange={(e) => setToRoom(e.target.value)}
                            placeholder={`${t('indoorMap.to')}`}
                            className='text-[12px] text-center border border-green-500 h-[30px] rounded-[5px] px-2 outline-none w-[50px] md:w-[60px]'
                          />
                        </div>
                        {pathError && (
                          <span className="text-red-500 text-[8px] text-center">{pathError}</span>
                        )}
                        {pathResult ? 
                        <button 
                        onClick={() => handlePathAndCost()}
                        className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[12px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
                        >
                          {t('indoorMap.clear_path')}
                        </button>
                         : <button
                          type='submit'
                          className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
                        >
                          {pathLoader ? <ButtonLoader size={5} /> : t('indoorMap.search')}
                        </button> }
                      </form>
                    </div>
                  )}
              </div>

              <div>   
                <div
                onClick={() => handleModalOpen('office')}
                className={`filtering-button text-[12px] text-center  ${openModal === 'office' ? 'bg-blue-700 text-white' : 'bg-cyan-500'}`}
              >
                {t('indoorMap.office')}
              </div>
              {openModal === 'office' && (
                <div className={`bg-[var(--background)] lg:w-[160px] md:w-[160px] w-[150px]  border ${lecturerError ? 'h-[120px]' : 'h-[100px]'} border-blue-500 rounded-[8px] flex flex-col gap-[1rem] px-[0.5rem] py-[1rem]`}>
                  <form className='flex flex-col justify-around items-center gap-[0.5rem]'>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLecturerName(e.target.value)}
                      value={lecturerName}
                      type="text"
                      placeholder={`${t('indoorMap.lecturerName')}`}
                      className='text-[12px] text-center w-full border border-green-500 h-[30px] rounded-[5px] px-2 outline-none'
                    />
                    {lecturerError && (
                        <span className="text-red-500 text-[8px] text-center ">{lecturerError}</span>
                    )}

                    <button
                      onClick={handldeLecturerSearch}
                      type='submit'
                      className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'
                      >
                      {lecturerLoading ? <ButtonLoader size={5} /> : t('indoorMap.search')}
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div>
              <div
                onClick={() =>{
                  if(!user){
                  setIsLoginModalOpen(true)
                } else {
                  handleModalOpen('table')}
                }
                }
                className={`filtering-button text-[12px] text-center ${openModal === 'table' ? 'bg-blue-700 text-white' : 'bg-cyan-500'}`}
              >
                {t('indoorMap.yourTable')}
              </div>
              
              {openModal === 'table' && (
              (!user || (user.საგნები && user.საგნები.length === 0)) ?
              (<div  
                onClick={() => handleModalOpen('table')}
                className='fixed inset-0 flex items-center justify-center z-50 bg-black/90'>{t('indoorMap.no_subjects')}</div>
              ) : (
              <div 
              onClick={() => handleModalOpen('table')}
              className='fixed inset-0 flex items-center justify-center z-50 bg-black/90'>
                <div 
                onClick={(e) => e.stopPropagation()}
                className='bg-[var(--background)] relative w-auto h-auto border border-blue-500 rounded-[8px] flex flex-row 
                gap-[1rem] p-[2rem] mx-[1rem]'>
                  <select 
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value as typeof selectedDay)}
                  className='absolute left-0 top-[0px] flex items-start  outline-none text-[var(--foreground)] bg-[var(--background)]
                  rounded-[8px] p-[3px] md:text-[12px] lg:text-[14px] text-[10px]'>
                    <option onChange={() => setSelectedDay('ყველა საგანი')} value="ყველა საგანი">{t('indoorMap.days.all')}</option>
                    <option onChange={() => setSelectedDay('ორშაბათი')} value="ორშაბათი">{t('indoorMap.days.mo')}</option>
                    <option onChange={() => setSelectedDay('სამშაბათი')} value="სამშაბათი">{t('indoorMap.days.tu')}</option>
                    <option onChange={() => setSelectedDay('ოთხშაბათი')} value="ოთხშაბათი">{t('indoorMap.days.we')}</option>
                    <option onChange={() => setSelectedDay('ხუთშაბათი')} value="ხუთშაბათი">{t('indoorMap.days.th')}</option>
                    <option onChange={() => setSelectedDay('პარასკევი')} value="პარასკევი">{t('indoorMap.days.fr')}</option>
                    <option onChange={() => setSelectedDay('შაბათი')} value="შაბათი">{t('indoorMap.days.sa')}</option>
                  </select>
                  {handleFilteringTable()?.length === 0 ? (
                    <div className='w-[150px] lg:w-[400px] md:w-[300px] sm:w-[200px]  flex items-center justify-center '>
                      <h1 className='md:text-[12px] lg:text-[14px] text-[10px]'>{t('indoorMap.noSubjectsThatDay')}</h1>
                    </div>
                  ):(
                  <table 
                  className='overflow-x-scroll border border-gray-600 text-sm text-left'>
                    <thead>
                      <tr>
                        <th className='th-class font-firago'>{t('table.subject')}</th>
                        <th className='th-class font-firago'>{t('table.lecture')}</th>
                        <th className='th-class font-firago'>{t('table.practical')}</th>
                        <th className='th-class font-firago'>{t('table.laboratory')}</th>
                        <th className='th-class whitespace-nowrap'>{t('table.working_group')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {handleFilteringTable()?.map((საგანი, index) => {
                        const findByType = (type: string) => საგანი.გაკვეთილები.filter((lesson) => lesson.ტიპი === type)
                        .map((lesson) => ({room:lesson.აუდიტორია, time:lesson.დრო}))
                        return (
                            <tr key={index}>
                              <td className='cursor-pointer border px-[4px] py-[4px] text-center md:text-[12px] lg:text-[14px] text-[10px] 
                               '>{საგანი.დასახელება}</td>
                              <td
                                onClick={() => {
                                  const auds = findByType('ლექცია');
                                  if (auds.length > 0) handleTableRoom(auds[0].room,'table');
                                }}
                                className='cursor-pointer border px-[4px] hover:scale-105 hover:font-semibold transform transition ease-in-out duration-600 py-[4px] 
                                text-center md:text-[12px] lg:text-[14px] text-[10px]'
                              >
                               {findByType('ლექცია').map((lesson, i) => (
                                <div key={i}>
                                  <div className='flex flex-col gap-[3px]'>
                                    <p>{lesson.room} </p>
                                    ({lesson.time})
                                  </div>
                                </div>
                               ))}
                              </td>
                              <td
                                onClick={() => {
                                  const auds = findByType('პრაქტიკული');
                                  if (auds.length > 0) handleTableRoom(auds[0].room, 'table');
                                }}
                                className='cursor-pointer border px-[4px] hover:scale-105 hover:font-semibold transform transition ease-in-out duration-600 py-[4px] 
                                md:text-[12px] lg:text-[14px] text-[10px]'
                              >
                                {findByType('პრაქტიკული').map((lesson, i) => (
                                <div key={i}>
                                  <div className='flex flex-col gap-[3px]'>
                                    <p>{lesson.room} </p>
                                    ({lesson.time})
                                  </div>
                                </div>
                                ))}
                              </td>
                              <td
                                onClick={() => {
                                  const auds = findByType('ლაბორატორიული');
                                  if (auds.length > 0) handleTableRoom(auds[0].room,'table');
                                }}
                                className='cursor-pointer md:text-[12px] lg:text-[14px] text-[10px] 
                                hover:scale-105 hover:font-semibold transform transition ease-in-out duration-600 border px-[4px] py-[4px] text-center'
                              >
                                {findByType('ლაბორატორიული').map((lesson, i) => (
                                <div key={i}>
                                  <div className='flex flex-col gap-[3px]'>
                                    <p>{lesson.room} </p>
                                    ({lesson.time})
                                  </div>
                                </div>
                                ))}
                              </td>
                              <td
                                onClick={() => {
                                  const auds = findByType('სამუშაო ჯგუფი');
                                  if (auds.length > 0) handleTableRoom(auds[0].room, 'table');
                                }}
                                className='cursor-pointer border px-[4px] hover:scale-105 hover:font-semibold transform transition ease-in-out duration-600 py-[4px]
                                 text-center md:text-[12px] lg:text-[14px] text-[10px]'
                              >
                                {findByType('სამუშაო ჯგუფი').map((lesson, i) => (
                                <div key={i}>
                                  <div className='flex flex-col gap-[3px]'>
                                    <p>{lesson.room} </p>
                                    ({lesson.time})
                                  </div>
                                </div>
                                ))}
                              </td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                  )}
                </div>
              </div>
            )
              )}  
            </div> 
        </div>
      </section>
    </article>
  </div>
</div>
);
};
export default MapDisplay;