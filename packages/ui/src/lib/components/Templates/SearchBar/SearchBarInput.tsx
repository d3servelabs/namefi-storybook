import { Circle, Search } from 'lucide-react';
import React from 'react';
import { Button, ButtonText, IconCircleButton, Input } from '../../Core';
import { useSearchBarContext } from './SearchBarContext';
import { motion, AnimatePresence } from 'framer-motion';
import { debounce } from '../../../utils';

export default function SearchBarInput({ setSearchString }) {
	const textOptions = ['available domains...', '.com', '.net', '.org', '.tech'];
	const { setOpen, setValue, setLoading, setResults } = useSearchBarContext();
	const [visibleText, setVisibleText] = React.useState(0);
	const [localValue, setLocalValue] = React.useState('');

	const handleFocus = () => {
		setOpen(true);
	};

	const debouncedHandleChange = React.useMemo(
		() =>
			debounce(async (newVal: string) => {
				// Simulate API call
				setLoading(true);
				try {
					// Replace with actual API call
					await new Promise((resolve) => setTimeout(resolve, 500));
					setValue(newVal);
					setSearchString(newVal);
				} catch (error) {
					console.error('Error during API call:', error);
				} finally {
					setLoading(false);
				}
			}, 300), // Adjust debounce delay as needed
		[setLoading, setValue],
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setLocalValue(newValue); // Update local state immediately
		debouncedHandleChange(newValue); // Trigger debounced API call
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			setVisibleText((prevIndex) => (prevIndex + 1) % textOptions.length);
		}, 3000);

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, []);

	return (
		<div>
			<Search className="absolute left-[18px] top-[18px] z-10 h-5 w-5 text-[#EDFCF79E]" />
			<div className="relative">
				<Input
					className="h-14 pl-12 pr-32"
					value={localValue}
					onFocus={handleFocus}
					onChange={handleChange}
				/>
				{!localValue && (
					<div className="placeholder-container pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 transform">
						<span className="pr-1 text-[#EDFCF79E]">Search for</span>
						<AnimatePresence mode="wait">
							<motion.span
								key={visibleText}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
								className="inline-block text-[#EDFCF79E]">
								{textOptions[visibleText]}
							</motion.span>
						</AnimatePresence>
					</div>
				)}
			</div>

			<IconCircleButton
				icon={<Search className="h-5 w-5 text-[#000000CC]" />}
				className="absolute right-[6px] top-[6px] block bg-primary-500 p-3 enabled:hover:bg-[#2BEF91FF] enabled:active:bg-primary-500/30 md:hidden"
			/>

			<Button className="absolute right-[6px] top-[6px] my-auto hidden h-11 w-auto cursor-pointer bg-primary-500 px-12 py-3 leading-5 ring-0 transition-all duration-200 ease-in-out enabled:hover:bg-[#2BEF91FF] enabled:active:bg-primary-500/30 md:block">
				<ButtonText className="text-base font-medium text-[#000000CC]">Search</ButtonText>
			</Button>
		</div>
	);
}
