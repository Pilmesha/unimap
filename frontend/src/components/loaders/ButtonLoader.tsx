import React from 'react'
import { PulseLoader } from 'react-spinners'

const ButtonLoader = () => {
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
    <PulseLoader color='#00f2ec' size={10} />
  </div>
  )
}

export default ButtonLoader