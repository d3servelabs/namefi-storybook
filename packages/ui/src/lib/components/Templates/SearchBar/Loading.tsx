import NamefiWhiteLogo from '../../Core/icons/NamefiWhiteLogo';
import { Spinner } from '../../Core/Spinner';

export default function Loading({ value }: { value: string }) {
	return (
		<div className="flex h-100">
			<div className="m-auto">
				<div className="flex flex-col space-y-9">
					<Spinner className="mx-auto h-8 w-8" />
					<span className="flex gap-x-1 font-primary text-xl text-[#EDFCF79E]">
						<NamefiWhiteLogo className="my-auto h-8" fill={'#EDFCF79E'} /> is looking
						for "{value}"
					</span>
				</div>
			</div>
		</div>
	);
}
