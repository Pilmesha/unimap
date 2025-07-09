import Image from 'next/image'
import React from 'react'

const Gopher = () => {
  document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX
  const mouseY = e.clientY

  const anchor = document.getElementById('anchor')
  if(!anchor) return
  const rekt = anchor?.getBoundingClientRect()
  const anchorX = rekt?.left + rekt?.width /2
  const anchorY = rekt?.top + rekt?.height /2
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

  const eyes = document.querySelectorAll<HTMLElement>('#eye')
  eyes.forEach(eye => {
    eye.style.transform =`rotate(${-50 + angleDeg}deg)`
  }) 
} )

function angle (cx: number, cy:number, ex: number, ey: number) {
  const dy = ey - cy
  const dx = ex - cx
  const rad = Math.atan2(dy, dx)
  const deg = rad * 180 /Math.PI
  return deg
}
  return (
    <>
    <Image
            id='anchor'
            src={'/images/gopher.png'}
            alt='gopher'
            width={1000}
            height={1000}
            className='absolute w-auto h-[100px] top-[-70px] left-0 -z-10'
             />
             <div id='eye' className='absolute bg-white w-[17px] h-[17px] z-20 rounded-full top-[-42px] left-[28px] p-[2px]'>
              <div className='bg-black w-[8px] h-[8px] rounded-full p-[1px] '>
                <div className='bg-white w-[2px] h-[2px] rounded-full'></div>
              </div>
             </div>
             <div id='eye' className='absolute bg-white w-[17px] h-[17px] z-20 rounded-full top-[-42px] left-[55px] p-[2px]'>
              <div className='bg-black w-[8px] h-[8px] rounded-full p-[1px]'>
                <div className='bg-white w-[2px] h-[2px] rounded-full'></div>
              </div>
             </div>
    </>
  )
}

export default Gopher