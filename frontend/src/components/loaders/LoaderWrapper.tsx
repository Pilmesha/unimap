'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import PageLoader from './PageLoader'

const LoaderWrapper = ({children}: {children: React.ReactNode}) => {
const[loading, setLoading] = useState(false)
const pathname = usePathname()

useEffect(()=> {
    setLoading(true)
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout)
},[pathname])

  return (
    <>
        {loading && <PageLoader />}
        <div style={{ opacity: loading ? 0.2 : 1, pointerEvents: loading ? 'none' : 'auto'}}>
            {children}
        </div>
    </>
  )
}

export default LoaderWrapper