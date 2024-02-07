import React from 'react'

interface HeaderSearchBarProps {
    placeholderText?: string
}
export const HeaderSearchBar = ({placeholderText}: HeaderSearchBarProps) => {
  return (
    <form className='relative w-[480px] h-[58.29px] bg-[#797979] flex rounded-[85px] overflow-hidden'>
        <label className='w-full h-full'>
            <input className='w-full h-[58.29px] bg-inherit text-lg text-[#313131] placeholder:text-[#313131] font-normal font-["Roboto_Mono"] tracking-[0.02em] px-5 border-0 outline-0 ' type="text" placeholder={placeholderText} />
        </label>
        <button className="w-[58.29px] h-[58.29px] flex justify-center items-center"><img className="w-[20.57px]" src="/assets/Shape.svg" alt="search icon" role="img" /></button>
    </form>
  )
}
