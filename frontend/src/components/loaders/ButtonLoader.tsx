import React from 'react'
import { PulseLoader } from 'react-spinners'

interface IButtonLoaderProps {
  size: number;
}

const ButtonLoader: React.FC<IButtonLoaderProps> = ({ size }) => {
  return (
    <div
      className='w-full'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        zIndex: 9999
      }}
    >
      <PulseLoader color='#00f2ec' size={size} />
    </div>
  )
}

export default ButtonLoader