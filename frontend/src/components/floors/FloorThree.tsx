import Image from 'next/image'
import React from 'react'

const FloorThree = () => {

    const roomPositions = {
        't-l-s': { top: '14.9', left: '4.8' },
        '1': { top: '14.9', left: '8.15' },
        '2': { top: '14.9', left: '15.95' },
        '3': { top: '14.9', left: '18.8' },
        '4': { top: '14.9', left: '23.7' },
        '5': { top: '14.9', left: '27.6' },
        '6': { top: '14.9', left: '31.4' },
        '7': { top: '14.9', left: '33.3' }, 
        '8': { top: '14.9', left: '40' },
        '83': { top: '14.9', left: '42.9' },
        '9': { top: '14.9', left: '46.8' },
        '10': { top: '14.9', left: '50.6' },
        '11': { top: '14.9', left: '58.3' },
        '12': { top: '14.9', left: '66' },
        '13': { top: '14.9', left: '73.8' },
        '14': { top: '14.9', left: '76.2' },
        't-r-c': { top: '14.9', left: '78.6' },
        't-r-s': { top: '22.5', left: '78.6' },
        '36': { top: '34.5', left: '78.6' },
        '37': { top: '44.5', left: '78.6' },
        '38': { top: '54.5', left: '78.6' },
        '39': { top: '64.8', left: '78.6' },
        'b-r-c-1': { top: '75', left: '78.6' },
        'b-r-c-2': { top: '79.9', left: '78.6' },
        'b-r-s': { top: '72.7', left: '78.6' },
        '48': { top: '79.9', left: '79.3' },
        '49': { top: '79.9', left: '81.5' },
        '50': { top: '79.9', left: '83.2' },
        '51': { top: '79.9', left: '85.1' },
        '52': { top: '79.9', left: '87.1' },
        '53': { top: '79.9', left: '88.5' },
        '100': { top: '79.9', left: '89.3' },
        '101': { top: '79.9', left: '93' },
        '15': { top: '14.9', left: '8.5' },
        '16': { top: '14.9', left: '12.2' },
        '17': { top: '14.9', left: '16.1' },
        '18': { top: '14.9', left: '19.9' },
        '19': { top: '14.9', left: '21.7' },
        '20': { top: '14.9', left: '25.5' },
        '21': { top: '14.9', left: '33.3' },
        '22': { top: '14.9', left: '42.9' },
        '24': { top: '14.9', left: '48.6' },
        '25': { top: '14.9', left: '52.5' },
        '26': { top: '14.9', left: '54.5' },
        '27': { top: '14.9', left: '56.3' },
        '28': { top: '14.9', left: '62.2' },
        '29': { top: '14.9', left: '67.8' },
        '30': { top: '14.9', left: '71.7' },
        't-m-c': { top: '14.9', left: '40' },
        't-m-s': { top: '22.5', left: '40' },
        '32': { top: '29.5', left: '40' },
        '33': { top: '39.5', left: '40' },
        '34': { top: '49.5', left: '40' },
        '35': { top: '64.5', left: '40' },
        'l-b-s': { top: '72.5', left: '40' },
        'l-b-c-1': { top: '75', left: '40' },
        'l-b-c-2': { top: '79.9', left: '40' },
        '45': { top: '79.9', left: '39.2' },
        '44': { top: '79.9', left: '40' },
        '43': { top: '79.9', left: '35.2' },
        '42': { top: '79.9', left: '33.3' },
        '41': { top: '79.9', left: '25.5' },
        '40': { top: '79.9', left: '25.5' },
    }

  return (
        <main className='w-full h-auto'>
                <div className='relative w-full bg-white h-full'>
                    <div className='w-full h-full overflow-hidden flex flex-col gap-0 '>
                        <Image
                        src={'/images/300 _1.png'} 
                        alt='third floor image'
                        width={4000}
                        height={4000}
                        className='object-center object-cover w-[85%] h-full mb-0'
                        />
                        <Image
                        src={'/images/300_2.png'} 
                        alt='third floor image'
                        width={4000}
                        height={4000}
                        className='object-cover w-[79%] h-full ml-[15.55%] mt-0 '
                        />
                    </div>

                    <div className='absolute top-[79.9%] left-[93%] w-[0.2%] h-[1%] bg-black responsive-room-text'>
                    </div>

                    {/*start ოთახების ნომრები */}
                    <div data-room='1' className='absolute top-[3.4%] left-[1.7%] w-[7.55%] h-[8.2%]  responsive-room-text'>
                        1
                    </div>
                    <div data-room='2' className='absolute top-[3.4%] left-[9.3%] w-[7.55%] h-[8.2%] responsive-room-text'>
                        2
                    </div>
                    <div data-room='3' className='absolute top-[3.4%] left-[17.25%] w-[3.5%] h-[8.2%]  responsive-room-text'>
                        3
                    </div>
                    <div data-room='4' className='absolute top-[3.4%] left-[21%] w-[3.8%] h-[8.5%]  responsive-room-text'>
                        4
                    </div>
                    <div data-room='5' className='absolute top-[3.4%] left-[24.9%] w-[3.65%] h-[8.5%]  responsive-room-text'>
                        5
                    </div>
                    <div data-room='6' className='absolute top-[3.4%] left-[28.65%] w-[3.65%] h-[8.5%]  responsive-room-text'>
                        6
                    </div>
                    <div data-room='7' className='absolute top-[3.4%] left-[32.4%] w-[2%] h-[8.5%]  responsive-room-text'>
                        7
                    </div>
                    <div data-room='8' className='absolute top-[3.4%] left-[34.6%] w-[7.3%] h-[8.5%]  responsive-room-text'>
                        8
                    </div>
                    <div data-room='83' className='absolute top-[3.4%] left-[42%] w-[1.95%] h-[8.6%]  responsive-room-text'>
                        83
                    </div>
                    <div data-room='9' className='absolute top-[3.4%] left-[44.05%] w-[3.7%] h-[8.6%]  responsive-room-text'>
                        9
                    </div>
                    <div data-room='10' className='absolute top-[3.4%] left-[47.95%] w-[3.7%] h-[8.6%]  responsive-room-text'>
                        10
                    </div>
                    <div data-room='11' className='absolute top-[3.4%] left-[51.75%] w-[11.4%] h-[8.6%]  responsive-room-text'>
                        11
                    </div>
                    <div data-room='12' className='absolute top-[3.4%] left-[63.2%] w-[5.75%] h-[8.6%]  responsive-room-text'>
                        12
                    </div>
                    <div data-room='13' className='absolute top-[3.4%] left-[69.1%] w-[5.65%] h-[8.6%]  responsive-room-text'>
                        13
                    </div>
                    <div data-room='14' className='absolute top-[3.4%] left-[74.8%] w-[1.9%] h-[9%]  responsive-room-text'>
                        14
                    </div>


                    <div data-room='15' className='absolute top-[18.5%] left-[5.65%] w-[3.8%] h-[8%]  responsive-room-text'>
                        15
                    </div>
                    <div data-room='16' className='absolute top-[18.5%] left-[9.5%] w-[3.75%] h-[8%]  responsive-room-text'>
                        16
                    </div>
                    <div data-room='17' className='absolute top-[18.5%] left-[13.3%] w-[3.75%] h-[8%]  responsive-room-text'>
                        17
                    </div>
                    <div data-room='18' className='absolute top-[18.5%] left-[17.2%] w-[3.75%] h-[8%]  responsive-room-text'>
                        18
                    </div>
                    <div data-room='19' className='absolute top-[18.5%] left-[21%] w-[3.75%] h-[8%]  responsive-room-text'>
                        19
                    </div>
                    <div data-room='20' className='absolute top-[18.5%] left-[24.8%] w-[2%] h-[8%]  responsive-room-text'>
                        20
                    </div>
                    <div data-room='21' className='absolute top-[18.5%] left-[32.55%] w-[1.9%] h-[8.5%]  responsive-room-text'>
                        21
                    </div>
                    <div data-room='22' className='absolute top-[19%] left-[42.1%] w-[3.8%] h-[8.9%]  responsive-room-text'>
                        22
                    </div>
                    <div data-room='23' className='absolute top-[19%] left-[46%] w-[1.9%] h-[8%]  responsive-room-text'>
                        23
                    </div>
                    <div data-room='24' className='absolute top-[19%] left-[47.9%] w-[3.8%] h-[8%]  responsive-room-text'>
                        24
                    </div>
                    <div data-room='25' className='absolute top-[19%] left-[51.8%] w-[1.8%] h-[8.4%]  responsive-room-text'>
                        25
                    </div>
                    <div data-room='26' className='absolute top-[19%] left-[53.66%] w-[1.9%] h-[8.4%]  responsive-room-text'>
                        26
                    </div>
                    <div data-room='27' className='absolute top-[19%] left-[55.6%] w-[5.7%] h-[8.4%]  responsive-room-text'>
                        27
                    </div>
                    <div data-room='28' className='absolute top-[19%] left-[61.4%] w-[5.6%] h-[8%]  responsive-room-text'>
                        28
                    </div>
                    <div data-room='29' className='absolute top-[19%] left-[67.1%] w-[3.85%] h-[8%]  responsive-room-text'>
                        29
                    </div>
                    <div data-room='30' className='absolute top-[19%] left-[71.05%] w-[3.75%] h-[8%]  responsive-room-text'>
                        30
                    </div>
                    <div className='absolute top-[24.5%] left-[74.9%] w-[1.7%] h-[2.8%]  responsive-room-text'>
                    </div>


                    <div data-room='32' className='absolute top-[27.4%] left-[35.55%] w-[3.2%] h-[4.9%]  responsive-room-text'>
                        32
                    </div>
                    <div data-room='33' className='absolute top-[32.5%] left-[35.55%] w-[3.2%] h-[10%]  responsive-room-text'>
                        33
                    </div>
                    <div data-room='34' className='absolute top-[42.6%] left-[35.55%] w-[3.2%] h-[9.6%]  responsive-room-text'>
                        34
                    </div>
                    <div data-room='35' className='absolute top-[52.5%] left-[35.55%] w-[3.2%] h-[15.3%]  responsive-room-text'>
                        35
                    </div>

                    <div data-room='36' className='absolute top-[27.4%] left-[80.1%] w-[3.3%] h-[10%]  responsive-room-text'>
                        36
                    </div>
                    <div data-room='37' className='absolute top-[37.7%] left-[80.1%] w-[3.3%] h-[10%]  responsive-room-text'>
                        37
                    </div>
                    <div data-room='38' className='absolute top-[48%] left-[80.1%] w-[3.3%] h-[9.8%]  responsive-room-text'>
                        38
                    </div>
                    <div data-room='39' className='absolute top-[58%] left-[80.1%] w-[3.3%] h-[9.8%]  responsive-room-text'>
                        39
                    </div>
                    <div data-room='100' className='absolute top-[69%] left-[84.5%] w-[5.65%] h-[8.1%]  responsive-room-text'>
                        100
                    </div>
                    <div data-room='101' className='absolute top-[69%] left-[90.3%] w-[3.7%] h-[8.1%]  responsive-room-text'>
                        101
                    </div>

                    <div data-room='40' className='absolute top-[78%] left-[17%] w-[7.7%] h-[14.4%]  responsive-room-text'>
                        40
                    </div>
                    <div data-room='41' className='absolute top-[84.1%] left-[24.75%] w-[7.6%] h-[8.5%]  responsive-room-text'>
                        41
                    </div>
                    <div data-room='42' className='absolute top-[83.8%] left-[32.5%] w-[1.8%] h-[8.5%]  responsive-room-text'>
                        42
                    </div>
                    <div data-room='43' className='absolute top-[83.05%] left-[34.5%] w-[1.7%] h-[9.2%]  responsive-room-text'>
                        43
                    </div>
                    <div data-room='44' className='absolute top-[83.05%] left-[36.3%] w-[3.7%] h-[9.2%]  responsive-room-text'>
                        44
                    </div>
                    <div data-room='45' className='absolute top-[83.05%] left-[40.1%] w-[1.95%] h-[9.2%]  responsive-room-text'>
                        45
                    </div>
                    <div className='absolute top-[83.05%] left-[42.1%] w-[1.95%] h-[9.2%]  responsive-room-text'>
                    </div>


                    <div className='absolute top-[83.05%] left-[75%] w-[1.6%] h-[9.2%]  responsive-room-text'>
                        
                    </div>
                    <div data-room='48' className='absolute top-[83.05%] left-[76.7%] w-[3.85%] h-[9.2%]  responsive-room-text'>
                        48
                    </div>
                    <div data-room='49' className='absolute top-[83.05%] left-[80.6%] w-[1.85%] h-[9.2%]  responsive-room-text'>
                        49
                    </div>
                    <div data-room='50' className='absolute top-[83.05%] left-[82.55%] w-[1.7%] h-[9.2%]  responsive-room-text'>
                        50
                    </div>
                    <div data-room='51' className='absolute top-[84%] left-[84.6%] w-[1.8%] h-[8%]  responsive-room-text'>
                        51
                    </div>
                    <div data-room='52' className='absolute top-[84%] left-[86.5%] w-[1.8%] h-[8%]  responsive-room-text'>
                        52
                    </div>
                    <div data-room='53' className='absolute top-[84%] left-[88.4%] w-[5.6%] h-[8.3%]  responsive-room-text'>
                        53
                    </div>
                    {/*end ოთახების ნომრები */}

                    {/* კიბეები */}
                    <div data-room='00' className='absolute top-[20.7%] left-[2.85%] w-[1.35%] h-[3.8%]  stairs'>
                        00
                    </div>
                    <div data-room='01' className='absolute top-[21%] left-[35.55%] w-[1.4%] h-[3.2%]  stairs'>
                        01
                    </div>
                    <div data-room='02' className='absolute top-[21.5%] left-[81.85%] w-[1.4%] h-[3%]  stairs'>
                        02
                    </div>
                    <div data-room='03' className='absolute top-[71.5%] left-[35.55%] w-[1.6%] h-[3.5%]  stairs'>
                        03
                    </div>
                    <div data-room='04' className='absolute top-[71.55%] left-[81.55%] w-[1.65%] h-[3.5%]  stairs'>
                        04
                    </div>
                    {/*end კიბეები*/}
                </div>
            </main>
      )
    }

export default FloorThree