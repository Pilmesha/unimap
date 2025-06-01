import MapDisplay from '@/components/filtering/MapDisplay'
import React from 'react'

const IndoorMap = () => {
  const floors = [
    {id:1, name: 'I'},
    {id:2, name: 'II'},
    {id:3, name: 'III'},
    {id:4, name: 'IV'},
    {id:5, name: 'V'},
    {id:6, name: 'VI'}
  ]
  return (
    <section className='realtive w-full min-h-[100vh] mb-[4rem]' >
          <MapDisplay
          floors={floors}
           />
        </section>
  )
}

export default IndoorMap