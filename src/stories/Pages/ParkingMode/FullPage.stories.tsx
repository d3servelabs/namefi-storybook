import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { useState, useCallback, useRef } from 'react';
import { SolidButton } from '../../../components/Core/Buttons/SolidButton';
import { NameDisplay } from '../../../pages/ParkingMode/NameDisplay';
import { ValueStatistic, ScoreStatistic } from '../../../pages/ParkingMode/Statistic';
import { NamePotential } from '../../../pages/ParkingMode/NamePotential';
import { ParkingModeFooter } from '../../../pages/ParkingMode/ParkingModeFooter';
import { ScrollDownTip } from '../../../pages/ParkingMode/ScrollDownTip';
import { TLDChip } from '../../../pages/ParkingMode/TLDChip';
import { ParkingPagePreview } from '../../../pages/ParkingMode/ParkingPagePreview';
import { ParkingModeHeader } from '../../../pages/ParkingMode/ParkingModeHeader';

const ParkingMode = () => {
	const [domain, setDomain] = useState('');
	const previewRef = useRef<HTMLDivElement>(null);
	const handleGeneratePreview = useCallback(() => {
		setDomain('namefi.com');	
		previewRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [])
	return (
		<div className={'w-full bg-[#1A1A1A]'}>
			<div className="max-w-[1488px] mx-auto min-h-screen pb-4 flex flex-col justify-around">
				<ParkingModeHeader />
				<div className="flex-1 flex flex-col">
					<div className="flex-1 flex justify-center items-center py-30">
						<NameDisplay
							name="example.com"
							owner="0x872742426c502131B5C13015DEaE0B1BEC895315"
							status="for-bid"
						/>
					</div>
					<div className="flex flex-wrap md:flex-row flex-col md:mb-24 mb-8 md:px-12 px-2.5 md:gap-6 gap-0 justify-around items-center">
						<div className="flex flex-wrap md:gap-12 gap-4 md:mr-12 mr-0 md:mb-0 mb-6 justify-center items-center">
							<ValueStatistic
								title="Estimated Value"
								tip="some tips"
								value={20000}
								unit="$NFSC"
								description="≈$20,000.00"
							/>
							<ScoreStatistic
								title="Name Score"
								tip="some tips"
								score={87}
								description={<div className="flex justify-end">by XXXXXX</div>}
							/>
						</div>
						<div className="flex flex-col justify-center items-center w-full px-6 md:w-auto md:px-0">
								<SolidButton className="font-primary text-sm whitespace-nowrap text-[10px] md:text-base">
									Make an Offer{' '}
									<img src="/assets/arrow-right2.svg" className="w-[1em]" />
								</SolidButton>
							<p className="mt-1.5 block md:hidden text-brand-300 text-center text-[8px]">
								Trading on mobile will be supported soon!
							</p>
						</div>
					</div>
					<div className="flex flex-wrap justify-around items-center gap-6 px-6 mb-16">
						<div className="text-white text-[10px] md:text-lg font-medium">
							Explore Namefi also in
						</div>
						<div className="flex flex-wrap justify-center gap-3">
							<TLDChip>.namefi</TLDChip>
							<TLDChip>.eth</TLDChip>
							<TLDChip>.org</TLDChip>
							<TLDChip>.co</TLDChip>
							<TLDChip>.xyz</TLDChip>
							<TLDChip>.net</TLDChip>
						</div>
					</div>
				</div>
				<ScrollDownTip className="hidden md:block">Show me the potential</ScrollDownTip>
			</div>
			<div className="max-w-[1488px] mx-auto px-0 md:px-8 mb-0 md:mb-9">
				<div className="border-none md:border-t border-[#444] pt-11">
					<NamePotential
						name="example.com"
						description={`The name **"Namefi"** signifies the _act of naming something_, with the idea that it becomes just as _essential, connecting people_ and contributing to a better _future_ for the internet.`}
						preview={ domain && <ParkingPagePreview domain={domain} />}
						previewRef={previewRef}
						className="max-w-[1280px]">
						<SolidButton className="font-primary text-[10px] md:text-base" onClick={handleGeneratePreview}>
							Generate{' '}
							<img src="/assets/arrow-right2.svg" alt="arrow" className="w-[1em]" />
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
