import { ArrowRight, SearchIcon } from 'lucide-react';
import AvailableOptions from './AvailableOptions';
import Suggestion from './Suggestion';

export default function Result() {
	return (
		<div>
			<AvailableOptions />
			<div className="mt-5">
				<Suggestion />
			</div>
			<div className="border-t-[0.5px] border-[#BBF9DC21]">
				<li className="mt-2 flex justify-between rounded-2 px-3 py-5 hover:cursor-pointer hover:bg-[#FFFFFF0A]/5">
					<div className="flex flex-row space-x-5">
						<SearchIcon className="my-auto h-[18px] w-[18px] cursor-pointer text-[#E9FDF370]" />
						<span className="my-auto cursor-pointer font-primary text-lg font-medium text-white">
							All search results for "domain"
						</span>
					</div>
					<ArrowRight className="my-auto h-4 w-4 cursor-pointer text-[#E9FDF370]" />
				</li>
			</div>
		</div>
	);
}
