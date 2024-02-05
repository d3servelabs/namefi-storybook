import React from 'react'
import { Ownership } from '../Ownership'

export const Home = () => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className='w-full h-[60vh] flex flex-col justify-center items-center relative'>
        <div className='h-[193px] w-[660px] flex flex-col justify-between '>
            <h2 className=' text-4xl font-normal font-["Roboto_Mono"] text-center text-[#797979]'>Import <span className='font-["Roboto_Serif"] italic font-light text-[#fdfdfd]'>any domains</span></h2>
            <div className='flex flex-col justify-between w-[660px] h-[115.14px]'>
                <form className='relative w-full flex items-center bg-white rounded-[85px] overflow-hidden'>
                    <label className='w-full h-[64.29px]'>
                        <input 
                        className='focus:border-[#48E59B] rounded-[85px] text-[#313131] focus:border-2 w-full h-full text-[21px] font-medium font-["Roboto_Mono"] tracking-[0.02em] px-5 border-0 outline-0 ' type="text" placeholder='Type in another domain' />
                    </label>
                    <button style={{
                    }} className=" absolute right-1 w-[55.29px] h-[55.29px] rounded-full flex justify-center items-center" type='submit'><img className="w-[20.57px]" src="/assets/lens.svg" alt="search icon" role="img" /></button>
                </form>
                
            </div>
        </div>
    </div>
      <Ownership />
    </section>
  )
}
