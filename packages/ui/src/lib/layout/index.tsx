import { LayoutHeader } from './LayoutHeader';

export function PageLayout({ children }) {
	return (
		<>
			<LayoutHeader />
			<main>{children}</main>
		</>
	);
}
