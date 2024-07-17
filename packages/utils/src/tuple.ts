export interface Tuple<T, L extends number> extends Array<T> {
	0: T;
	length: L;
}
