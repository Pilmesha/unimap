"use client"
import MainPgButton from 'components/button/MainPgButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

const MainPage = () => {
      const { t } = useTranslation()
  return (
    <main className='w-full h-auto mt-6 z-0'>
      <div className='w-full h-full flex flex-col gap-10'>
        <div className='w-full text-center'>
          <h1 className='inline-block  relative text-[3.5vw] font-semibold font-firago mt-12 text-center'>
          {t('mainPage.mainPageHeading')}
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
            <p className='lg:text-[18px] md:text-[16px] text-[10px] font-firago  text-white'>
              {t('mainPage.mainPageImageText')}
            </p>
          </div>
          <Link 
          href={'/indoor-map'}
          className='absolute lg:bottom-[20%] bottom-[10%] w-[150px] h-[40px]'>
            <MainPgButton />
          </Link>
        </div>
      </div>
      <article className='w-full h-auto bg-pink-200'>
        <div className='w-full h-auto py-[20px]'>
          <div className='mx-[2rem]'>
            <h1 className='relative inline-block text-[var(--text)] font-firago lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] tracking-wide leading-1.5 font-semibold'>
              სასარგებლო ბმულები
            <span className='absolute left-0 bottom-[-18px] h-[4px] lg:w-[80px] md:w-[70px] sm:w-[60px] w-[50px] bg-amber-400 rounded-full'></span>
            </h1>
          </div>
        </div>
      </article>
    </main>
  )
}

export default MainPage