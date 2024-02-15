import React, { useRef, useState } from 'react'

export type InputComponentProps = {
    backgroundColor: string;
    rightImg?: any;
    onClick: () => any;
    errorMesg?: string;
    inputType?: string;
    onSearchClicked?: () => any;
    searchValue?: string;
    onSearchValueClicked?: (value: string) => any
}

export const CodeInputField = ({ rightImg, backgroundColor, inputType, errorMesg, searchValue, onClick, onSearchClicked, onSearchValueClicked}: InputComponentProps) => {

    const [isVisible, setIsVisible] = useState(false)

    const pswdRef = useRef<HTMLInputElement>(null!)

    function checkPassword() {
        if (pswdRef.current.type === 'password') {
            pswdRef.current.type = 'text'
        } else{
            pswdRef.current.type = 'password'
        }
        setIsVisible(!isVisible)
    }

  return (
    <form className='relative w-[300px] max-h-[75px] '>
        <label className='relative block w-full h-[55px] rounded-[10px] px-[10px] bg-[#313131]'
            style={{
                backgroundColor
            }}
            onSubmit={onSearchClicked}
        >
            <input 
                ref={pswdRef} 
                value={searchValue}
                onChange={(evt) => onSearchValueClicked?.(evt.target.value)}
                type={inputType ? inputType : "password"} 
                className='w-[80%] h-full outline-0 bg-inherit text-[15px] font-["Roboto_Mono"] font-medium tracking-[0.02em] text-white' 
                placeholder='****************'  
            />
        </label>
        <button onClick={onClick} className='absolute right-5 top-[17px] ' type='button'>
            {rightImg ? rightImg : <img src="/assets/Eye.svg" alt="Eye image" role='img' />}
        </button>
        <p>{errorMesg}</p>
    </form>
  )
}
