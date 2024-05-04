import React, { useEffect, useCallback } from 'react';

const useFirstIntersecting = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
	const isCalled = React.useRef<boolean>(false);
	useEffect(() => {
		const current = ref?.current;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !isCalled.current) {
				callback();
				isCalled.current = true;
			}
		});
		current && observer?.observe(current);
		return () => {
			current && observer?.unobserve(current);
		};
	}, [ref, callback]);
};

export interface RisingNumberProps {
	value: number;
	start?: number;
	duration?: number;
	increment?: number;
	className?: string;
}

export const RisingNumber = ({
	value,
	start = 0,
	duration = 1200,
	increment = 7,
	className,
}: RisingNumberProps) => {
	const ref = React.useRef<HTMLDivElement>(null);
	const [displayValue, setDisplayValue] = React.useState(0);

	const rise = useCallback(() => {
		const end = value;
		const range = end - start;
		let current = start;
		const stepTime = Math.abs(Math.floor(duration / range * increment));
		const timer = setInterval(() => {
			current = end < current + increment ? end : current + increment;
			setDisplayValue(current);
			if (current === end) {
				clearInterval(timer);
			}
		}, stepTime);
	}, [value, start, duration, increment, setDisplayValue]);

	useFirstIntersecting(ref, rise);

	return (
		<span className={className} ref={ref}>
			{displayValue}
		</span>
	);
};
