'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundComp = () => {
  const { t } = useTranslation()
    return (
      <div className='w-full h-[85vh] flex items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
              <h1 className='font-firago text-[var(--text-color)] text-[80px] lg:text-[180px] md:text-[150px] sm:text-[120px] font-bold '>404</h1>
              <p className='text-firago text-[16px] lg:text-[22px] md:text-[20px] sm:text-[18px] font-semibold tracking-widest'>{t('not_found.caption')}</p>
          </div>
      </div>
    )
}

export default NotFoundComp