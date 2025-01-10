import Option from './Option';

export default function Options({ options }) {
	return (
		<ul className="space-y-2 py-2">
			{options.map((option) => (
				<Option option={option} key={option.name} />
			))}
		</ul>
	);
}
