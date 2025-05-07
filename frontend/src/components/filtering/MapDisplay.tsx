'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import FloorOne from '../floors/FloorOne';
import FloorTwo from '../floors/FloorTwo';
interface Floors {
    id: number;
    name: string;
}
interface Props {
    floors: Floors[];
}

const MapDisplay:React.FC<Props>= ({floors}) => {
    const [openModal, setOpenModal] = useState<null |'route' |'office' | 'table'>(null);
    
    const handleModalOpen = (type: 'route' |'office' | 'table') => {
        setOpenModal(prev => prev === type ?  null : type);
    }

  return (
    <div className='flex flex-col gap-[4rem] items-center w-full h-full pt-[4rem]'>
          <article className='w-full h-full  '>
            <div className='flex  justify-between'>
              {floors.map((floor) => (
                <button 
                key={floor.id}
                className='floor-button font-firago text-[12px] font-semibold '>
                  {`${floor.name} სართული`}
                </button>
              ))}
            </div>

            <section className=' mt-[5rem] mb-[5rem]'>

                {/* <FloorOne /> */}
                <FloorTwo />

              <div className='relative flex flex-col gap-0'>
                  <div 
                  onClick={() => handleModalOpen('route')}
                  className={`filtering-button ${openModal === 'route' ? 'bg-blue-500 text-white' : ''}`}>
                    Route
                  </div>
                  {openModal === 'route' && (
                    <div>
                        <p>იდკ აქ რა უნდა ვაჩვენო</p>
                    </div>
                  )}

                  <div 
                  onClick={() => handleModalOpen('office')}
                  className={`filtering-button mt-[2rem] ${openModal === 'office' ? 'bg-blue-500 text-white' : ''}`}>
                    Lecturer`s office
                  </div>
                    {openModal === 'office' && (
                        <div className='bg-[var(--background)] w-[150px] h-[180px]
                        border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] p-[1rem]'>
                            <form className='flex flex-col justify-around items-center gap-[0.5rem]'>
                                <input 
                                type="text" 
                                placeholder='Lecturer`s name...'
                                className='text-[14px] text-center w-full border border-green-500 h-[30px] rounded-[5px]  px-2 outline-none' />
                                <p>or</p>
                                <input 
                                type="number" 
                                placeholder='Room...'
                                className='text-[14px] text-center w-full border border-green-500 h-[30px] rounded-[5px]  px-2 outline-none' />

                                <button 
                                type='submit'
                                className='bg-blue-500 text-white w-[90px] rounded-full h-[30px] text-[14px] font-firago font-semibold cursor-pointer hover:scale-[1.05] transition-all duration-200'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}

                  <div 
                  onClick={() => handleModalOpen('table')}
                  className={`filtering-button mt-[2rem] ${openModal === 'table' ? 'bg-blue-500 text-white' : ''}`}>
                    Your table
                  </div>
                  {openModal === 'table' &&(
                    <div
                    onClick={() => handleModalOpen('table')} 
                    className='bg-[var(--background)] w-[150px] h-[180px]
                    border border-blue-500 rounded-[8px] flex flex-col gap-[1rem] p-[1rem]'>
                      Log In First
                    </div>
                  )}
                </div>

            </section>
          </article>
      </div>
  )
}

export default MapDisplay