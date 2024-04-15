import React, { Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import { BaseButton, SolidButton } from './SolidButton';
import pinSvg from '../../../../public/assets/pin.svg';
import pinFillSvg from '../../../../public/assets/pin-fill.svg';
import { cn } from '../../../utils/cn';

type faqItemProps = {
	name: any;
	question: React.ReactNode;
	answer: React.ReactNode;
	children: React.ReactNode;
};

export type FaqComponentProps = {
	children: React.ReactNode;
};

export const FaqContext = React.createContext<
	| {
			selected: any;
			setSelected: Dispatch<SetStateAction<any>>;
	  }
	| undefined
>(undefined);

const useFaqContext = () => {
	const ctx = useContext(FaqContext);

	if (!ctx) throw 'FAQ Context not found';

	return ctx;
};
export const List = ({ children }: FaqComponentProps) => {
	const [selected, setSelected] = useState<any>();

	return <FaqContext.Provider value={{ selected, setSelected }}>{children}</FaqContext.Provider>;
};

export const Item = ({ name, question, answer, children }: faqItemProps) => {
	const ctx = useFaqContext();
	const selected = useMemo(() => {
		return !!ctx.selected && !!name && ctx.selected === name;
	}, [ctx.selected, name]);
	return (
		<div
			key={name}
			className={cn(
				'relative max-w-[825px] px-2 lg:px-8 min-h-[5rem] border-[1.5px] border-brand-200 rounded-2xl hover:border-primary-500 duration-300 mb-5',
				selected && 'border-primary-500',
			)}>
			<button
				onClick={() => ctx.setSelected(selected ? undefined : name)}
				className={cn(
					` relative w-full flex items-center justify-between text-brand-200 hover:text-white duration-300 min-h-[80px]
                  before:absolute
                  before:w-full
                  before:h-px
                  before:bg-border-500
                  before:left-0
                  before:bottom-0 `,
					selected && 'text-white',
				)}>
				<span className="font-semibold text-[1.25rem] tracking-widest ">{question}</span>
				<img src={!selected ? pinSvg : pinFillSvg} alt="pin icon" />
			</button>
			<div
				className={cn(
					' overflow-hidden flex flex-col gap-5 duration-200 ',
					!selected && 'duration-200 max-h-[0]',
				)}>
				<div className="w-full font-normal mb-14 text-lg text-[#d6d6d6] pt-6 tracking-wider flex flex-col gap-6 duration-200">
					{answer}
				</div>
				{children}
			</div>
		</div>
	);
};

export const ItemFooter = ({ onYesClicked, onNoClicked }: any) => {
	return (
		<div className="w-full flex justify-between items-center pb-[33px]">
			<p className="font-light text-brand-green text-base tracking-widest">
				Does it answer your question?
			</p>
			<div className="flex gap-5">
				<div>
					<SolidButton onClick={onYesClicked}>Yes</SolidButton>
				</div>
				<BaseButton onClick={onNoClicked}>No, ask a Human</BaseButton>
			</div>
		</div>
	);
};
