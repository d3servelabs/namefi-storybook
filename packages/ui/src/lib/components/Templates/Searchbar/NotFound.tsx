import { SearchIcon } from 'lucide-react';

export default function NotFound() {
	return (
		<div className="flex h-58">
			<div className="m-auto">
				<div className="flex flex-col space-y-9">
					<SearchIcon className="mx-auto h-8 w-8 text-[#EDFCF79E]" />
					<span className="font-primary text-xl text-[#EDFCF79E]">
						No domains found. Try a different search
					</span>
				</div>
			</div>
		</div>
	);
}
