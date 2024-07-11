import React from 'react'
import { Button } from './Core/Buttons/Button'

export type TldButtonsProps = {
    tld: string
    isSelected: boolean
}
export const TldButtons = ({tld, isSelected}: TldButtonsProps) => {
  return (
    <div>
        <Button 
            borderWidth='1.5px'
            backgroundColor={isSelected? '#111' : '#1C1C1C'} 
            borderColor={isSelected? '#48E59B': '#79797980'}>{tld}</Button>
    </div>
  )
}
