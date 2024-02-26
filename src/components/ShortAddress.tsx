import React from 'react';

export default function ShortAddress({
	address,
	fallback = true,
	loading,
}: {
	address?: string;
	fallback?: React.ReactNode;
	loading?: boolean;
}) {
	if (loading) {
		return (
			<div
				className={'min-w-[15ch] min-h-[12px] animate-pulse bg-neutral-600 rounded-full'}
			/>
		);
	}
	if (!address) {
		if (typeof fallback === 'boolean') {
			return <>0x{new Array(13).fill(<>&bull;</>)}</>;
		}
		return fallback;
	}
	return (
		<>
			{address.slice(0, 7)}
			&bull;&bull;&bull;&bull;
			{address?.slice(37, 42)}
		</>
	);
}
