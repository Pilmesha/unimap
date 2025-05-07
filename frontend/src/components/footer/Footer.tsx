import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const Footer = () => {  //bg-[var(--background)]
  return (
    <section className='w-full h-[100px] flex justify-center gap-[5rem] items-center border-t border-[var(--foreground)] z-50'>
        <Link href={'/'}>
        <div className='w-[60px] h-[60px] overflow-hidden founded-full'>
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
                    <p>Address:Tbilisi, University str N13.</p>
                </a>
                
            </div>
            <div className='flex gap-1 items-center'>
                <FaPhone />
                <p>Phone: (+995 32) 2 25 04 84.</p>
            </div>
        </div>
    </section>
  )
}

export default Footer