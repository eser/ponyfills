function arrayFromPolyfill(source, mapFn?, thisArg?): any {
    // @ts-ignore
    const caller = (thisArg === null || thisArg === undefined) ? this : thisArg;

    if (source === null || source === undefined) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
    }

    const mapping = (mapFn !== null && mapFn !== undefined);

    if (mapping && !(mapFn instanceof Function)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
    }

    const items = [ ...source ];

    if (!mapping) {
        return items;
    }

    const result = items.reduce(
        (prev, curr, idx) => ([ ...prev, mapFn.call(caller, curr, idx) ]),
        [] as any[],
    );

    return result;
}

// eslint-disable-next-line no-prototype-builtins
const arrayFrom = (Array.hasOwnProperty('from') ? Array.from : arrayFromPolyfill);

export {
    arrayFrom as default,
    arrayFromPolyfill,
};
