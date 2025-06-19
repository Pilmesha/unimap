import AboutUsPage from 'components/aboutPage/AboutUsPage'
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
          <AboutUsPage />
        </section>
      </div>
    </figcaption>
  )
}

export default AboutUs