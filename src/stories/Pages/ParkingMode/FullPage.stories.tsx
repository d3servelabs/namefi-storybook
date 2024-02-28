import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import {
	BaseLayoutRoot,
	BaseLayoutHeader,
	BaseLayoutBody,
} from '../../../components/Layouts/BaseLayout';
import { UserAuthStateDemo } from '../../../components/UserAuthState/UserAuthStateDemo';
import { SolidButton } from '../../../components/Buttons/SolidButton';
import { NameDisplay } from '../../../pages/ParkingMode/NameDisplay';
import { Statistic } from '../../../pages/ParkingMode/Statistic';
import { NamePotential } from '../../../pages/ParkingMode/NamePotential';
import { ParkingModeFooter } from '../../../pages/ParkingMode/ParkingModeFooter';
import { ScrollDownTip } from '../../../pages/ParkingMode/ScrollDownTip';
import { TldButtons } from '../../../components/TldButtons';

const ParkingMode = () => {
	return (
		<div className={'w-full h-full min-h-[720px]'}>
			<BaseLayoutRoot
				className="w-[1488px] min-h-[720px]"
				header={
					<div className="px-11">
						<BaseLayoutHeader endSlot={<UserAuthStateDemo />} />
					</div>
				}
				footer={<></>}>
				<BaseLayoutBody>
					<div className="mb-16">
						<div className="flex justify-center py-40">
							<NameDisplay
								name="example.com"
								owner="0x872742426c502131B5C13015DEaE0B1BEC895315"
								status="for-bid"
							/>
						</div>
						<div className="flex mb-24">
							<div className="flex px-36 gap-12">
								<Statistic
									title="Estimated Value"
									tip="some tips"
									description="≈$20,000.00">
									<div className="flex items-end gap-8">
										<span>20,000</span>
										<span className="text-xl text-[#d6d6d6]">$NFSC</span>
									</div>
								</Statistic>
								<Statistic
									title="Name Score"
									tip="some tips"
									description={<div className="flex justify-end">by XXXXXX</div>}>
									<div className="w-[280px] flex justify-center items-end">
										<span>87</span>
										<span className="text-xl text-[#d6d6d6]">/100</span>
									</div>
								</Statistic>
							</div>
							<div className="pt-10">
								<SolidButton className="font-primary text-sm">
									Make an Offer <img src="/assets/arrow-right2.svg" />
								</SolidButton>
							</div>
						</div>
						<div className="flex justify-between items-center px-36 mb-32">
							<div className="text-white text-lg font-medium">
								Explore Namefi also in
							</div>
							<div className="flex gap-3">
								<TldButtons tld=".namefi" isSelected={false} />
								<TldButtons tld=".eth" isSelected={false} />
								<TldButtons tld=".org" isSelected={false} />
								<TldButtons tld=".co" isSelected={false} />
								<TldButtons tld=".xyz" isSelected={false} />
								<TldButtons tld=".net" isSelected={false} />
							</div>
						</div>
						<ScrollDownTip>Show me the potential</ScrollDownTip>
					</div>
					<div className="px-28 mb-40">
						<div className="border-top-1 border-[#444] pt-11">
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
				</BaseLayoutBody>
			</BaseLayoutRoot>
			<ParkingModeFooter
				className="w-[1488px]"
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
