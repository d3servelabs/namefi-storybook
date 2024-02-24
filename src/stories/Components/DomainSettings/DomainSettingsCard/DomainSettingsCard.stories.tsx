import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
import {
	DomainSettingsCopyAddress, DomainSettingsDangerButton, DomainSettingsExpirationDate,
	DomainSettingsLeftSection, DomainSettingsNormalButton,
	DomainSettingsRightSection,DomainSettingsWebView,DomainSettingsCardRoot,DomainSettingsToggle
} from "@components/DomainSettings";


const meta = {
	title: 'Components/DomainSettings/SettingsCard',
	component: DomainSettingsCardRoot,
	parameters: {
		layout: 'centered',
	},
	tags:['autodocs'],
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
		return (
			<DomainSettingsCardRoot>
				<DomainSettingsLeftSection>
					<div className="text-white text-lg font-bold font-['Roboto'] leading-loose tracking-wide mb-3">
						Settings
					</div>

					<div className={'flex flex-col items-center mb-4'}>
						<DomainSettingsToggle className={'max-w-[18.75rem] mx-auto mb-1'}>
							AutoPark™️
						</DomainSettingsToggle>
						<DomainSettingsWebView
							src={`https://${domainName}`}
							className={'mx-auto'}
						/>
						<div className="text-green-200 text-[10px] font-normal font-['Roboto'] leading-[14px] tracking-wide mt-2">
							Your domain is parked For Sale.
						</div>
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
						<DomainSettingsExpirationDate date={moment(new Date()).add(1,'year').toDate()}/>

						<DomainSettingsNormalButton className={'mb-12'}>
							Extend Now
						</DomainSettingsNormalButton>
					</div>
					<DomainSettingsNormalButton className={'mb-12'}>
						Manage DNS Settings
					</DomainSettingsNormalButton>
					<DomainSettingsDangerButton className={'mt-auto'}>
						Export Domain
					</DomainSettingsDangerButton>
				</DomainSettingsRightSection>
			</DomainSettingsCardRoot>
		);
	},
};


