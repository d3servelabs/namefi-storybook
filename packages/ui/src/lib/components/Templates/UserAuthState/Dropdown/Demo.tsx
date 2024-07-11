import React from 'react';
import Header from './Header/Demo';
import Footer from './Footer/Demo';
import Body from './Body/Demo';
import Root from "./Root";

export function Demo({
	userAddress,
	userLoading,
}: {
	userAddress?: string;
	userLoading?: boolean;
}) {
	return (
		<Root>
			<Header userAddress={userAddress} userLoading={userLoading} chainId={1} />
			<Body balance={10.32} userAddress={userAddress} />
			<Footer userAddress={userAddress} loading={userLoading} signedIn={!!userAddress} />
		</Root>
	);
}

export default Demo;