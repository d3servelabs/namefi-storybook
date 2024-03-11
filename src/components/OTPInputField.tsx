import React, { useMemo, useState } from 'react'
import { cn } from '../utils/cn'

interface OTPInputFieldProps extends React.ComponentProps<'input'> {
    fieldLength?: number
}

export const OTPInputField = ({fieldLength = 7, ...props}: OTPInputFieldProps) => {
    const [otp, setOtp] = useState('')

    const REGEX_DIGIT = /^\d+$/

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

        const target = e.target;
        let value = target.value;
        const isValue = REGEX_DIGIT.test(value)
        if (!isValue && value !== '') {
          return;
        }

        value = isValue ? value : ''

        const newValue = otp.substring(0, index) + value + otp.substring(index + 1)
        setOtp(newValue)

        if (!isValue) {
          return
        }

        const nextElementSibling = target.nextElementSibling as HTMLInputElement
        if (nextElementSibling) {
            nextElementSibling.focus()
            
        }
    }

    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement
      const previousElementSibling = target.previousElementSibling as HTMLInputElement
        if (( e.keyCode !== 8 || e.key !== 'Backspace') || target.value !== '') {
            return
        }
        if (previousElementSibling) {
          previousElementSibling.focus()
        }
    }
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
                    maxLength={fieldLength}
                    onKeyDown={evt => onKeyDown(evt)}
                    onChange={evt => onInputChange(evt, index)}
                    key={`input-${index}`} 
                    />
            ) )
        }
    </>
  )
}
