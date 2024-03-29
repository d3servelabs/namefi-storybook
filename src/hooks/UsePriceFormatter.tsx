export function usePriceFormatter(price, precision = 2) {
    if (!price) {
        return {
            wholeAmount: undefined,
            fractionalAmount: undefined,
            multiplier: undefined,
        };
    }

    const wholeAmount = Math.floor(price);
    const fractionalAmount = Math.floor(Math.pow(10, precision) * (price - wholeAmount)) / Math.pow(10, precision);

    return {
        wholeAmount,
        fractionalAmount,
        multiplier: undefined,
    };
}