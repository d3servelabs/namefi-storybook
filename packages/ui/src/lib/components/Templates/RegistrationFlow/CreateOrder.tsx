import React from 'react';
import { Button, NamefiBrandText, YearCounter } from '../../Core';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ButtonProps } from '../../Core/Buttons/Button';

export const Root = ({ children }) => {
	return (
		<div className="relative flex flex-col justify-center items-center gap-9 ">
			<div className="relative flex flex-col gap-3 tracking-wider w-full">
				<p className="font-semibold text-white text-xl">Register a new domain.</p>
				<p className="font-normal text-brand-300 text-sm">
					This will mint a{' '}
					<NamefiBrandText className={'font-bold text-brand-300 text-4.5lg'}>
						Namefi
					</NamefiBrandText>{' '}
					NFT to your connected wallet.
				</p>
			</div>
			<div className={'flex flex-col items-start justify-start w-full'}>
				<div className="text-[#D9D9D9] text-3.5lg font-light">Register for:</div>
				<div className={'flex flex-col gap-12 items-start justify-start'}>{children}</div>
			</div>
		</div>
	);
};

export function ActionButton(props: ButtonProps) {
	return (
		<Button {...props}>
			{props.children || (
				<>
					Proceed <ArrowRightIcon className={'text-primary w-5.5 h-5.5'} />
				</>
			)}
		</Button>
	);
}

export { YearCounter };
