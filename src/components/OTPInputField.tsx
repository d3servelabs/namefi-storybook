import React, { useCallback, useRef, useState } from 'react'
import { cn } from '../utils/cn'

interface OTPInputFieldProps {
    fieldLength?: number
}
export const OTPInputField = ({fieldLength = 6}: OTPInputFieldProps) => {
    const [otp, setOtp] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement[]>([])

    const handleTextChange = useCallback((input:string, index: number) => {
        // const [start, ...rest] = input
        // value = start ?? ''
        const newPin = [...otp]
        newPin[index] = input
        setOtp(newPin)
        if (input && index < fieldLength - 1) {
          inputRef.current[index + 1].focus()
        //   inputRef.current[index + 1].value = otp.join()
          inputRef.current[index + 1].dispatchEvent(new Event('change'))
        }
    }, [otp])
    useCallback(() => {

    }, [])
    const handleKeyDown = useCallback((e:any, index: number) => {
        if (e.keyCode === 8 && e.target.value === '') {
          inputRef.current[index - 1].focus()
        }
    }, [otp])
  return (
    <div className='w-full flex gap-1'>
        {
            Array(fieldLength).fill(0).map((_, index) => (
                <input 
                    className={cn(' outline-none w-7 h-9 rounded-2 placeholder:text-primary-500 focus:border focus:bg-black-900 focus:border-primary-500 bg-[#313131cc] font-primary tracking-wider font-normal text-lg text-center text-primary-500 ', otp[index] && ' bg-black-900')}
                    placeholder='_'
                    type="text"
                    value={otp[index]}
                    maxLength={1}
                    onKeyDown={e =>handleKeyDown(e, index)}
                    onChange={e => handleTextChange(e.target.value, index)}
                    ref={element => inputRef.current[index] = element as HTMLInputElement}
                    key={`input-${index}`} />
            ) )
        }
    </div>
  )
}
