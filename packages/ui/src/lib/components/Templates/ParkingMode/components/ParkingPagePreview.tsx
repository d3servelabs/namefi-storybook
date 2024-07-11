import React from 'react';
import { css, keyframes } from '@emotion/css';
import StyledDiv from '../../../Core/StyledDiv';

const frames = {
	showUp: keyframes`
      from {
        transform: translateY(32px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    `,

	fadeIn: keyframes`
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	`,
};

const animations = {
	content: css`
		animation: ${frames.showUp} 1.2s ease-out;
	`,
	footer: css`
		animation: ${frames.fadeIn} 1.2s ease-out;
	`,
};

const Container = StyledDiv(css`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background: linear-gradient(#21212180, #21212180),
		linear-gradient(185deg, rgba(241, 255, 248, 0.25) -86.83%, rgba(222, 255, 240, 0) 223.83%);
`);

export interface ParkingPagePreviewProps {
	domain: string;
	className?: string;
}

export const ParkingPagePreview = ({ domain, className }: ParkingPagePreviewProps) => {
	return (
		<Container className={className}>
			<div className={animations.content}>
				<div className="font-[Zilla Slab Highlight] font-bold text-[#2b2b2b] text-3xl mb-4">
					<div className="bg-primary-500">Coming Soon!</div>
					<div className="bg-primary-500 opacity-80">Coming Soon!</div>
					<div className="bg-primary-500 opacity-60">Coming Soon!</div>
					<div className="bg-primary-500 opacity-40">Coming Soon!</div>
					<div className="bg-primary-500 opacity-20">Coming Soon!</div>
				</div>
				<div className="text-xs leading-loose font-primary text-primary-500 mb-9">
					This is a planned feature.
				</div>
			</div>
			<div className={`absolute bottom-9 px-4 left-0 w-full ${animations.footer}`}>
				<div className="text-3xl text-primary-500 font-[Zilla Slab Highlight] font-bold pb-1.5 mb-1.5 border-b border-[#AFFFD9]">
					{domain}
				</div>
				<div className="text-xs text-primary-200 font-third">Made by Namefi Team</div>
			</div>
		</Container>
	);
};
