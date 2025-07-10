import React from 'react'

interface SecondFloorRoomsProps {
  hilightedRoom?: string;
  handleStairClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SecondFloorRooms: React.FC<SecondFloorRoomsProps> = ({ hilightedRoom, handleStairClick }) => {
  return (
    <>
      <div room-data='215' className={`absolute top-[7%] left-[3.5%] w-[7.1%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '215' ? '!bg-yellow-400 !text-black' : ''}`}>215</div>
      <div room-data='214' className={`absolute top-[7%] left-[10.8%] w-[7.1%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '214' ? '!bg-yellow-400 !text-black' : ''}`}>214</div>
      <div room-data='213' className={`absolute top-[7%] left-[18.1%] w-[6.9%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '213' ? '!bg-yellow-400 !text-black' : ''}`}>213</div>
      <div room-data='212' className={`absolute top-[7%] left-[25.2%] w-[3.4%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '212' ? '!bg-yellow-400 !text-black' : ''}`}>212</div>
      <div room-data='211' className={`absolute top-[7%] left-[28.7%] w-[3.4%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '211' ? '!bg-yellow-400 !text-black' : ''}`}>211</div>
      <div room-data='210' className={`absolute top-[7%] left-[32.4%] w-[6.8%] h-[31%] responsive-room-text font-firago ${hilightedRoom === '210' ? '!bg-yellow-400 !text-black' : ''}`}>210</div>
      <div room-data='209' className={`absolute top-[7%] left-[39.4%] w-[7%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '209' ? '!bg-yellow-400 !text-black' : ''}`}>209</div>
      <div room-data='208' className={`absolute top-[7%] left-[46.5%] w-[7.1%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '208' ? '!bg-yellow-400 !text-black' : ''}`}>208</div>
      <div room-data='207' className={`absolute top-[7%] left-[53.7%] w-[7%] h-[27.5%] responsive-room-text font-firago ${hilightedRoom === '207' ? '!bg-yellow-400 !text-black' : ''}`}>207</div>
      <div room-data='206' className={`absolute top-[7%] left-[60.9%] w-[3.5%] h-[27.5%] responsive-room-text font-firago ${hilightedRoom === '206' ? '!bg-yellow-400 !text-black' : ''}`}>206</div>
      <div room-data='205' className={`absolute top-[7%] left-[64.9%] w-[13.8%] h-[30.5%] responsive-room-text font-firago ${hilightedRoom === '205' ? '!bg-yellow-400 !text-black' : ''}`}>205</div>
      <div room-data='204' className={`absolute top-[7%] left-[78.9%] w-[10.7%] h-[27.8%] responsive-room-text font-firago ${hilightedRoom === '204' ? '!bg-yellow-400 !text-black' : ''}`}>204</div>
      <div room-data='203' className={`absolute top-[7%] left-[89.8%] w-[6.9%] h-[27.8%] responsive-room-text font-firago ${hilightedRoom === '203' ? '!bg-yellow-400 !text-black' : ''}`}>203</div>

      <div room-data='216' className={`absolute top-[56%] left-[10.9%] w-[7.1%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '216' ? '!bg-yellow-400 !text-black' : ''}`}>216</div>
      <div room-data='217' className={`absolute top-[56%] left-[18.2%] w-[6.9%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '217' ? '!bg-yellow-400 !text-black' : ''}`}>217</div>
      <div room-data='218' className={`absolute top-[56%] left-[25.35%] w-[6.9%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '218' ? '!bg-yellow-400 !text-black' : ''}`}>218</div>
      <div room-data='219' className={`absolute top-[56%] left-[32.4%] w-[7%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '219' ? '!bg-yellow-400 !text-black' : ''}`}>219</div>
      <div room-data='220' className={`absolute top-[56%] left-[39.5%] w-[10.7%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '220' ? '!bg-yellow-400 !text-black' : ''}`}>220</div>
      <div room-data='221' className={`absolute top-[56%] left-[61.2%] w-[3.3%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '221' ? '!bg-yellow-400 !text-black' : ''}`}>221</div>
      <div room-data='201' className={`absolute top-[56.5%] left-[78.9%] w-[3.3%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '201' ? '!bg-yellow-400 !text-black' : ''}`}>201</div>
      <div room-data='202' className={`absolute top-[56.5%] left-[89.7%] w-[6.9%] h-[27%] responsive-room-text font-firago ${hilightedRoom === '202' ? '!bg-yellow-400 !text-black' : ''}`}>202</div>

      <button 
      onClick={handleStairClick}
      room-data='s2b1' 
      className='absolute top-[64.5%] left-[66.7%] w-[2.7%] h-[9%] stairs font-firago cursor-pointer '></button>
    </>
  )
}

export default SecondFloorRooms