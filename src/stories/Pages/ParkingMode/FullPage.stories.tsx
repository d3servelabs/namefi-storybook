import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { BaseLayoutHeader } from '../../../components/Layouts/BaseLayout';
import { UserAuthStateDemo } from '../../../components/Templates/UserAuthState/UserAuthStateDemo';
import { SolidButton } from '../../../components/Core/Buttons/SolidButton';
import { NameDisplay } from '../../../pages/ParkingMode/NameDisplay';
import { ValueStatistic, ScoreStatistic } from '../../../pages/ParkingMode/Statistic';
import { NamePotential } from '../../../pages/ParkingMode/NamePotential';
import { ParkingModeFooter } from '../../../pages/ParkingMode/ParkingModeFooter';
import { ScrollDownTip } from '../../../pages/ParkingMode/ScrollDownTip';
import { TLDChip } from '../../../pages/ParkingMode/TLDChip';

const ParkingMode = () => {
	return (
		<div className={'w-full bg-[#1A1A1A]'}>
			<div className="max-w-[1488px] mx-auto min-h-screen mb-4 flex flex-col">
				<div className="px-11">
					<BaseLayoutHeader endSlot={<UserAuthStateDemo />} />
				</div>
				<div className="flex-1 flex justify-center items-center xl:py-40 md:pt-20 md:pb-16 sm:pt-14 sm:pb-6 pt-24 pb-20">
					<NameDisplay
						name="example.com"
						owner="0x872742426c502131B5C13015DEaE0B1BEC895315"
						status="for-bid"
					/>
				</div>
				<div className="flex flex-wrap md:flex-row flex-col xl:mb-24 mb-8 xl:px-36 md:px-12 sm:px-24 px-2.5 justify-center items-center">
					<div className="flex flex-wrap xl:gap-12 md:gap-7 sm:gap-5 gap-4 md:mr-12 mr-0 md:mb-0 sm:mb-5 mb-6 justify-center items-center">
						<ValueStatistic
							title="Estimated Value"
							tip="some tips"
							value={20000}
							unit="$NFSC"
							description="≈$20,000.00" />
						<ScoreStatistic
							title="Name Score"
							tip="some tips"
							score={87}
							description={<div className="flex justify-end">by XXXXXX</div>} />
					</div>
					<div className="flex-1 flex flex-col justify-center items-center">
						<div>
							<SolidButton className="font-primary text-sm whitespace-nowrap">
								Make an Offer <img src="/assets/arrow-right2.svg" />
							</SolidButton>
						</div>
						<p className="mt-1.5 block sm:hidden text-brand-300 text-center text-[8px]">Trading on mobile will be supported soon!</p>	
					</div>
				</div>
				<div className="flex flex-wrap justify-between items-center gap-6 px-36 mb-32">
					<div className="text-white text-[10px] sm:text-[8px] md:text-[10px] xl:text-lg font-medium">Explore Namefi also in</div>
					<div className="flex flex-wrap justify-center gap-3">
						<TLDChip>.namefi</TLDChip>
						<TLDChip>.eth</TLDChip>
						<TLDChip>.org</TLDChip>
						<TLDChip>.co</TLDChip>
						<TLDChip>.xyz</TLDChip>
						<TLDChip>.net</TLDChip>
					</div>
				</div>
				<ScrollDownTip className="hidden sm:block">Show me the potential</ScrollDownTip>
			</div>
			<div className="max-w-[1488px] mx-auto px-0 mb-8 sm:px-5 sm:mb-5 md:px-8 md:mb-9 xl:px-28 xl:mb-40">
				<div className="border-none sm:border-t border-[#444] pt-11">
					<NamePotential
						name="example.com"
						description={`The name **"Namefi"** signifies the _act of naming something_, with the idea that it becomes just as _essential, connecting people_ and contributing to a better _future_ for the internet.`}
						className="max-w-[1280px]">
						<SolidButton className="font-primary">
							Generate <img src="/assets/arrow-right2.svg" alt="arrow" />
						</SolidButton>
					</NamePotential>
				</div>
			</div>
			<ParkingModeFooter
				className="w-full mx-auto"
				links={[
					{ text: 'Contact Us', href: 'https://discord.namefi.gg' },
					{ text: 'Private Terms' },
					{ text: 'Terms & Conditions' },
				]}>
				D3SERVE LABS, Inc. All Rights Reserved.
			</ParkingModeFooter>
		</div>
	);
};

const meta = {
	title: 'Pages/ParkingMode',
	component: ParkingMode,
	parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ParkingMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {};
