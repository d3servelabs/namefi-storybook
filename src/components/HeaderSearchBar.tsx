import React from 'react'

export type HeaderSearchBarProps = {
    placeholderText?: string
    searchValue?: string,
    onSearchValueChanged?: (value:string)=>any,
    onSearchClicked?: ()=>any, 
}
export const HeaderSearchBar = ({placeholderText,onSearchClicked,searchValue,onSearchValueChanged}: HeaderSearchBarProps) => {
  return (
    <form className='relative w-[480px] h-[58.29px] bg-[#797979] flex rounded-[85px] overflow-hidden' onSubmit={onSearchClicked}>
        <label className='w-full h-full'>
            <input
                className='w-full h-[58.29px] bg-inherit text-lg text-[#313131] placeholder:text-[#313131] font-normal font-["Roboto_Mono"] tracking-[0.02em] px-5 border-0 outline-0 '
                type="text"
                placeholder={placeholderText}
                value={searchValue}
                onChange={(event)=>onSearchValueChanged?.(event.target.value)}
            />
        </label>
        <button className="w-[58.29px] h-[58.29px] flex justify-center items-center" type='submit'>
            <img className="w-[20.57px]" src="/assets/Shape.svg" alt="search icon" role="img" />
        </button>
    </form>
  )
}
