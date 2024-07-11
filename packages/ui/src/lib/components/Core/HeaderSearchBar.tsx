import React, {ComponentProps} from 'react'
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {cn} from "../../utils/cn";

export type HeaderSearchBarProps = ComponentProps<'form'> &{
    placeholderText?: string
    searchValue?: string,
    onSearchValueChanged?: (value:string)=>any,
    onSearchClicked?: ()=>any,  
}
export default function HeaderSearchBar({placeholderText,onSearchClicked,searchValue,onSearchValueChanged,className}: HeaderSearchBarProps) {
  return (
    <form className={cn('relative h-15 bg-[#797979] has-[input:focus]:bg-white flex rounded-full overflow-hidden group',className)} onSubmit={onSearchClicked}>
        <label className='peer w-full h-full'>
            <input
                className='w-full h-full bg-inherit text-lg text-[#313131] placeholder:text-[#313131]/50 font-normal font-["Roboto_Mono"] tracking-[0.02em] px-5 border-0 outline-0 '
                type="text"
                placeholder={placeholderText}
                value={searchValue}
                onChange={(event)=>onSearchValueChanged?.(event.target.value)}
            />
        </label>
        <button className="text-[#313131] peer-has-[input:focus]:text-primary p-3 mr-1 my-auto rounded-full flex justify-center items-center hover:bg-primary/20 focus:bg-primary/40" type='submit'>
            <MagnifyingGlassIcon className={cn('w-7 h-7')}/>
        </button>
    </form>
  )
}
