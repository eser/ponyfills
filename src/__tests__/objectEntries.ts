import objectEntries, { objectEntriesPolyfill } from '../objectEntries';

describe('objectEntries', () => {
    test('having the original Object.entries if available', () => {
        // eslint-disable-next-line no-prototype-builtins
        if (Object.hasOwnProperty('entries')) {
            expect(Object.entries).toBe(objectEntries);
        }
    });

    test('basic', () => {
        const result = objectEntriesPolyfill({ a: 1, b: 2, c: 3 });

        expect(result).toEqual([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]);
    });
});
