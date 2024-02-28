import { CropIcon } from '@radix-ui/react-icons'
import React, { ComponentProps, useReducer } from 'react'
import { TextInput } from './TextInput'
import { Label } from './Label'
import { DivElement } from './DivElement'
import clsx from 'clsx'
import { Select } from './Select'

interface WhoisProps  {
    children: React.ReactNode
    className?: string
}

export const WhoisRoot = ({children, className, ...props}: WhoisProps) => {

  return (
    <div className={clsx('w-full py-8 flex flex-col justify-center items-center rounded-5 bg-brand-black rounded-2xl')} {...props} >
        <form 
            action=''
            onSubmit={() => alert('hello')}
            className={clsx('w-[493px] h-full flex flex-col items-end gap-4 text-sm text-white font-normal tracking-wider', className)}> 
            {children}
        </form>
    </div>
  )
}

export const WhoisInput: React.FC<ComponentProps<typeof TextInput>> = (props) => {
    return <TextInput {...props}/>
}

export const WhoisLabel: React.FC<ComponentProps<typeof Label>> = ({children, ...props}) => {
    return <Label {...props}>{children}</Label>
}

export const WhoisSelect: React.FC<ComponentProps<typeof Select>> = ({ ...props}) => {
    return <Select {...props} />
}

export const WhoisDiv: React.FC<ComponentProps<'div'>> = ({ children,...props}) => {
    return <div {...props}>{children}</div>
}

export const WhoisForm = {
    Root: WhoisRoot,
    Input: WhoisInput,
    Label: WhoisLabel,
    Select: WhoisSelect,
    Div: WhoisDiv
}