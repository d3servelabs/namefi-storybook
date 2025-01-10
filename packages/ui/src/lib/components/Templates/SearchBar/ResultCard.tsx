import { cn } from '../../../utils';
import Loading from './Loading';
import { useSearchBarContext } from './SearchBarContext';
import SearchResult from './SearchResult';
import NotFound from './NotFound';
import Suggestion from './Suggestion';

export default function ResultCard({ inputRef }) {
	const { open, loading, value, suggestions, results } = useSearchBarContext();

	const getComponents = ({ open, loading, value, results, suggestions }) => {
		if (loading) {
			return <Loading value={value} />;
		}
		if (value && (results.popular.length || results.suggested.length)) {
			return <SearchResult />;
		}
		if (value) {
			return <NotFound />;
		}
		return <Suggestion results={suggestions} />;
	};

	if (!open) {
		return;
	}

	return (
		<div
			style={{
				width: inputRef.current ? inputRef.current.offsetWidth : 'auto',
			}}
			className={cn(
				'absolute mt-5 scale-100 transform rounded-2xl bg-[#FFFFFF0A] px-10 py-5 shadow-lg transition-transform duration-200 ease-in-out',
			)}>
			{getComponents({ open, loading, value, results, suggestions })}
		</div>
	);
}
