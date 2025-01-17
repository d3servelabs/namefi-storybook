import { RefreshCw } from 'lucide-react';

export default function ResultHeader({ title }: { title: string }) {
	return (
		<div className="flex justify-between border-b-[0.5px] border-[#BBF9DC21] px-2.5 pb-2.5">
			<span className="font-sans text-base text-[#E9FDF370]">{title}</span>
			<RefreshCw className="h-4 w-4 cursor-pointer text-[#E9FDF370]" />
		</div>
	);
}
