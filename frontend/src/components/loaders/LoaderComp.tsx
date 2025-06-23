import React from 'react';
import { RiseLoader } from 'react-spinners';

const LoaderComp = () => (
  <div
  className='relative w-full h-full flex items-center justify-center'
    style={{
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <RiseLoader color='#0000ff' />
  </div>
);

export default LoaderComp;