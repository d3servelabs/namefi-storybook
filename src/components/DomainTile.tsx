import React, { useMemo } from 'react';
import { NamefiBrandText } from './NamefiBrandText';
import { PlusIcon, BookmarkIcon, LightningBoltIcon, ResetIcon } from '@radix-ui/react-icons';

export type DomainTileProps = {
	domainName?: string;
	loading?: boolean;
	showExpiration?: boolean;
	expirationDate?: Date;
} & (
	| {
			sameOwner?: boolean;
			onAddClicked?: () => any;
			status: 'TAKEN'; // shouldn't be derived from ownerAddress in case the user doesn't want to pass the owner address
			showActions?: boolean;
	  }
	| {
			status: 'AVAILABLE';
	  }
);

export const DomainTile = (props: DomainTileProps) => {
	const { sameOwner, onAddClicked, showActions } = useMemo(() => {
		if (props.status === 'TAKEN') {
			return {
				sameOwner: props.sameOwner,
				onAddClicked: props.onAddClicked,
				showActions: props.showActions,
			};
		}
		return {};
	}, [props]);
	const { domainName, loading, showExpiration, expirationDate, status } = props;
	return (
		<div className="relative w-87.5 flex flex-col items-center bg-black-1000 justify-between p-4 pt-2.5 h-50 bg-black rounded-5 drop-shadow-[0_0px_1px_rgba(202,202,202,0.25)]">
			<div className="h-10.75 p-0 w-full flex  justify-between">
				<div className="w-29.25 self-end ">
					{!sameOwner ? (
						<p className="font-bold tracking-widest  ">
							<NamefiBrandText className="text-lg text-primary-500">Available</NamefiBrandText>
						</p>
					) : (
						showActions && (
							<div className="w-full h-full flex justify-between text-emerald-400">
								<button className="rounded-full w-8.25 p-2 bg-emerald-800/20 hover:bg-emerald-800/40 active:bg-emerald-600/60">
									<ResetIcon className={'w-full h-full'} />
								</button>
								<button className="rounded-full w-8.25 p-2 bg-emerald-800/20 hover:bg-emerald-800/40 active:bg-emerald-600/60">
									<LightningBoltIcon className={'w-full h-full'} />
								</button>
								<button className="rounded-full w-8.25 p-2 bg-emerald-800/20 hover:bg-emerald-800/40 active:bg-emerald-600/60">
									<BookmarkIcon className={'w-full h-full'} />
								</button>
							</div>
						)
					)}
				</div>
				{showActions && (
					<button
						className="relative block self-start p-1 rounded-full hover:bg-emerald-800/40 active:bg-emerald-600/60"
						onClick={onAddClicked}>
						<PlusIcon className={'w-6 h-6 text-emerald-400'} />
					</button>
				)}
			</div>
			<h3 className="text-5.25 text-[#fff] font-medium tracking-widest ">{domainName}</h3>
			<div className="w-28.25 h-6.75 flex items-center justify-between self-end ">
				{showExpiration && !!expirationDate && (
					<>
						<img className="w-7" src="/assets/lock.svg" alt="lock image" role="img" />
						<div className="w-18.75 h-full font-secondary">
							<p className="text-[#acacac] text-2 font-extrabold tracking-widest ">
								Expires on
							</p>
							<p className="text-[#ededed] text-2.5 font-extrabold tracking-widest ">
								Mar 01 2025
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
