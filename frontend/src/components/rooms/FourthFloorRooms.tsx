import React from 'react'

interface FourthFloorRoomsProps { hilightedRoom?: string | null; }

const FourthFloorRooms: React.FC<FourthFloorRoomsProps> = ({ hilightedRoom }) => {
  return (
    <>
      <div room-data='412' className={`absolute top-[1%] left-[4.9%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '412' ? 'bg-yellow-400 text-black' : ''}`}>412</div>
      <div room-data='413' className={`absolute top-[1%] left-[7.8%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '413' ? 'bg-yellow-400 text-black' : ''}`}>413</div>
      <div room-data='414' className={`absolute top-[1%] left-[10.8%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '414' ? 'bg-yellow-400 text-black' : ''}`}>414</div>
      <div room-data='415' className={`absolute top-[1%] left-[13.75%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '415' ? 'bg-yellow-400 text-black' : ''}`}>415</div>
      <div room-data='416' className={`absolute top-[1%] left-[16.8%] w-[2.7%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '416' ? 'bg-yellow-400 text-black' : ''}`}>416</div>
      <div room-data='417' className={`absolute top-[1%] left-[19.6%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '417' ? 'bg-yellow-400 text-black' : ''}`}>417</div>
      <div room-data='418' className={`absolute top-[1%] left-[22.6%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '418' ? 'bg-yellow-400 text-black' : ''}`}>418</div>
      <div room-data='419' className={`absolute top-[1%] left-[25.5%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '419' ? 'bg-yellow-400 text-black' : ''}`}>419</div>
      <div room-data='420' className={`absolute top-[1%] left-[28.4%] w-[1.5%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '420' ? 'bg-yellow-400 text-black' : ''}`}>420</div>
      <div room-data='421' className={`absolute top-[1%] left-[29.95%] w-[5.6%] h-[9.9%] responsive-room-text font-firago ${hilightedRoom === '421' ? 'bg-yellow-400 text-black' : ''}`}>421</div>
      <div room-data='422' className={`absolute top-[1%] left-[35.65%] w-[1.4%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '422' ? 'bg-yellow-400 text-black' : ''}`}>422</div>
      <div room-data='423' className={`absolute top-[1%] left-[37.2%] w-[2.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '423' ? 'bg-yellow-400 text-black' : ''}`}>423</div>
      <div room-data='424' className={`absolute top-[1%] left-[40.1%] w-[2.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '424' ? 'bg-yellow-400 text-black' : ''}`}>424</div>
      <div room-data='425' className={`absolute top-[1%] left-[43%] w-[8.7%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '425' ? 'bg-yellow-400 text-black' : ''}`}>425</div>
      <div room-data='427' className={`absolute top-[1%] left-[51.8%] w-[4.3%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '427' ? 'bg-yellow-400 text-black' : ''}`}>427</div>
      <div room-data='428' className={`absolute top-[1%] left-[56.2%] w-[5.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '428' ? 'bg-yellow-400 text-black' : ''}`}>428</div>

      <div room-data='411' className={`absolute top-[17%] left-[7.9%] w-[2.9%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '411' ? 'bg-yellow-400 text-black' : ''}`}>411</div>
      <div room-data='410' className={`absolute top-[17%] left-[10.9%] w-[2.85%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '410' ? 'bg-yellow-400 text-black' : ''}`}>410</div>
      <div room-data='409' className={`absolute top-[17%] left-[13.9%] w-[2.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '409' ? 'bg-yellow-400 text-black' : ''}`}>409</div>
      <div room-data='408' className={`absolute top-[17%] left-[16.8%] w-[2.7%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '408' ? 'bg-yellow-400 text-black' : ''}`}>408</div>
      <div room-data='407' className={`absolute top-[17%] left-[19.6%] w-[2.9%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '407' ? 'bg-yellow-400 text-black' : ''}`}>407</div>
      <div room-data='406' className={`absolute top-[17%] left-[22.6%] w-[1.4%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '406' ? 'bg-yellow-400 text-black' : ''}`}>406</div>
      <div room-data='405' className={`absolute top-[17%] left-[28.5%] w-[1.4%] h-[10.5%] responsive-room-text font-firago ${hilightedRoom === '405' ? 'bg-yellow-400 text-black' : ''}`}>405</div>
      <div room-data='475' className={`absolute top-[17.9%] left-[35.7%] w-[1.4%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '475' ? 'bg-yellow-400 text-black' : ''}`}>475</div>
      <div room-data='476' className={`absolute top-[17.9%] left-[37.2%] w-[2.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '476' ? 'bg-yellow-400 text-black' : ''}`}>476</div>
      <div room-data='477' className={`absolute top-[17.9%] left-[40.1%] w-[2.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '477' ? 'bg-yellow-400 text-black' : ''}`}>477</div>
      <div room-data='478' className={`absolute top-[17.9%] left-[43%] w-[1.4%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '478' ? 'bg-yellow-400 text-black' : ''}`}>478</div>
      <div room-data='479' className={`absolute top-[17.9%] left-[44.5%] w-[1.4%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '479' ? 'bg-yellow-400 text-black' : ''}`}>479</div>
      <div room-data='480' className={`absolute top-[17.9%] left-[46%] w-[4.3%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '480' ? 'bg-yellow-400 text-black' : ''}`}>480</div>
      <div room-data='481' className={`absolute top-[17.9%] left-[50.4%] w-[4.3%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '481' ? 'bg-yellow-400 text-black' : ''}`}>481</div>
      <div room-data='482' className={`absolute top-[17.9%] left-[54.8%] w-[2.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '482' ? 'bg-yellow-400 text-black' : ''}`}>482</div>
      <div room-data='483' className={`absolute top-[17.9%] left-[57.7%] w-[2.8%] h-[9.5%] responsive-room-text font-firago ${hilightedRoom === '483' ? 'bg-yellow-400 text-black' : ''}`}>483</div>

      <div room-data='404' className={`absolute top-[26.8%] left-[30.6%] w-[2.6%] h-[5.5%] responsive-room-text font-firago ${hilightedRoom === '404' ? 'bg-yellow-400 text-black' : ''}`}>404</div>
      <div room-data='403' className={`absolute top-[32.5%] left-[30.6%] w-[2.6%] h-[10.5%] responsive-room-text font-firago ${hilightedRoom === '403' ? 'bg-yellow-400 text-black' : ''}`}>403</div>
      <div room-data='402' className={`absolute top-[43.5%] left-[30.6%] w-[2.6%] h-[10.5%] responsive-room-text font-firago ${hilightedRoom === '402' ? 'bg-yellow-400 text-black' : ''}`}>402</div>
      <div room-data='401' className={`absolute top-[54.4%] left-[30.6%] w-[2.6%] h-[16.5%] responsive-room-text font-firago ${hilightedRoom === '401' ? 'bg-yellow-400 text-black' : ''}`}>401</div>
      <div room-data='430' className={`absolute top-[27%] left-[64.6%] w-[2.5%] h-[11%] responsive-room-text font-firago ${hilightedRoom === '430' ? 'bg-yellow-400 text-black' : ''}`}>430</div>
      <div room-data='431' className={`absolute top-[38.2%] left-[64.6%] w-[2.5%] h-[11%] responsive-room-text font-firago ${hilightedRoom === '431' ? 'bg-yellow-400 text-black' : ''}`}>431</div>
      <div room-data='432' className={`absolute top-[49.4%] left-[64.6%] w-[2.5%] h-[10.5%] responsive-room-text font-firago ${hilightedRoom === '432' ? 'bg-yellow-400 text-black' : ''}`}>432</div>
      <div room-data='433' className={`absolute top-[60.3%] left-[64.6%] w-[2.5%] h-[10.5%] responsive-room-text font-firago ${hilightedRoom === '433' ? 'bg-yellow-400 text-black' : ''}`}>433</div>

      <div room-data='474' className={`absolute top-[88%] left-[16%] w-[3.6%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '474' ? 'bg-yellow-400 text-black' : ''}`}>474</div>
      <div room-data='473' className={`absolute top-[88%] left-[19.8%] w-[1.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '473' ? 'bg-yellow-400 text-black' : ''}`}>473</div>
      <div room-data='472' className={`absolute top-[88%] left-[21.2%] w-[1.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '472' ? 'bg-yellow-400 text-black' : ''}`}>472</div>
      <div room-data='471' className={`absolute top-[88%] left-[22.6%] w-[2.8%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '471' ? 'bg-yellow-400 text-black' : ''}`}>471</div>
      <div room-data='470' className={`absolute top-[88%] left-[25.5%] w-[1.4%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '470' ? 'bg-yellow-400 text-black' : ''}`}>470</div>
      <div room-data='469' className={`absolute top-[88%] left-[27.1%] w-[1.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '469' ? 'bg-yellow-400 text-black' : ''}`}>469</div>
      <div room-data='468' className={`absolute top-[88%] left-[28.4%] w-[1.4%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '468' ? 'bg-yellow-400 text-black' : ''}`}>468</div>
      <div room-data='466a' className={`absolute top-[87.5%] left-[30.1%] w-[5.6%] h-[10.5%] responsive-room-text font-firago ${hilightedRoom === '466a' ? 'bg-yellow-400 text-black' : ''}`}>466a</div>
      <div room-data='466' className={`absolute top-[88%] left-[35.9%] w-[4.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '466' ? 'bg-yellow-400 text-black' : ''}`}>466</div>
      <div room-data='465' className={`absolute top-[88%] left-[40.3%] w-[1.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '465' ? 'bg-yellow-400 text-black' : ''}`}>465</div>
      <div room-data='464' className={`absolute top-[88%] left-[41.7%] w-[1.4%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '464' ? 'bg-yellow-400 text-black' : ''}`}>464</div>
      <div room-data='463' className={`absolute top-[88%] left-[43.2%] w-[5.8%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '463' ? 'bg-yellow-400 text-black' : ''}`}>463</div>
      <div room-data='462' className={`absolute top-[88%] left-[49.1%] w-[1.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '462' ? 'bg-yellow-400 text-black' : ''}`}>462</div>
      <div room-data='461' className={`absolute top-[88%] left-[50.5%] w-[5.7%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '461' ? 'bg-yellow-400 text-black' : ''}`}>461</div>
      <div room-data='460' className={`absolute top-[88%] left-[56.5%] w-[5.6%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '460' ? 'bg-yellow-400 text-black' : ''}`}>460</div>
      <div room-data='459' className={`absolute top-[87.7%] left-[62.3%] w-[2.7%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '459' ? 'bg-yellow-400 text-black' : ''}`}>459</div>
      <div room-data='458' className={`absolute top-[87.7%] left-[65.1%] w-[2.8%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '458' ? 'bg-yellow-400 text-black' : ''}`}>458</div>
      <div room-data='456' className={`absolute top-[88%] left-[68%] w-[1.5%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '456' ? 'bg-yellow-400 text-black' : ''}`}>456</div>
      <div room-data='455' className={`absolute top-[88%] left-[69.6%] w-[1.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '455' ? 'bg-yellow-400 text-black' : ''}`}>455</div>
      <div room-data='454' className={`absolute top-[88%] left-[75.4%] w-[2.8%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '454' ? 'bg-yellow-400 text-black' : ''}`}>454</div>
      <div room-data='454a' className={`absolute top-[88%] left-[78.3%] w-[2.8%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '454a' ? 'bg-yellow-400 text-black' : ''}`}>454a</div>
      <div room-data='451' className={`absolute top-[88%] left-[81.2%] w-[2.8%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '451' ? 'bg-yellow-400 text-black' : ''}`}>451</div>
      <div room-data='450' className={`absolute top-[88%] left-[84.1%] w-[1.3%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '450' ? 'bg-yellow-400 text-black' : ''}`}>450</div>
      <div room-data='449' className={`absolute top-[88%] left-[85.5%] w-[1.4%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '449' ? 'bg-yellow-400 text-black' : ''}`}>449</div>
      <div room-data='448' className={`absolute top-[88%] left-[87%] w-[2.8%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '448' ? 'bg-yellow-400 text-black' : ''}`}>448</div>
      <div room-data='445' className={`absolute top-[88%] left-[89.9%] w-[2.9%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '445' ? 'bg-yellow-400 text-black' : ''}`}>445</div>
      <div room-data='444' className={`absolute top-[88%] left-[92.9%] w-[2.9%] h-[10%] responsive-room-text font-firago ${hilightedRoom === '444' ? 'bg-yellow-400 text-black' : ''}`}>444</div>

      <div room-data='492' className={`absolute top-[71.5%] left-[35.8%] w-[1.4%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '492' ? 'bg-yellow-400 text-black' : ''}`}>492</div>
      <div room-data='491' className={`absolute top-[71.5%] left-[37.3%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '491' ? 'bg-yellow-400 text-black' : ''}`}>491</div>
      <div room-data='490' className={`absolute top-[71.5%] left-[40.3%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '490' ? 'bg-yellow-400 text-black' : ''}`}>490</div>
      <div room-data='489' className={`absolute top-[71.5%] left-[43.2%] w-[1.4%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '489' ? 'bg-yellow-400 text-black' : ''}`}>489</div>
      <div room-data='488' className={`absolute top-[71.5%] left-[44.7%] w-[1.3%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '488' ? 'bg-yellow-400 text-black' : ''}`}>488</div>
      <div room-data='487' className={`absolute top-[71.5%] left-[46.1%] w-[5.7%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '487' ? 'bg-yellow-400 text-black' : ''}`}>487</div>
      <div room-data='486' className={`absolute top-[71.5%] left-[51.9%] w-[5.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '486' ? 'bg-yellow-400 text-black' : ''}`}>486</div>
      <div room-data='484' className={`absolute top-[71.5%] left-[57.9%] w-[4.3%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '484' ? 'bg-yellow-400 text-black' : ''}`}>484</div>
      <div room-data='434' className={`absolute top-[72%] left-[68%] w-[1.3%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '434' ? 'bg-yellow-400 text-black' : ''}`}>434</div>
      <div room-data='435' className={`absolute top-[72%] left-[69.5%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '435' ? 'bg-yellow-400 text-black' : ''}`}>435</div>
      <div room-data='436' className={`absolute top-[72%] left-[72.4%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '436' ? 'bg-yellow-400 text-black' : ''}`}>436</div>
      <div room-data='437' className={`absolute top-[72%] left-[75.3%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '437' ? 'bg-yellow-400 text-black' : ''}`}>437</div>
      <div room-data='438' className={`absolute top-[72%] left-[78.2%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '438' ? 'bg-yellow-400 text-black' : ''}`}>438</div>
      <div room-data='438a' className={`absolute top-[72%] left-[81.2%] w-[2.7%] h-[9.9%] responsive-room-text font-firago ${hilightedRoom === '438a' ? 'bg-yellow-400 text-black' : ''}`}>438a</div>
      <div room-data='439' className={`absolute top-[72%] left-[84%] w-[2.8%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '439' ? 'bg-yellow-400 text-black' : ''}`}>439</div>
      <div room-data='440' className={`absolute top-[72%] left-[86.9%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '440' ? 'bg-yellow-400 text-black' : ''}`}>440</div>
      <div room-data='441' className={`absolute top-[72%] left-[89.9%] w-[2.9%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '441' ? 'bg-yellow-400 text-black' : ''}`}>441</div>
      <div room-data='442' className={`absolute top-[72%] left-[92.9%] w-[1.3%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '442' ? 'bg-yellow-400 text-black' : ''}`}>442</div>
      <div room-data='443' className={`absolute top-[72%] left-[94.3%] w-[1.3%] h-[9%] responsive-room-text font-firago ${hilightedRoom === '443' ? 'bg-yellow-400 text-black' : ''}`}>443</div>

      <div room-data='fourth_t_l' className='absolute top-[20.2%] left-[30.8%] w-[1%] h-[3%] stairs font-firago'></div>
      <div room-data='fourth_t_r' className='absolute top-[20.5%] left-[65.9%] w-[1.1%] h-[3%] stairs font-firago'></div>
      <div room-data='fourth_b_l' className='absolute top-[75%] left-[30.8%] w-[1%] h-[3%] stairs font-firago'></div>
      <div room-data='fourth_b_r' className='absolute top-[75%] left-[66%] w-[1%] h-[3.1%] stairs font-firago'></div>
    </>
  )
}

export default FourthFloorRooms