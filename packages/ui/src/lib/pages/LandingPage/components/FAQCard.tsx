import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { DrawingPinFilledIcon, DrawingPinIcon } from '@radix-ui/react-icons';
import  { cn }  from "@namefi/utils"

export interface FAQCardProps {
	question: React.ReactNode;
	answer: React.ReactNode;
	expanded?: boolean;
	onExpand?: () => void;
	onCollapse?: () => void;
	onClickAskHuman?: () => void;
	className?: string;
}

export const FAQCard = ({
	question,
	answer,
	expanded = false,
	onExpand,
	onCollapse,
	onClickAskHuman,
	className,
}: FAQCardProps) => {
	return (
		<div
			className={cn(
				'w-full px-4 md:px-8 border border-brand-200 rounded-2xl hover:border-primary-500 transition',
				expanded && 'border-primary-500',
				className,
			)}>
			<div
				onClick={expanded ? onCollapse : onExpand}
				className={cn(
					'w-full min-h-12 md:min-h-20 flex items-center justify-between py-3.5 gap-x-3.5 md:py-6 md:gap-x-6 text-brand-light hover:text-white transition cursor-pointer',
					expanded && 'text-primary-500 hover:text-primary-500',
				)}>
				<span className="font-semibold text-sm md:text-xl tracking-widest">{question}</span>
				<span className={cn(expanded && 'text-primary-500')}>
					{expanded ? <DrawingPinFilledIcon /> : <DrawingPinIcon />}
				</span>
			</div>
			<div
				className={cn(
					'border-t border-border-500 transition',
					!expanded && 'duration-200 hidden',
				)}>
				<div className="w-full text-grey-lighter text-xs md:text-lg font-third tracking-wider pt-3 md:pt-6 mb-4 md:mb-14">
					{answer}
				</div>
				<FAQCardFooter onClickYes={onCollapse} onClickNo={onClickAskHuman} />
			</div>
		</div>
	);
};

interface FAQCardFooterProps {
	onClickYes?: () => void;
	onClickNo?: () => void;
}
const FAQCardFooter = ({ onClickYes, onClickNo }: FAQCardFooterProps) => {
	return (
		<div className="w-full flex flex-wrap justify-between items-center pb-4 md:pb-8 gap-y-2">
			<p className="font-light text-brand-green text-[10px] md:text-base tracking-widest">
				Does it answer your question?
			</p>
			<div className="flex gap-5">
				<div>
					<Button type="tonal" onClick={onClickYes} className="text-[10px] md:text-base">
						Yes
					</Button>
				</div>
				<Button type="outlined" onClick={onClickNo} className="text-[10px] md:text-base">
					<span>No, ask a Human</span>
					<ArrowRight className="w-2.5 md:w-4.5 h-2.5 md:h-4.5 text-primary-500" />
				</Button>
			</div>
		</div>
	);
};
