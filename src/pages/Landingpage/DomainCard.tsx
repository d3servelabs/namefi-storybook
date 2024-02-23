import React, {useMemo} from 'react'
import moment from "moment";
import { NamefiBrandText } from '@components/NamefiBrandText';
// import { NamefiBrandText } from './NamefiBrandText';

export const Card1 = () => {


    return (
        <div className='relative bg-black-1000 rounded-[20px] p-6 bg-black flex flex-col justify-between items-center w-[500px] h-[500px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
            <div className='flex w-full h-[30px] items-center justify-between'>
                <p>
                    <NamefiBrandText fontSize={'24px'} color={'#3488FC'} text={'Taken'} />
                </p>
            </div>
            <h3 className='text-white font-semibold text-[28px] tracking-widest'>Vitalik.eth</h3>
            <div className='w-full h-[36px] flex justify-between '>
                <div className='w-full h-full flex justify-between '>
                    <div className='min-w-[106px] h-full'>
                        <p className='text-[#acacac] font-normal text-xs tracking-widest '>Owned by</p>
                        <p className='text-[#ededed] font-normal text-sm tracking-widest '>0x3923...d9s3</p>
                    </div>
                    <div className='w-[150px] h-full flex items-center justify-between '>
                        <img className='w-[36.75px]' src="/assets/lock.svg" alt="lock image" role='img'/>
                        <div className='w-[100px] font-secondary'>
                            <p className='text-[#acacac] text-[11px] font-extrabold tracking-widest '>Expires on</p>
                            <p className='text-[#ededed] text-sm font-extrabold tracking-widest '>Mar 01 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Card2 = () => {
    return( 
        <div className='w-[508px] h-[500px] flex justify-center items-end pb-9 drop-shadow-[0px_0px_15px_rgba(202,202,202,0.25)] '>
            <div className='relative rounded-[20px] pl-12 pr-10 py-6 flex flex-col justify-between items-end w-[508px] h-[320px] bg-black-1000  '>
                  <div className='w-full h-[70px] flex justify-between items-center  '>
                        <div className='w-[205px] h-12 flex items-center justify-between '>
                            <img className='w-12' src="/assets/maskuser.svg" alt="maskuser" />
                            <p className='font-medium text-lg font-primary text-white '>0x8312...9ds0</p>
                        </div>
                        <img className='w-[64px]' src="/assets/tokenicon.svg" alt="Token Icon" role='img' />
                  </div>
                    <div className='w-full h-[90px] '>
                        <div className='h-full w-[272px] flex justify-between items-center '>
                            <div className='w-[125px] h-full flex flex-col pt-4'>
                                <p className="text-5xl text-primary-700 tracking-wide font-normal font-primary ">987.<span className="text-[31px]">12</span></p>
                                <p className='font-primary mt-2 font-normal text-[#d6d6d6] text-base tracking-wider '>≈$987.12 </p>
                            </div>
                                <p className='font-primary font-normal text-white text-[31px] tracking-wider'>$NFSC</p>                        
                        </div>
                    </div>
                  <div className=' '>
                      <p className='font-["Roboto_Mono"] font-normal text-white text-sm tracking-wider'>Non Transferrable</p>
                  </div>
          </div>
        </div>
    )
}