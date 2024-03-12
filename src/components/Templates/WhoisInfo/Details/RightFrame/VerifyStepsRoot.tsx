import React, { ComponentProps } from 'react'
import { StepDiagram } from '../../../../Core/StepDiagram'

const VerifyStepsRoot: React.FC<ComponentProps<'div'>> = ({children}) => {
  return (
    <div className='w-full h-14 flex flex-col justify-between items-center'>
        <div className='w-35'>
            {children?.[0]}
        </div>
        <div className='w-full text-white flex justify-between'>
            {children?.[1]}
            {children?.[2]}
        </div>
    </div>
  )
}
export default VerifyStepsRoot;