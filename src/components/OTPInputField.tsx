import React, { useCallback, useMemo, useRef, useState } from 'react'
import { cn } from '../utils/cn'

interface OTPInputFieldProps extends React.ComponentProps<'input'> {
    fieldLength?: number
}

export const OTPInputField = ({fieldLength = 7, ...props}: OTPInputFieldProps) => {
    const [otp, setOtp] = useState('')

    const REGEX_DIGIT = /^\d/

    // const inputRef = useRef<HTMLInputElement[]>([])

    const otpArray = useMemo(() => {
      const valueArray = otp.split('')
      const items: Array<string>= [];
      for (let i = 0; i < fieldLength; i++) {
        const char = valueArray[i];

        if (REGEX_DIGIT.test(char)) {
           items.push(char)
        } else {
           items.push('')
        }
        
      }
      return items
    }, [otp, fieldLength])

    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {
        // const [start, ...rest] = input
        // value = start ?? ''
        const target = e.target;
        const value = target.value;
        if (!REGEX_DIGIT.test(value)) {
          return;
        }

        const newValue = otp.substring(0, index) + value + otp.substring(index + 1)
        setOtp(newValue)

        const nextElementSibling = target.nextElementSibling as HTMLInputElement
        if (nextElementSibling) {
            nextElementSibling.focus()
            
        }
        // const newPin = [...otp]
        // newPin[index] = input
        // setOtp(newPin)
        // if (input && index < fieldLength - 1) {
          // inputRef.current[index + 1].focus()
          // // inputRef.current[index + 1].value = otp.join()
          // inputRef.current[index + 1].dispatchEvent(new Event('change'))
        // }
    }

    // const handleKeyDown = useCallback((e:any, index: number) => {
    //     if (e.keyCode === 8 && e.target.value === '') {
    //       inputRef.current[index - 1].focus()
    //     }
    // }, [otp])
  return (
    // <div className='w-full flex gap-1'>
    <>
        {
            otpArray.map((digit, index) => (
                <input 
                
                    className={cn(' outline-none w-7 h-9 rounded-2 placeholder:text-primary-500 focus:border focus:bg-black-900 focus:border-primary-500 bg-[#313131cc] font-primary tracking-wider font-normal text-lg text-center text-primary-500 ',otp[index] && ' bg-black-900' )}
                    placeholder='_'
                    type="text"
                    inputMode='numeric'
                    value={digit}
                    pattern='\d{1}'
                    maxLength={7}
                    // onKeyDown={e =>handleKeyDown(e, index)}
                    onChange={evt => onInputChange(evt, index)}
                    // ref={element => inputRef.current[index] = element as HTMLInputElement}
                    key={`input-${index}`} 
                    {...props}/>
            ) )
        }
    </>
  )
}
