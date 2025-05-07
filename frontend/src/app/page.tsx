import MainPgButton from '@/assets/MainPgButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <main className='w-full h-auto mt-6 z-0'>
      <div className='w-full h-full flex flex-col gap-10'>
        <div className='w-full text-center'>
          <h1 className='inline-block  relative text-[3vw] font-semibold font-firago mt-12 text-center'>
          TBILISI STATE UNIVERSITY BUILDING INDOOR PLAN
          <span className='absolute bottom-[-5px] left-0 h-[3px] w-full bg-[var(--color-twitter-blue)]'></span>
          </h1>
        </div>
        <div className='w-full h-full relative flex justify-center'>
          <div className='w-full max-h-[80vh] overflow-hidden'>
            <Image
            src={'/images/uni.jpg'}
            alt='image'
            width={1500}
            height={1500}
            className='w-full h-full object-center' />
          </div>
          <div className='absolute top-[20%] w-[80%] h-auto p-[1rem] rounded-xl bg-[var(--blury-black)] backdrop-blur-sm  shadow-[0_0_50px_rgba(0,0,0,0.9)]'>
            <p className='md:text-[18px] text-[14px] font-firago  text-white'>
              This website helps TSU students easily navigate the campus and find rooms or lecturers offices.
              It provides a user-friendly interface to quickly locate classrooms and faculty offices, so students
              can focus on their studies.
            </p>
          </div>
          <Link 
          href={'/indoor-map'}
          className='absolute lg:bottom-[20%] bottom-[10%] w-[150px] h-[40px]'>
            <MainPgButton />
          </Link>
        </div>
      </div>
      <article>
        some more design here, but for later, cause i didn`t think of anything
      </article>
    </main>
  )
}

export default page