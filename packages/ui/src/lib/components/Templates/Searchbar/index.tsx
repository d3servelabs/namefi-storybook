import { SearchbarProvider } from './SearchbarContext';
import Searchbar from './Searchbar';

export default function SearchbarComponent() {
	return (
		<SearchbarProvider>
			<Searchbar />
		</SearchbarProvider>
	);
}
