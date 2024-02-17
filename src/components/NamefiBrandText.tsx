import React from 'react'

export type NamefiBrandTextProps = {
    text: string;
    color: string;
    fontSize: string;
}
export const NamefiBrandText = ({text, color, fontSize}) => {
  return (
    <span className='font-["Zilla_Slab_Highlight"] text-2xl font-bold tracking-[0.1em] '
    style={{
        color,
        fontSize
    }}>
        {text}
    </span>
  )
}
