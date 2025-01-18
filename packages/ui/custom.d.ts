declare module '*?raw' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module '*.svg' {
	const content: string;
	/**
	 * @deprecated
	 */
	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	export { ReactComponent };
	export default content;
}

declare module '*.svg?react' {
	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	export default ReactComponent;
}

declare module '*.png' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module '*.module.css' {
	const classes: Record<string, string>;
	export default classes;
}
