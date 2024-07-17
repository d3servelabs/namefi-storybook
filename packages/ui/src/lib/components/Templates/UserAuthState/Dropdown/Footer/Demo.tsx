import React from 'react';
import  { cn }  from "@namefi/utils"
import * as Footer from '.';

export function Demo({
	userAddress,
	signedIn,
	loading,
}: {
	userAddress?: string;
	signedIn?: boolean;
	loading?: boolean;
}) {
	return (
		<Footer.Root>
			{(userAddress || loading) && (
				<Footer.SwitchButton
					disabled={loading}
					className={cn(loading && 'grayscale-[50%] opacity-50')}>
					Switch Wallet
				</Footer.SwitchButton>
			)}
			{userAddress && <Footer.ExitButton>{signedIn ? 'SignOut' : 'Disconnect'}</Footer.ExitButton>}
		</Footer.Root>
	);
}

export default Demo;