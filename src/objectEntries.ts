import reflectOwnKeys from './reflectOwnKeys';

function objectEntriesPolyfill(source: Object): string[] {
    const keys = reflectOwnKeys(source);

    const result = keys.reduce(
        (prev, curr) => {
            // eslint-disable-next-line no-prototype-builtins
            if (curr.constructor === String && source.propertyIsEnumerable(curr)) {
                return [ ...prev, [ curr, source[curr] ] ];
            }

            return prev;
        },
        [] as any[],
    );

    return result;
}

// eslint-disable-next-line no-prototype-builtins
const objectEntries = (Object.hasOwnProperty('entries') ? Object.entries : objectEntriesPolyfill);

export {
    objectEntries as default,
    objectEntriesPolyfill,
};
