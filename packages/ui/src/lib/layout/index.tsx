import { Header } from './Header';

export function PageLayout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
