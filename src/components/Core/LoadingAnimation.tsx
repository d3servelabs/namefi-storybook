import React from 'react';

export type LoadingAnimationProps = {
	isLoading?: boolean;
};
export const LoadingAnimation = ({isLoading}: LoadingAnimationProps) => {
  return (
    <div className='relative w-full h-[3px] rounded-[3px] bg-[#48e59b33] overflow-hidden '>
        {
            isLoading ?
                <div className='w-1/2 animate-loading absolute h-full rounded-[3px] bg-[#71E0AC]'/> :
                <div className='w-full absolute h-full rounded-[3px] bg-[#71E0AC]'/>
        }

    </div>

  )
}
