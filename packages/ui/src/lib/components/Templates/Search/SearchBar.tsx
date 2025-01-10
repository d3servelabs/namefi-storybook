'use client';

import * as React from 'react';
import ResultCard from './ResultCard';
import SearchBarInput from './SearchBarInput';
import { useSearchBarContext } from './SearchBarContext';

export default function SearchBar() {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	const { open, setOpen } = useSearchBarContext();

	const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
		// Check if the related target (next focused element) is inside the container
		if (!inputRef.current?.contains(event.relatedTarget)) {
			setOpen(false); // Close the dropdown
		}
	};

	return (
		<div className="mx-auto my-auto w-full max-w-5xl space-y-4">
			<div
				ref={inputRef}
				tabIndex={-1} // Allow the div to receive focus
				onBlur={handleBlur}>
				<div className="relative mt-5">
					<SearchBarInput />
				</div>
				<ResultCard inputRef={inputRef} />
			</div>
		</div>
	);
}
