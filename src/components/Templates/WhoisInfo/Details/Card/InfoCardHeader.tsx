import React, { ComponentProps } from 'react'


const InfoCardHeader: React.FC<ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div className=' w-full h-18 flex justify-between ' {...props}>
        <div className=' flex justify-center items-center p-0 h-full w-18 rounded-full bg-red-400 overflow-hidden'>
            {children?.[0]}
        </div>
        {children?.[1]}
    </div>
  )
}
export default InfoCardHeader;