import objectValues, { objectValuesPolyfill } from '../objectValues';

describe('objectValues', () => {
    test('having the original Object.values if available', () => {
        // eslint-disable-next-line no-prototype-builtins
        if (Object.hasOwnProperty('values')) {
            expect(Object.values).toBe(objectValues);
        }
    });

    test('basic', () => {
        const result = objectValuesPolyfill({ a: 1, b: 2, c: 3 });

        expect(result).toEqual([ 1, 2, 3 ]);
    });
});
