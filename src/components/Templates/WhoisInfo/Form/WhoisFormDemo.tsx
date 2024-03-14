import { ArrowLeftIcon } from '@radix-ui/react-icons';
import React from 'react';
import WhoisForm from '.';
import Form from '../../../Core/Form';
import { StatusChip } from '../../../Core';
import FormControl from '../../../Core/Form/FormControl';

export const WhoisFormDemo = () => {
	return (
		<div className="w-[613px] h-auto py-7 rounded-5 bg-[#232C27] flex flex-col justify-center items-center ">
			<div className="w-[544px]  flex flex-col gap-2 items-center">
				<div className="w-full h-[65px] flex flex-col justify-center gap-2 ">
					<ArrowLeftIcon stroke="#48E59B" width={27} height={27} />
					<h2 className="text-white font-semibold text-lg tracking-wider">WHOIS Info</h2>
				</div>
				<WhoisForm.Root>
					<div className="flex justify-between w-full">
						<div className="flex w-[231px] justify-between">
							<Form.InputLabel
								className="w-[76px] justify-end pb-4"
								labelName="First Name"
							/>
							<FormControl.Root helperText={' '} error={'invalid value'}>
								<Form.TextInput
									className="w-[145px]"
									type="text"
									placeholder="Vitalik"
								/>
							</FormControl.Root>
						</div>
						<div className="flex w-[231px] justify-between">
							<Form.InputLabel
								className="w-[76px] justify-end pb-4"
								labelName="Last Name"
							/>
							<FormControl.Root helperText={' '} error={'invalid value'}>
								<Form.TextInput
									className="w-[145px]"
									type="text"
									placeholder="Buterin"
								/>
							</FormControl.Root>
						</div>
					</div>

					<div className="w-full flex justify-start items-center gap-4">
						<Form.InputLabel className={'w-[76px] justify-end'} labelName="Email" />
						<FormControl.Root helperText={' '} error={'invalid value'}>
							<Form.TextInput
								className="w-[280px]"
								type="email"
								placeholder="vitalik.buterin@gmail.com"
							/>
						</FormControl.Root>
						<div className={'w-auto'}></div>
					</div>
					<div className="w-full flex justify-start gap-4">
						<Form.InputLabel className={'w-[76px] justify-end'} labelName="Phone" />
						<div className="flex justify-start gap-2">
							<Form.Select className={'min-w-[90px]'}>
								<Form.Select.Option value={0}>Test</Form.Select.Option>
								<Form.Select.Option value={1}>Test</Form.Select.Option>
								<Form.Select.Option value={2}>Test</Form.Select.Option>
							</Form.Select>

							<Form.TextInput
								className="w-[182px]"
								type="tel"
								placeholder="(0) xxx-xxx-xxx"
							/>
						</div>
					</div>
					{/*<div className='w-full justify-end flex gap-8'>*/}
					{/*    <Form.InputLabel className=' gap-3' labelName='Street'>*/}
					{/*        <Form.TextInput className='w-[235px]' type='text' placeholder='Street' />*/}
					{/*    </Form.InputLabel>*/}
					{/*    <Form.InputLabel className=' gap-3' labelName='Number'>*/}
					{/*        <Form.TextInput className='w-[75px]' type='text' placeholder='xx' />*/}
					{/*    </Form.InputLabel>*/}
					{/*</div>*/}

					<div className="w-full  justify-start flex gap-4">
						<Form.InputLabel className={'w-[76px] justify-end'} labelName="City" />
						<Form.TextInput className="w-[152px]" type="text" placeholder="City" />

						<Form.InputLabel className=" gap-3" labelName="Province/State" />
						<Form.TextInput className="w-[112px]" type="text" placeholder="State" />
					</div>
					<div className="w-full  justify-between flex ">
						<div className={'flex justify-start gap-4'}>
							<Form.InputLabel
								className={'w-[76px] justify-end'}
								labelName="Postcode"
							/>
							<Form.TextInput
								className="w-[100px]"
								type="text"
								placeholder="xxxx xx"
							/>
						</div>
						<Form.InputLabel className="gap-4" labelName="Country">
							<Form.TextInput
								className="w-[159px]"
								type="text"
								placeholder="Country"
							/>
						</Form.InputLabel>
					</div>
				</WhoisForm.Root>
			</div>
		</div>
	);
};
