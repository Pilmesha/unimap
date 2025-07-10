'use client'
import React from 'react';
import { RiseLoader } from 'react-spinners';

const PageLoader = () => (
  <div
  className='w-full'
    style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      bottom: '0',
      left: '0',
      backgroundColor: 'transparent',
      zIndex: 9999
    }}
  >
    <RiseLoader color='#0000ff' size={20} />
  </div>
);

export default PageLoader;