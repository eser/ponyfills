import reflectOwnKeys from './reflectOwnKeys';

function objectValuesPolyfill(source: Object): string[] {
    const keys = reflectOwnKeys(source);

    const result = keys.reduce(
        (prev, curr) => {
            // eslint-disable-next-line no-prototype-builtins
            if (curr.constructor === String && source.propertyIsEnumerable(curr)) {
                return [ ...prev, source[curr] ];
            }

            return prev;
        },
        [] as any[],
    );

    return result;
}

// eslint-disable-next-line no-prototype-builtins
const objectValues = (Object.hasOwnProperty('values') ? Object.values : objectValuesPolyfill);

export {
    objectValues as default,
    objectValuesPolyfill,
};
