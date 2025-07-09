import React from 'react'
interface FirstFloorRoomsProps {
  hilightedRoom?: string | null;
  handleStairClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FirstFloorRooms: React.FC<FirstFloorRoomsProps> = ({hilightedRoom, handleStairClick}) => {
  return (
    <>
      <div room-data='room-giraffee' className={`absolute top-[30%] left-[10.4%] w-[15.1%] h-[22%] responsive-room-text font-firago ${hilightedRoom === 'room-giraffee' ? '!bg-yellow-400 !text-black' : ''}`}>room giraffee</div>
      <div room-data='101' className={`absolute top-[45.7%] left-[26.2%] w-[4.8%] h-[16%] responsive-room-text font-firago ${hilightedRoom === '102' ? '!bg-yellow-400 !text-black' : ''}`}>101</div>
      <div room-data='102' className={`absolute top-[30%] left-[27%] w-[6.5%] h-[7.1%] responsive-room-text font-firago ${hilightedRoom === '102' ? '!bg-yellow-400 !text-black' : ''}`}>102</div>
      <div room-data='103' className={`absolute top-[22.8%] left-[33.8%] w-[9.9%] h-[14.4%] responsive-room-text font-firago ${hilightedRoom === '103' ? '!bg-yellow-400 !text-black' : ''}`}>103</div>
      <div room-data='104' className={`absolute top-[30.1%] left-[44%] w-[4.8%] h-[7.2%] responsive-room-text font-firago ${hilightedRoom === '104' ? '!bg-yellow-400 !text-black' : ''}`}>104</div>
      <div room-data='105' className={`absolute top-[22.8%] left-[49.1%] w-[9.9%] h-[14.4%] responsive-room-text font-firago ${hilightedRoom === '105' ? '!bg-yellow-400 !text-black' : ''}`}>105</div>
      <div room-data='106' className={`absolute top-[30.3%] left-[59.2%] w-[4.2%] h-[7.2%] responsive-room-text font-firago ${hilightedRoom === '106' ? '!bg-yellow-400 !text-black' : ''}`}>106</div>
      <div room-data='107' className={`absolute top-[17.3%] left-[63.9%] w-[11.6%] h-[19.3%] responsive-room-text font-firago ${hilightedRoom === '107' ? '!bg-yellow-400 !text-black' : ''}`}>107</div>

      <div room-data='108' className={`absolute top-[40.1%] left-[69.7%] w-[4.8%] h-[12.7%] responsive-room-text font-firago ${hilightedRoom === '108' ? '!bg-yellow-400 !text-black' : ''}`}>108</div>
      <div room-data='109' className={`absolute top-[52.9%] left-[69.7%] w-[4.8%] h-[11.5%] responsive-room-text font-firago ${hilightedRoom === '109' ? '!bg-yellow-400 !text-black' : ''}`}>109</div>
      <div room-data='112' className={`absolute top-[64.6%] left-[69.7%] w-[12.7%] h-[7.2%] responsive-room-text font-firago ${hilightedRoom === '112' ? '!bg-yellow-400 !text-black' : ''}`}>112</div>
      <div room-data='111' className={`absolute top-[64.6%] left-[82.5%] w-[4.85%] h-[7.5%] responsive-room-text font-firago ${hilightedRoom === '111' ? '!bg-yellow-400 !text-black' : ''}`}>111</div>
      <div room-data='113' className={`absolute top-[76%] left-[71.9%] w-[10.2%] h-[4.5%] responsive-room-text font-firago ${hilightedRoom === '113' ? '!bg-yellow-400 !text-black' : ''}`}>113</div>
      <div room-data='114' className={`absolute top-[76.6%] left-[61.9%] w-[2.5%] h-[7%] responsive-room-text font-firago ${hilightedRoom === '114' ? '!bg-yellow-400 !text-black' : ''}`}>114</div>

      <button 
      onClick={handleStairClick}
      room-data='s1b1' className='absolute top-[78.7%] left-[65.9%] w-[2.1%] h-[2.7%] stairs font-firago cursor-pointer z-50'></button>
    </>
  )
}

export default FirstFloorRooms