import { ArrowRight, RefreshCw, SearchIcon } from 'lucide-react';

export default function Suggestion() {
	return (
		<div>
			<div className="flex justify-between border-b-[0.5px] border-[#BBF9DC21] px-2.5 pb-2.5">
				<span className="font-sans text-[16px] text-[#E9FDF370]">Popular Searches</span>
				<RefreshCw className="h-4 w-4 cursor-pointer text-[#E9FDF370]" />
			</div>

			<ul className="space-y-2 py-2">
				{[{}, {}, {}].map((elem) => (
					<li className="flex justify-between rounded-2 px-3 py-5 hover:cursor-pointer hover:bg-[#FFFFFF0A]/5">
						<div className="flex flex-row space-x-5">
							<SearchIcon className="my-auto h-[18px] w-[18px] cursor-pointer text-[#E9FDF370]" />
							<span className="my-auto cursor-pointer font-primary text-lg font-medium text-white">
								.com
							</span>
						</div>
						<div className="flex flex-row space-x-5">
							<span className="my-auto font-primary text-[16px] text-[#E9FDF370]">
								Starting at $79.99 USD
							</span>
							<ArrowRight className="my-auto h-4 w-4 cursor-pointer text-[#E9FDF370]" />
						</div>
					</li>
				))}
			</ul>

			<div className="flex justify-between border-b-[0.5px] border-[#BBF9DC21] px-2.5 pb-2.5">
				<span className="font-sans text-[16px] text-[#E9FDF370]">
					Suggested Domains for You
				</span>
				<RefreshCw className="h-4 w-4 cursor-pointer text-[#E9FDF370]" />
			</div>

			<ul className="space-y-2 py-2">
				{[{}, {}, {}].map((elem) => (
					<li className="flex justify-between rounded-2 px-3 py-5 hover:cursor-pointer hover:bg-[#FFFFFF0A]/5">
						<div className="flex flex-row space-x-5">
							<SearchIcon className="my-auto h-[18px] w-[18px] cursor-pointer text-[#E9FDF370]" />
							<span className="my-auto cursor-pointer font-primary text-lg font-medium text-white">
								.info
							</span>
							<span className="rounded-1 bg-[#48E59B14] px-4 text-lg text-primary-500">
								80% off
							</span>
						</div>
						<div className="flex flex-row space-x-5">
							<span className="my-auto font-primary text-[16px] text-[#E9FDF370]">
								Starting at $79.99 USD
							</span>
							<ArrowRight className="my-auto h-4 w-4 cursor-pointer text-[#E9FDF370]" />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
