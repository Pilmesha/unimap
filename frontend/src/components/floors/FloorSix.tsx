import Image from 'next/image'
import React from 'react'

const FloorSix = () => {

  return (
    <main className='w-full h-auto'>
                    <div className='relative w-full bg-white h-full '>
                        <div className='w-full h-full overflow-hidden flex justify-center '>
                            <Image
                            src={'/images/600-ianebi.png'} 
                            alt='third floor image'
                            width={4000}
                            height={4000}
                            className='object-center object-cover w-[85%] h-full mb-0'
                            />
                        </div>
                        
                        {/*start ოთახების ნომრები */}
                        <div data-room='620' className='absolute top-[63%] left-[62.8%] w-[16.4%] h-[31%]  responsive-room-text'>
                            620
                        </div>
                        <div data-room ='621' className='absolute top-[63.5%] left-[58.5%] w-[4%] h-[33%]  responsive-room-text'>
                            621
                        </div>
                        <div data-room ='628' className='absolute top-[62%] left-[16.2%] w-[17%] h-[31%]  responsive-room-text'>
                            628
                        </div>
                        {/*end ოთახების ნომრები */}
                    </div>
                </main>
  )
}

export default FloorSix