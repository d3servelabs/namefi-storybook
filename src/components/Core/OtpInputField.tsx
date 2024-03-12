import React, { useMemo, useState } from 'react'
import { cn } from '../../utils/cn'

interface OTPInputFieldProps {
    fieldLength: number
    onValueChange: (value: string) => void;
    otpValue: string
}

export const OtpInputField = ({fieldLength, otpValue, onValueChange, ...props}: OTPInputFieldProps) => {

    const REGEX_DIGIT = /^\d+$/

    const otpArray = useMemo(() => {
      const valueArray = otpValue.split('')
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
    }, [otpValue, fieldLength])


    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {

        const target = e.target;
        let value = target.value;
        const isValue = REGEX_DIGIT.test(value)
        if (!isValue && value !== '') {
          return;
        }

        value = isValue ? value : ''

        const newValue = otpValue.substring(0, index) + value + otpValue.substring(index + 1)
        onValueChange(newValue)

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
    <div className='w-full flex gap-1'>
        {
            otpArray.map((digit, index) => (
                <input 
                    className={cn(' outline-none w-7 h-9 rounded-2 placeholder:text-primary-500 focus:border focus:bg-black-900 focus:border-primary-500 bg-[#313131cc] font-primary tracking-wider font-normal text-lg text-center text-primary-500 ', otpArray[index] && ' bg-black-900' )}
                    placeholder='_'
                    type="text"
                    inputMode='numeric'
                    value={digit}
                    pattern='\d{1}'
                    maxLength={fieldLength}
                    onKeyDown={evt => onKeyDown(evt)}
                    onChange={evt => onInputChange(evt, index)}
                    key={`input-${index}`} 
                    {...props}
                    />
            ) )
        }
    </div>
  )
}
