export default function NamefiLogo() {
	const letters = ['n', 'a', 'm', 'e', 'f', 'i'];

	return (
		<div className="flex flex-row gap-x-1">
			{letters.map((letter, index) => (
				<div key={index} className="bg-[#EDFCF79E]">
					<span className="font-primary text-xl text-[#000]">{letter}</span>
				</div>
			))}
		</div>
	);
}
