import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
import DomainSettings from '../../../../components/Templates/DomainSettings';
import YearCounter from "../../../../components/Core/YearCounter";
import {useCallback, useState} from "react";

const meta = {
	title: 'Components/DomainSettings/SettingsCard',
	component: DomainSettings.Card.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DomainSettings.Card.Root>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {
		domainName: { type: 'string' },
	} as any,
	args: {
		domainName: 'namefi.io',
	} as any,
	render: ({ domainName }: any) => {
		const [years, setYears] = useState(0)
		const [isExtending, setIsExtending] = useState(false)
		const handleExtend= useCallback(
			() => {
				setIsExtending(true)
				setTimeout(()=>{
					setIsExtending(false)
					setYears(0)
				},5000)
			},
			[],
		); 

		return (
			<DomainSettings.Card.Root>
				<DomainSettings.Card.TwoSectionLayout>
					<DomainSettings.Card.LeftSection>
						<DomainSettings.Card.Title>
							Settings
						</DomainSettings.Card.Title>

						<div className={'flex flex-col items-center mb-4'}>
							<DomainSettings.Card.Toggle className={'max-w-[18.75rem] mx-auto mb-1'}>
								AutoPark™️
							</DomainSettings.Card.Toggle>
							<DomainSettings.Card.WebView
								src={`https://${domainName}`}
								className={'mx-auto'}
							/>
							<DomainSettings.Card.WebViewCaption>
								Your domain is parked For Sale.
							</DomainSettings.Card.WebViewCaption>
						</div>

						<DomainSettings.Card.Toggle className={'max-w-[18.75rem] mx-auto mb-1'}>
							AutoENS™️
						</DomainSettings.Card.Toggle>
						<DomainSettings.Card.CopyAddress
							address={'0x1b0f291c8fFebE891886351CDfF8A304a840C8Ad'}
						/>
					</DomainSettings.Card.LeftSection>

					<DomainSettings.Card.RightSection>
						<div>
							<DomainSettings.Card.Toggle>AutoRenew™️</DomainSettings.Card.Toggle>
							<DomainSettings.Card.ExpirationDate
								date={moment(new Date()).add(1, 'year').toDate()}
							/>
							{
								!!years? <>
									<YearCounter onYearsChanged={setYears} years={years}/>

									<DomainSettings.Card.NormalButton className={'mb-12'} loading={isExtending} onClick={handleExtend}>
										Confirm Extend
									</DomainSettings.Card.NormalButton>
								</>
									:(
										<DomainSettings.Card.NormalButton className={'mb-12'} onClick={()=>setYears(1)}>
											Extend Now
										</DomainSettings.Card.NormalButton>
									)
							}


						</div>
						<DomainSettings.Card.NormalButton className={'mb-12'}>
							Manage DNS Settings
						</DomainSettings.Card.NormalButton>
						<DomainSettings.Card.DangerButton className={'mt-auto'}>
							Export Domain
						</DomainSettings.Card.DangerButton>
					</DomainSettings.Card.RightSection>
				</DomainSettings.Card.TwoSectionLayout>
			</DomainSettings.Card.Root>
		);
	},
};
