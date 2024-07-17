export function centerTruncateString(str: string, length: number, filler = '...') {
	if (str.length > length) {
		const charsLength = length - filler.length;
		const firstPartLength = Math.floor(charsLength / 2);
		const secondPartLength = charsLength - firstPartLength;

		return (
			str.substring(0, firstPartLength + 1) +
			filler +
			str.substring(str.length - secondPartLength)
		);
	}
	return str;
}
export default centerTruncateString;
