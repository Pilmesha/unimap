import React from 'react';
import { RiseLoader } from 'react-spinners';

const LoaderComp = () => (
  <div
  className='w-full'
    style={{
      height: '230px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <RiseLoader color='#0000ff' />
  </div>
);

export default LoaderComp;