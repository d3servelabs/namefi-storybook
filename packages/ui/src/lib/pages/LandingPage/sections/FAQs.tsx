import React, { useState } from 'react';
import { FAQCard, type FAQCardProps } from '../components/FAQCard';
import  { cn }  from "@namefi/utils"

export type FAQItem = Pick<FAQCardProps, 'question' | 'answer'>;

export interface FAQProps {
	items: FAQItem[];
	onClickAskHuman?: () => void;
	className?: string;
}

export const FAQs = ({ items, onClickAskHuman, className }: FAQProps) => {
	const [selected, setSelected] = useState<number | void>();

	return (
		<div id="faqs" className={cn('w-full', className)}>
			<div className="text-primary-500 text-base md:text-3xl font-primary font-bold tracking-widest mb-6 md:mb-16">
				FAQs
			</div>
			<div className="w-full flex flex-col items-center gap-y-3">
				{items.map(({ question, answer }, index) => (
					<FAQCard
						key={index}
						question={question}
						answer={answer}
						expanded={selected === index}
						onExpand={() => setSelected(index)}
						onCollapse={() => setSelected(void 0)}
						onClickAskHuman={onClickAskHuman}
						className="max-w-[824px]"
					/>
				))}
			</div>
		</div>
	);
};
