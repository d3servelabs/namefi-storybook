import { Circle } from 'lucide-react';
import NamefiLogo from './NamefiLogo';

export default function Loading({ value }) {
	return (
		<div className="flex h-100">
			<div className="m-auto">
				<div className="flex flex-col space-y-9">
					<Circle className="mx-auto h-8 w-8 text-[#EDFCF79E]" />
					<span className="flex gap-x-3 font-primary text-xl text-[#EDFCF79E]">
						<NamefiLogo /> is looking for "{value}"
					</span>
				</div>
			</div>
		</div>
	);
}
