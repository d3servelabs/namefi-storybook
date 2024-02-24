import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
import {
	DomainSettingsCardRoot,
	DomainSettingsCopyAddress,
	DomainSettingsDangerButton,
	DomainSettingsExpirationDate,
	DomainSettingsLeftSection,
	DomainSettingsNormalButton,
	DomainSettingsRightSection,
	DomainSettingsToggle,
	DomainSettingsWebView,
	DomainSettingsTwoSectionLayout,
	DomainSettingsWebViewCaption,
} from '@components/DomainSettings';
import DomainSettingsTitle from "@components/DomainSettings/SettingsCard/DomainSettingsTitle";
import YearCounter from "@components/YearCounter";
import {useCallback, useState} from "react";

const meta = {
	title: 'Components/DomainSettings/SettingsCard',
	component: DomainSettingsCardRoot,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DomainSettingsCardRoot>;

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
			<DomainSettingsCardRoot>
				<DomainSettingsTwoSectionLayout>
					<DomainSettingsLeftSection>
						<DomainSettingsTitle>
							Settings
						</DomainSettingsTitle>

						<div className={'flex flex-col items-center mb-4'}>
							<DomainSettingsToggle className={'max-w-[18.75rem] mx-auto mb-1'}>
								AutoPark™️
							</DomainSettingsToggle>
							<DomainSettingsWebView
								src={`https://${domainName}`}
								className={'mx-auto'}
							/>
							<DomainSettingsWebViewCaption>
								Your domain is parked For Sale.
							</DomainSettingsWebViewCaption>
						</div>

						<DomainSettingsToggle className={'max-w-[18.75rem] mx-auto mb-1'}>
							AutoENS™️
						</DomainSettingsToggle>
						<DomainSettingsCopyAddress
							address={'0x1b0f291c8fFebE891886351CDfF8A304a840C8Ad'}
						/>
					</DomainSettingsLeftSection>

					<DomainSettingsRightSection>
						<div>
							<DomainSettingsToggle>AutoRenew™️</DomainSettingsToggle>
							<DomainSettingsExpirationDate
								date={moment(new Date()).add(1, 'year').toDate()}
							/>
							{
								!!years? <>
									<YearCounter onYearsChanged={setYears} years={years}/>

									<DomainSettingsNormalButton className={'mb-12'} loading={isExtending} onClick={handleExtend}>
										Confirm Extend
									</DomainSettingsNormalButton>
								</>
									:(
										<DomainSettingsNormalButton className={'mb-12'} onClick={()=>setYears(1)}>
											Extend Now
										</DomainSettingsNormalButton>
									)
							}


						</div>
						<DomainSettingsNormalButton className={'mb-12'}>
							Manage DNS Settings
						</DomainSettingsNormalButton>
						<DomainSettingsDangerButton className={'mt-auto'}>
							Export Domain
						</DomainSettingsDangerButton>
					</DomainSettingsRightSection>
				</DomainSettingsTwoSectionLayout>
			</DomainSettingsCardRoot>
		);
	},
};
