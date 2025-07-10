'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaPhone } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const Footer = () => { 
    const { t } = useTranslation()
  return (
    <section className='w-full h-[100px] flex justify-center gap-[5rem] items-center border-t border-[var(--foreground)] z-50'>
        <Link href={'/'}>
        <div className='w-[60px] h-[60px] overflow-hidden founded-full transition transform duration-300 hover:scale-105'>
            <Image
            src={'/images/icon.png'}
            alt='icon'
            width={1200}
            height={1200}
            className='w-full h-full object-center object-cover rounded-full'
             />
        </div>
        </Link>
        <div className='flex flex-col gap-1'>
            <div className='flex gap-1 items-center underline'>
                <HiLocationMarker />
                <a href="https://maps.app.goo.gl/VLbjELpjeytwUAoW9" target='_blank'>
                    <p className='font-firago hover:text-blue-700'>{t('footer.address')}</p>
                </a>  
            </div>
            <div className='flex gap-1 items-center'>
                <FaPhone />
                <p className='font-firago'>{t('footer.phone')} (+995 32) 2 25 04 84.</p>
            </div>
        </div>
    </section>
  )
}

export default Footer