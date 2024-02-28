import React, {useMemo, useState} from 'react';
import  DomainExpirationAndLock from './DomainExpirationAndLock';
import  DomainOwner from './DomainOwner';
import DomainStatus, {DomainStatusEnum} from './DomainStatus';
import DomainCardFooter from './DomainCardFooter';
import DomainCardBody from './DomainCardBody';
import DomainCardRoot from './DomainCardRoot';
import DomainCardHeader from './DomainCardHeader';

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
			onSettingsClicked?: () => any;
			status: 'TAKEN'; // shouldn't be derived from ownerAddress in case the user doesn't want to pass the owner address
	  }
	| {
			status: 'AVAILABLE';
	  }
);

export const DomainCard = (props: DomainCardProps) => {
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
	const { domainName, loading, href, showExpiration, expirationDate, status } = props;

	return (
		<DomainCardRoot small={props.small}>
			<DomainCardHeader small={props.small}>
				<DomainStatus
					status={
						status === 'TAKEN'
							? sameOwner
								? DomainStatusEnum.YOU_OWN_THIS
								: DomainStatusEnum.TAKEN
							: DomainStatusEnum.AVAILABLE
					}
				/>
				<button className="relative block" onClick={onSettingsClicked}>
					{sameOwner && (showSettings ?? true) && (
						<img className="w-7.5" src="/assets/Gear.svg" alt="Gear image" role="img" />
					)}
				</button>
			</DomainCardHeader>
			<DomainCardBody small={props.small}>{domainName}</DomainCardBody>
			<DomainCardFooter small={props.small}>
				{showOwner && !!ownerAddress && <DomainOwner ownerAddress={ownerAddress} />}
				{showExpiration && !!expirationDate && (
					<DomainExpirationAndLock expirationDate={expirationDate} locked={true} />
				)}
			</DomainCardFooter>
		</DomainCardRoot>
	);
};

