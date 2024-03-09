import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Statistic } from './Statistic';

export interface CountdownStatisticProps {
	title: React.ReactNode;
	time: Date | number;
	description?: React.ReactNode;
	tip?: React.ReactNode;
	className?: string;
}

const pretty = (value: number) => String(Math.floor(value)).padStart(2, '0');

const StyledCountdownValue = styled.div`
	letter-spacing: 0.25em;
`;

export const CountdownStatistic = ({
	title,
	time,
	description,
	tip,
	className,
}: CountdownStatisticProps) => {
	const [countdown, setCountdown] = useState<{ hours: string; minutes: string; seconds: string }>(
		{ hours: '--', minutes: '--', seconds: '--' },
	);

	useEffect(() => {
		const update = () => {
			const distance = +time - +new Date();

			if (distance < 0) {
				clearInterval(timer);
				setCountdown({ hours: '00', minutes: '00', seconds: '00' });
				return;
			}

			const hours = pretty(distance / (1000 * 60 * 60));
			const minutes = pretty((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = pretty((distance % (1000 * 60)) / 1000);

			setCountdown({ hours, minutes, seconds });
		}

		const timer = setInterval(update, 1000);
		update();	

		return () => clearInterval(timer);
	}, [time]);

	return (
		<Statistic title={title} tip={tip} description={description} className={className}>
			<div className="flex justify-center items-end">
				<StyledCountdownValue>
					{countdown.hours}:{countdown.minutes}:{countdown.seconds}
				</StyledCountdownValue>
			</div>
		</Statistic>
	);
};
