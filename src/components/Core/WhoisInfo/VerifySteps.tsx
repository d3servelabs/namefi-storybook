import React, { ComponentProps } from 'react'
import { StepDiagram } from '../StepDiagram'

export const VerifySteps: React.FC<ComponentProps<'div'>> = ({children}) => {
  return (
    <div className='w-full h-14 flex flex-col justify-between items-center'>
        <div className=' w-35'>
            <StepDiagram stepCount={2} currentStep={1} className='w-full' />
        </div>
        <div className=' w-full text-white flex justify-between'>
            <p>Send code</p>
            <p>Verify code</p>
        </div>
    </div>
  )
}
