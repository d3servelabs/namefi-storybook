import ResultHeader from './ResultHeader';
import OptionList from './OptionList';

export default function Suggestion({ results }) {
	return (
		<div>
			<ResultHeader title={'Popular Searches'} />
			<OptionList options={results.popular} />
			<ResultHeader title={'Suggested Domains for You'} />
			<OptionList options={results.suggested} />
		</div>
	);
}
