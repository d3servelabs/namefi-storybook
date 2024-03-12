import { ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'
import WhoisForm from '.';
import Form from '../../../Core/Form';
import {StatusChip} from "../../../Core";


export const WhoisFormDemo = () => {
  return (
    <div className='w-[613px] h-auto py-7 rounded-5 bg-[#232C27] flex flex-col justify-center items-center '>
        <div className='w-[544px]  flex flex-col gap-2 items-center'>
            <div className='w-full h-[65px] flex flex-col justify-center gap-2 '>
                <ArrowLeftIcon stroke='#48E59B' width={27} height={27} />
                <h2 className='text-white font-semibold text-lg tracking-wider'>WHOIS Info</h2>
            </div>
            <WhoisForm.Root >
                <div className='flex gap-6 justify-end w-full'>
                    <Form.InputLabel className='gap-3 w-[237px]' labelName='First Name'>
                        <Form.TextInput className='w-[145px]' type='text' placeholder='Vitalik' error={true}  />
                    </Form.InputLabel>
                    <Form.InputLabel className='gap-3 w-[237px]' labelName='Last Name'>
                        <Form.TextInput className='w-[145px]' type='text' placeholder='Buterin' />
                    </Form.InputLabel>
                </div>
                <div className='w-full flex justify-start pl-[35px] items-center gap-3'>
                    <Form.InputLabel className='gap-3' labelName='Email'>
                        <Form.TextInput className='w-[280px]' type='email' placeholder='vitalik.buterin@gmail.com' />
                    </Form.InputLabel>

                </div>
                <div className='w-full flex justify-start pl-[29px] gap-3'>
                    <Form.InputLabel className='gap-3' labelName='Phone'>
                        <Form.Select className={'min-w-[90px]'} >
                            <Form.Select.Option value={0}>
                                Test
                            </Form.Select.Option>
                            <Form.Select.Option value={1}>
                                Test
                            </Form.Select.Option>
                            <Form.Select.Option value={2}>
                                Test
                            </Form.Select.Option>
                        </Form.Select>
                    </Form.InputLabel>
                    <Form.TextInput className='w-[182px]' type='tel' placeholder='(0) xxx-xxx-xxx' />
                </div>
                {/*<div className='w-full justify-end flex gap-8'>*/}
                {/*    <Form.InputLabel className=' gap-3' labelName='Street'>*/}
                {/*        <Form.TextInput className='w-[235px]' type='text' placeholder='Street' />*/}
                {/*    </Form.InputLabel>*/}
                {/*    <Form.InputLabel className=' gap-3' labelName='Number'>*/}
                {/*        <Form.TextInput className='w-[75px]' type='text' placeholder='xx' />*/}
                {/*    </Form.InputLabel>*/}
                {/*</div>*/}
                <div className='w-full  justify-end flex gap-9'>
                    <Form.InputLabel className=' gap-3' labelName='City'>
                        <Form.TextInput className='w-[150px]' type='text' placeholder='City' />
                    </Form.InputLabel>
                    <Form.InputLabel className=' gap-3' labelName='Province/State'>
                        <Form.TextInput className='w-[110px]' type='text' placeholder='State' />
                    </Form.InputLabel>
                </div>
                <div className='w-full  justify-end flex gap-19'>
                    <Form.InputLabel className='gap-3' labelName='Postcode'>
                        <Form.TextInput className='w-[100px]' type='text' placeholder='xxxx xx' />
                    </Form.InputLabel>
                    <Form.InputLabel className=' gap-3' labelName='Country'>
                        <Form.TextInput className='min-w-[159px]' type='text' placeholder='Country' />
                    </Form.InputLabel>
                </div>
            </WhoisForm.Root>
        </div>
    </div>
  )
}
