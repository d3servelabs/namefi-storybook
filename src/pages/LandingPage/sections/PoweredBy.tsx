import React from 'react';
import EthereumLogo from '../../../assets/LandingPage/powered-by/ethereum.png';
import SigninWithEthereumLogo from '../../../assets/LandingPage/powered-by/signin-with-ethereum.png';
import GoogleCloudLogo from '../../../assets/LandingPage/powered-by/google-cloud.png';
import AWSLogo from '../../../assets/LandingPage/powered-by/aws.png';
import { cn } from '../../../utils/cn';

const LOGOS: [src: string, alt: string][] = [
	[EthereumLogo, 'ethereum'],
	[SigninWithEthereumLogo, 'sign in with ethereum'],
	[GoogleCloudLogo, 'google cloud'],
	[AWSLogo, 'aws'],
];

export const PoweredBy = ({ className }: { className?: string }) => {
	return (
		<div className={cn('w-full', className)}>
			<div className="text-brand-300 text-[10px] md:text-lg font-normal font-primary tracking-wide mb-3">
				Powered by
			</div>
			<div className="min-h-[142px] grid grid-cols-2 md:grid-cols-4 md:gap-x-16 justify-items-center place-content-around">
				{LOGOS.map(([src, alt], index) => (
					<div
						className="flex justify-center items-center h-14 md:h-36 max-w-[132px] md:max-w-[264px]"
						key={index}>
						<img src={src} alt={alt} />
					</div>
				))}
			</div>
		</div>
	);
};
