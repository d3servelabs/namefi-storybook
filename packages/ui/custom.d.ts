declare module '*?raw' {
	const content: any;
	export default content;
}

declare module '*.svg' {
	const content: string;
	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	export { ReactComponent };
	export default content;
}

declare module '*.png' {
	const content: any;
	export default content;
}

declare module '*.module.css' {
	const classes: Record<string, string>;
	export default classes;
}
