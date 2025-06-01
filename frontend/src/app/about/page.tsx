import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <figcaption className='my-[3rem] '>
      <div className='grid md:grid-cols-8 grid-cols-1 gap-[1rem]'>
        <div className='md:col-span-4 w-full md:h-[100%] h-auto overflow-hidden'>
          <Image 
          src={'/images/zustebis-fakulteti.jpg'}
          alt='about us'
          width={1000}
          height={1000}
          className='w-auto h-full object-cover object-top' />
        </div>
       
        <section className='md:col-span-4 row-span-1 w-full h-full  pt-[1rem]'>
          <div className='w-full flex flex-col text-center gap-[1.5rem] items-center'>
              <div className=' flex flex-col z-10 px-[1rem]'>
                  <h1 className='font-firago text-[5vw] font-bold text-[var(--foreground)]'>About Us</h1>
              </div>
            <p className='text-[14px] font-sans text-[var(--third-text-color)] leading-[1.5rem]'>
            The Ganivi building feels like a maze
            — and for first-year students, its basically a rite of passage to get lost in it. With all the
            winding hallways, unexpected turns, and lookalike doors, finding your classroom can be a daily 
            challenge.<br />
            Thats exactly why we created this website. Our indoor plan helps you explore the building
            with ease, showing you exactly where you need to go without the guesswork. No more wandering, no 
            more panicking between lectures — just a clear path through the maze, right at your fingertips.
            </p>
            <div className='w-[60px] h-[60px] overflow-hidden bg-white rounded-full'>
              <Image
              src={'/images/icon.png'}
              alt='logo'
              width={1200}
              height={1200}
              className='w-full h-full object-cover object-center rounded-full'
              />
            </div>
          </div>
        </section>
      </div>
    </figcaption>
  )
}

export default AboutUs