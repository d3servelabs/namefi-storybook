import { useMemo } from 'react';
import { DomainCard } from '@namefi/ui';

export type DomainCardProps = {
	domainName?: string;
	small?: boolean;
	loading?: boolean;
	showExpiration?: boolean;
	expirationDate?: Date;
	href?: string;
} & (
	| {
			ownerAddress?: string;
			showOwner?: boolean;
			showSettings?: boolean;
			sameOwner?: boolean;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onSettingsClicked?: () => any;
			status: 'TAKEN'; // shouldn't be derived from ownerAddress in case the user doesn't want to pass the owner address
	  }
	| {
			status: 'AVAILABLE';
	  }
);

export const DomainCardDemo = (props: DomainCardProps) => {
	const { showOwner, sameOwner, showSettings, ownerAddress, onSettingsClicked } = useMemo(() => {
		if (props.status === 'TAKEN') {
			return {
				showOwner: props.showOwner,
				sameOwner: props.sameOwner,
				ownerAddress: props.ownerAddress,
				onSettingsClicked: props.onSettingsClicked,
				showSettings: props.showSettings,
			};
		}
		return {};
	}, [props]);
	const { domainName, showExpiration, expirationDate, status } = props;

	return (
		<DomainCard.Root small={props.small}>
			<DomainCard.Header small={props.small}>
				<DomainCard.Status
					status={
						status === 'TAKEN'
							? sameOwner
								? DomainCard.StatusEnum.YOU_OWN_THIS
								: DomainCard.StatusEnum.TAKEN
							: DomainCard.StatusEnum.AVAILABLE
					}
				/>
				<button className="relative block" onClick={onSettingsClicked}>
					{sameOwner && (showSettings ?? true) && (
						<img className="w-7.5" src="/assets/Gear.svg" alt="Gear image" role="img" />
					)}
				</button>
			</DomainCard.Header>
			<DomainCard.Body small={props.small}>{domainName}</DomainCard.Body>
			<DomainCard.Footer small={props.small}>
				{showOwner && !!ownerAddress && <DomainCard.Owner ownerAddress={ownerAddress} />}
				{showExpiration && !!expirationDate && (
					<DomainCard.ExpirationAndLock expirationDate={expirationDate} locked={true} />
				)}
			</DomainCard.Footer>
		</DomainCard.Root>
	);
};
