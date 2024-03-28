import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { NamefiBrandText } from '../../../components';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { ActionButton } from '../components/ActionButton';

export interface Option {
	label: string;
	value: string;
}

export interface GetStartedProps {
	networkOptions?: Option[];
	className?: string;
}

export const GetStarted = ({ networkOptions, className }: GetStartedProps) => {
	return (
		<ImportFlowLayout.Main
			title={
				<>
					Import it to your wallet, on <NamefiBrandText>Namefi</NamefiBrandText>.
				</>
			}
			description="Mint your domain NFT and start trading it hassle-free."
			actions={
				<ActionButton icon={<ArrowRightIcon />} className="w-auto">
					Start Import
				</ActionButton>
			}
			className={className}></ImportFlowLayout.Main>
	);
};
