export function debounce<T extends (...args: any[]) => void>(
	func: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let timer: NodeJS.Timeout | null = null;
	return function (this: unknown, ...args: Parameters<T>) {
		const context = this;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
}
