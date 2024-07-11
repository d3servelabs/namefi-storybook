export interface Tuple <T extends unknown, L extends number> extends Array<T> {
    0: T;
    length: L;
}