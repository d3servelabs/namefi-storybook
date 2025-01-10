import { SearchBarProvider } from './SearchBarContext';
import SearchBar from './SearchBar';

export default function SearchBarComponent() {
	return (
		<SearchBarProvider>
			<SearchBar />
		</SearchBarProvider>
	);
}
