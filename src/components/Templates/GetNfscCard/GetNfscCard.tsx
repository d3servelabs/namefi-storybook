import React from 'react'
import { Chip } from '../../Core/Chip'
import { cn } from '../../../utils/cn';

export type GetNfscCardProps = React.ComponentProps<'div'> &
  Partial<{
    onClickChip: any,
    value: number
  }>;

let cardTitle = "Get $NFSC";

export function GetNfscCard(
  { onClickChip, value, children, className, ...props }: GetNfscCardProps) {
    let chips = [20, 50, 100].map(
      (chipValue) => (<Chip selected={value === chipValue} onSelect={() => onClickChip(chipValue)} >{chipValue}</Chip>));
  return (
    <div className={cn('flex flex-col justify-start items-center rounded-3.75 gap-3 py-9 px-11.5 bg-black-1000 w-[613px] h-[581px]', className)} {...props}>
      <div className='flex w-full h-fit justify-start items-center'>
        <h2 className='text-white'>{cardTitle}</h2>
      </div>
      <div className='flex wrap gap-3 w-full h-fit justify-start items-center'>
        {chips}
      </div>
    </div>
  )
}