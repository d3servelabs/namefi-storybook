import React, { useRef, useState } from 'react'

export type InputComponentProps = {
    incorrectAuthCode?: boolean
    onClick: () => any;
    onSearchClicked?: () => any;
    searchValue: string;
    onSearchValueClicked?: (value: string) => any
    status: 'SUBMITTED' | 'NOTSUBMITTED'
}

export const CodeInputField = ({status, incorrectAuthCode, searchValue, onClick, onSearchClicked, onSearchValueClicked}: InputComponentProps) => {

    const [isVisible, setIsVisible] = useState(false)
    // const [passwordValue, setPasswordValue] = useState('')

    const passswordRef = useRef<HTMLInputElement>(null!)

    function checkPassword() {
        if (passswordRef.current.type === 'password') {
            passswordRef.current.type = 'text'
        } else{
            passswordRef.current.type = 'password'
        }
        setIsVisible(!isVisible)
    }

  return (
    <form className='relative w-[300px] max-h-[75px] flex flex-col justify-between '>
        <label className='relative block w-full h-[55px] rounded-[10px] px-[10px] bg-[#313131]'
            style={{
                backgroundColor: status === 'SUBMITTED' && incorrectAuthCode ? '#ff3c3c33' : ''
            }}
            onSubmit={onSearchClicked}
        >
            <input 
                ref={passswordRef} 
                value={searchValue}
                onChange={(evt) => onSearchValueClicked?.(evt.target.value)}
                type={"password"} 
                className='w-[80%] h-full outline-0 bg-transparent text-[15px] font-["Roboto_Mono"] font-medium tracking-[0.02em] text-white' 
                placeholder='Paste code here'  
            />
        </label>
        {
           status === 'SUBMITTED' ? (
                <button onClick={onClick} className='absolute right-5 top-[17px] ' type='button'>
                    <img src={incorrectAuthCode ? "/assets/Clipboard-Paste.svg" : "/assets/Done.svg"} alt="Clipboard-Paste image" role='img' />
                </button>           ) : (
                searchValue.trim().length > 0 ? <>
                    <button onClick={checkPassword} className='absolute right-5 top-[17px] ' type='button'>
                        <img src={isVisible ? "/assets/eye-open.svg" : '/assets/Eye-None.svg'} alt="eyen image" role='img' />
                    </button> 
                    </> :
                    <>
                        <button onClick={onClick} className='absolute right-5 top-[17px] ' type='button'>
                            <img src="/assets/Clipboard-Paste.svg"  alt="Clipboard-Paste image" role='img' />
                        </button>
                    </>
           )
            
        }
        <p className='text-xs font-normal font-["Roboto_Mono"] '>
            {status === 'SUBMITTED' && ( status === 'SUBMITTED' && incorrectAuthCode ? <span className='text-[#FF3C3C]'>Auth-code incorrect.</span> : 
            <span className='text-[#48E59B]'>Auth-code correct.</span>) }
        </p>
    </form>
  )
}
