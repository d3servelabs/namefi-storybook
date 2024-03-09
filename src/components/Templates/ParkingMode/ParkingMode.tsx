import React, { useState, useRef, useCallback } from 'react';
import { SolidButton } from '../../Core/Buttons/SolidButton';
import { NameDisplay, type NameStatus } from './components/NameDisplay';
import { ValueStatistic, ScoreStatistic } from './components/Statistic';
import { NamePotential } from './components/NamePotential';
import { ParkingModeHeader, type UserAuthStateProps } from './components/ParkingModeHeader';
import { ParkingModeFooter, type ParkingModeFooterLink } from './components/ParkingModeFooter';
import { ScrollDownTip } from './components/ScrollDownTip';
import { TLDChip } from './components/TLDChip';
import { ParkingPagePreview } from './components/ParkingPagePreview';

export interface ParkingModeProps {
	domain: string;
	domainOwner: string;
	domainStatus: NameStatus;
	onClickOwner: () => void;
	domainValue: number;
	domainValueDescription: string;
	domainValueTip: string;
	domainScore: number;
	domainScoreProvider: string;
	domainScoreTip: string;
	otherTLDs: string[];
	onClickTLD: (tld: string) => void;
	onClickMakeOffer: () => void;
	domainPotentialDescription: string;
	domainPotentialPreview: React.ReactNode;
	onClickGeneratePotentialPreview: () => void;
	headerTwitterLink: string;
	headerDiscordLink: string;
	userAuthStateProps: UserAuthStateProps;
	footerLinks: ParkingModeFooterLink[];
}

export const ParkingMode = ({
	domain,
	domainOwner,
	domainStatus,
	onClickOwner,
	domainValue,
	domainValueDescription,
	domainValueTip,
	domainScore,
	domainScoreProvider,
	domainScoreTip,
	otherTLDs,
	onClickTLD,
	onClickMakeOffer,
	domainPotentialDescription,
	domainPotentialPreview,
	onClickGeneratePotentialPreview,
	headerTwitterLink,
	headerDiscordLink,
	userAuthStateProps,
	footerLinks,
}: ParkingModeProps) => {
	// const [domain, setDomain] = useState('');
	// const previewRef = useRef<HTMLDivElement>(null);
	// const handleGeneratePreview = useCallback(() => {
	// 	setDomain('namefi.com');
	// 	previewRef.current?.scrollIntoView({ behavior: 'smooth' });
	// }, [])
	const previewRef = useRef<HTMLDivElement>(null);
	const handleGeneratePreview = useCallback(() => {
		onClickGeneratePotentialPreview();
		previewRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [onClickGeneratePotentialPreview, previewRef])
	return (
		<div className={'w-full bg-[#1A1A1A]'}>
			<div className="max-w-[1488px] mx-auto min-h-screen pb-4 flex flex-col justify-around">
				<ParkingModeHeader twitterLink={headerTwitterLink} discordLink={headerDiscordLink} userAuthStateProps={userAuthStateProps} />
				<div className="flex-1 flex flex-col">
					<div className="flex-1 flex justify-center items-center py-30">
						<NameDisplay
							name={domain}
							owner={domainOwner}
							status={domainStatus}
							onClickOwner={onClickOwner}
						/>
					</div>
					<div className="flex flex-wrap md:flex-row flex-col md:mb-24 mb-8 md:px-12 px-2.5 md:gap-6 gap-0 justify-around items-center">
						<div className="flex flex-wrap md:gap-12 gap-4 md:mr-12 mr-0 md:mb-0 mb-6 justify-center items-center">
							<ValueStatistic
								title="Estimated Value"
								tip={domainValueTip}
								value={domainValue}
								unit="$NFSC"
								description={domainValueDescription}
							/>
							<ScoreStatistic
								title="Name Score"
								tip={domainScoreTip}
								score={domainScore}
								description={<div className="flex justify-end">by {domainScoreProvider}</div>}
							/>
						</div>
						<div className="flex flex-col justify-center items-center w-full px-6 md:w-auto md:px-0">
							<SolidButton className="font-primary text-sm whitespace-nowrap text-[10px] md:text-base" onClick={onClickMakeOffer}>
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
							{otherTLDs.map((tld) => <TLDChip key={tld} onClick={() => onClickTLD(tld)}>.namefi</TLDChip>)}
						</div>
					</div>
				</div>
				<ScrollDownTip className="hidden md:block">Show me the potential</ScrollDownTip>
			</div>
			<div className="max-w-[1488px] mx-auto px-0 md:px-8 mb-0 md:mb-9">
				<div className="border-none md:border-t border-[#444] pt-11">
					<NamePotential
						name={domain}
						description={domainPotentialDescription}
						preview={domainPotentialPreview}
						previewRef={previewRef}
						className="max-w-[1280px]">
						<SolidButton
							className="font-primary text-[10px] md:text-base"
							onClick={handleGeneratePreview}>
							Generate{' '}
							<img src="/assets/arrow-right2.svg" alt="arrow" className="w-[1em]" />
						</SolidButton>
					</NamePotential>
				</div>
			</div>
			<ParkingModeFooter
				className="w-full mx-auto"
				links={footerLinks}>
				D3SERVE LABS, Inc. All Rights Reserved.
			</ParkingModeFooter>
		</div>
	);
};
