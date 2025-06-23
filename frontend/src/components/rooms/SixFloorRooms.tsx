import React from 'react'

interface SixFloorRoomsProps {  hilightedRoom?: string | null; }

const SixFloorRooms: React.FC<SixFloorRoomsProps> = ({hilightedRoom}) => {
  return (
    <>
      <div room-data='619' className={`absolute top-[21.5%] left-[44.4%] w-[4.7%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '619' ? 'bg-yellow-400 text-black' : ''}`}>619</div>
      <div room-data='618' className={`absolute top-[21.5%] left-[49.2%] w-[2.2%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '618' ? 'bg-yellow-400 text-black' : ''}`}>618</div>
      <div room-data='617' className={`absolute top-[21.5%] left-[51.5%] w-[4.6%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '617' ? 'bg-yellow-400 text-black' : ''}`}>617</div>
      <div room-data='616' className={`absolute top-[21.5%] left-[56.2%] w-[4.6%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '616' ? 'bg-yellow-400 text-black' : ''}`}>616</div>
      <div room-data='615' className={`absolute top-[21.5%] left-[61%] w-[4.6%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '615' ? 'bg-yellow-400 text-black' : ''}`}>615</div>
      <div room-data='614' className={`absolute top-[21.5%] left-[70.5%] w-[4.6%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '614' ? 'bg-yellow-400 text-black' : ''}`}>614</div>
      <div room-data='613' className={`absolute top-[21.5%] left-[75.2%] w-[4.6%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '613' ? 'bg-yellow-400 text-black' : ''}`}>613</div>
      <div room-data='612' className={`absolute top-[21.5%] left-[79.9%] w-[2.2%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '612' ? 'bg-yellow-400 text-black' : ''}`}>612</div>
      <div room-data='611' className={`absolute top-[21.5%] left-[82.2%] w-[2.2%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '611' ? 'bg-yellow-400 text-black' : ''}`}>611</div>
      <div room-data='610' className={`absolute top-[21.5%] left-[84.5%] w-[4.6%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '610' ? 'bg-yellow-400 text-black' : ''}`}>610</div>

      <div room-data='628' className={`absolute top-[55%] left-[9%] w-[6.9%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '628' ? 'bg-yellow-400 text-black' : ''}`}>628</div>
      <div room-data='627' className={`absolute top-[55%] left-[16%] w-[4.5%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '627' ? 'bg-yellow-400 text-black' : ''}`}>627</div>
      <div room-data='626' className={`absolute top-[55%] left-[20.7%] w-[2.3%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '626' ? 'bg-yellow-400 text-black' : ''}`}>626</div>
      <div room-data='625' className={`absolute top-[55%] left-[23.1%] w-[2.3%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '625' ? 'bg-yellow-400 text-black' : ''}`}>625</div>
      <div room-data='624' className={`absolute top-[55%] left-[25.5%] w-[2.3%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '624' ? 'bg-yellow-400 text-black' : ''}`}>624</div>
      <div room-data='623' className={`absolute top-[55%] left-[27.9%] w-[2.3%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '623' ? 'bg-yellow-400 text-black' : ''}`}>623</div>
      <div room-data='622' className={`absolute top-[55%] left-[30.3%] w-[2.1%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '622' ? 'bg-yellow-400 text-black' : ''}`}>622</div>
      <div room-data='621' className={`absolute top-[55%] left-[32.5%] w-[2.3%] h-[18.5%] responsive-room-text font-firago ${hilightedRoom === '621' ? 'bg-yellow-400 text-black' : ''}`}>621</div>
      <div room-data='620' className={`absolute top-[54.5%] left-[35%] w-[7.3%] h-[20.5%] responsive-room-text font-firago ${hilightedRoom === '620' ? 'bg-yellow-400 text-black' : ''}`}>620</div>
      <div room-data='601' className={`absolute top-[54.5%] left-[47%] w-[2.3%] h-[20.5%] responsive-room-text font-firago ${hilightedRoom === '601' ? 'bg-yellow-400 text-black' : ''}`}>601</div>
      <div room-data='602' className={`absolute top-[55%] left-[56.5%] w-[4.5%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '602' ? 'bg-yellow-400 text-black' : ''}`}>602</div>
      <div room-data='603' className={`absolute top-[55%] left-[61.1%] w-[4.6%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '603' ? 'bg-yellow-400 text-black' : ''}`}>603</div>
      <div room-data='604' className={`absolute top-[55%] left-[65.8%] w-[4.6%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '604' ? 'bg-yellow-400 text-black' : ''}`}>604</div>
      <div room-data='605' className={`absolute top-[55%] left-[70.5%] w-[2.2%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '605' ? 'bg-yellow-400 text-black' : ''}`}>605</div>
      <div room-data='606' className={`absolute top-[55%] left-[72.8%] w-[2.2%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '606' ? 'bg-yellow-400 text-black' : ''}`}>606</div>
      <div room-data='607' className={`absolute top-[55%] left-[75.1%] w-[4.7%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '607' ? 'bg-yellow-400 text-black' : ''}`}>607</div>
      <div room-data='608' className={`absolute top-[55%] left-[79.9%] w-[4.5%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '608' ? 'bg-yellow-400 text-black' : ''}`}>608</div>
      <div room-data='609' className={`absolute top-[55%] left-[84.5%] w-[4.7%] h-[20%] responsive-room-text font-firago ${hilightedRoom === '609' ? 'bg-yellow-400 text-black' : ''}`}>609</div>

      <div room-data='sixth_stair' className='absolute top-[28%] left-[41.2%] w-[1.7%] h-[6.3%] stairs font-firago'></div>
    </>
  )
}

export default SixFloorRooms