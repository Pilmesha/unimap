"use client"
import MainPgButton from 'components/button/MainPgButton'
import { SliderData } from 'components/slider_data/SliderData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {
  const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1280, 
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 680, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
};
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
      <article className='w-full h-auto bg-[var(--background)] p-[2rem] '> 
        <div className='w-full h-auto py-[20px] flex flex-col gap-8'>
          <div className='mx-[2rem]'>
            <h1 className='relative inline-block text-[var(--text-color)] font-firago lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] tracking-wide leading-1.5 font-semibold'>
              {t('mainPage.links')}
            <span className='absolute left-0 bottom-[-18px] h-[4px] lg:w-[80px] md:w-[70px] sm:w-[60px] w-[50px] bg-yellow-400 rounded-full'></span>
            </h1>
          </div>

          <div className='w-full h-auto px-0'>
            <Slider {...settings}>
            {SliderData.map((item) => (
              <a key={item.id} href={item.target} target='_blank'>
                <div 
                 className='h-[80px] w-[130px] flex items-center justify-center overflow-hidden bg-white
                  border border-[var(--gray-border)]'>
                  <Image 
                  src={item.image}
                  alt='image'
                  width={2000}
                  height={2000}
                  className='object-center w-auto h-[40px] transition transform duration-300 ease-in-out hover:scale-105'
                />
              </div>
              </a>
            ))}
            </Slider>
          </div>
        </div>
      </article>
    </main>
  )
}

export default MainPage