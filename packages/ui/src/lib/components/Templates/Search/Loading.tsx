import NamefiLogo from './NamefiLogo';
import Spinner from '../../Core/Spinner';

export default function Loading({ value }: { value: string }) {
	return (
		<div className="flex h-100">
			<div className="m-auto">
				<div className="flex flex-col space-y-9">
					<Spinner className="mx-auto h-8 w-8" />
					<span className="flex gap-x-3 font-primary text-xl text-[#EDFCF79E]">
						<NamefiLogo /> is looking for "{value}"
					</span>
				</div>
			</div>
		</div>
	);
}
