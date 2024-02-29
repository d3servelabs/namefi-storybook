import { ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'
import { WhoisForm, WhoisSelect } from './WhoisINfoForm'


export const WhoisInfo = () => {
  return (
    <div className='w-[613px] h-auto py-7 rounded-5 bg-[#232C27] flex flex-col justify-center items-center '>
        <div className='w-[544px]  flex flex-col gap-2 items-center'>
            <div className='w-full h-[65px] flex flex-col justify-center gap-2 '>
                <ArrowLeftIcon stroke='#48E59B' width={27} height={27} />
                <h2 className='text-white font-semibold text-lg tracking-wider'>WHOIS Info</h2>
            </div>
            <WhoisForm.Root >
                <WhoisForm.Div className='flex gap-6 justify-end w-full'>
                    <WhoisForm.Label className='gap-3 w-[237px]' labelName='First Name'>
                        <WhoisForm.Input className='w-[145px]' inputType='text' placeholder='Vitalik'  />
                    </WhoisForm.Label>
                    <WhoisForm.Label className='gap-3 w-[237px]' labelName='Last Name'>
                        <WhoisForm.Input className='w-[145px]' inputType='text' placeholder='Buterin' />
                    </WhoisForm.Label>
                </WhoisForm.Div>
                <WhoisForm.Div className='w-full flex justify-start pl-[35px]'>
                    <WhoisForm.Label className=' gap-3 ' labelName='Email'>
                        <WhoisForm.Input className='w-[280px]' inputType='email' placeholder='vitalik.buterin@gmail.com' />
                    </WhoisForm.Label>
                </WhoisForm.Div>
                <WhoisForm.Div className='w-full flex justify-start pl-[29px]'>
                    <WhoisForm.Label className=' gap-3' labelName='Phone'>
                        <WhoisSelect />
                        <WhoisForm.Input className='w-[182px]' inputType='number' placeholder='(0) xxx-xxx-xxx' />
                    </WhoisForm.Label>
                </WhoisForm.Div>
                <WhoisForm.Div className='w-full  justify-end flex gap-8'>
                    <WhoisForm.Label className=' gap-3' labelName='Street'>
                        <WhoisForm.Input className='w-[235px]' inputType='text' placeholder='Street' />
                    </WhoisForm.Label>
                    <WhoisForm.Label className=' gap-3' labelName='Number'>
                        <WhoisForm.Input className='w-[75px]' inputType='text' placeholder='xx' />
                    </WhoisForm.Label>
                </WhoisForm.Div>
                <WhoisForm.Div className='w-full  justify-end flex gap-9'>
                    <WhoisForm.Label className=' gap-3' labelName='City'>
                        <WhoisForm.Input className='w-[150px]' inputType='text' placeholder='City' />
                    </WhoisForm.Label>
                    <WhoisForm.Label className=' gap-3' labelName='Province/State'>
                        <WhoisForm.Input className='w-[110px]' inputType='text' placeholder='State' />
                    </WhoisForm.Label>
                </WhoisForm.Div>
                <WhoisForm.Div className='w-full  justify-end flex gap-16'>
                    <WhoisForm.Label className=' gap-3' labelName='Postcode'>
                        <WhoisForm.Input className='w-[100px]' inputType='text' placeholder='xxxx xx' />
                    </WhoisForm.Label>
                    <WhoisForm.Label className=' gap-3' labelName='Country'>
                        <WhoisForm.Input className='min-w-[159px]' inputType='text' placeholder='Country' />
                    </WhoisForm.Label>
                </WhoisForm.Div>
            </WhoisForm.Root>
        </div>
    </div>
  )
}
