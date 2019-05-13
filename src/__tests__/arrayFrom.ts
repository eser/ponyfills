import arrayFrom, { arrayFromPolyfill } from '../arrayFrom';

describe('arrayFrom', () => {
    test('having the original Array.from if available', () => {
        // eslint-disable-next-line no-prototype-builtins
        if (Array.hasOwnProperty('from')) {
            expect(Array.from).toBe(arrayFrom);
        }
    });

    test('Array from a String', () => {
        const result = arrayFromPolyfill('foo');

        expect(result).toEqual([ 'f', 'o', 'o' ]);
    });

    test('Array from a Set', () => {
        const set = new Set([ 'foo', 'bar', 'baz', 'foo' ]);
        const result = arrayFromPolyfill(set);

        expect(result).toEqual([ 'foo', 'bar', 'baz' ]);
    });

    test('Array from a Map', () => {
        const map = new Map([ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]);
        const result = arrayFromPolyfill(map);

        expect(result).toEqual([ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]);
    });
});
