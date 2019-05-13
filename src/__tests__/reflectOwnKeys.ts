import reflectOwnKeys, { reflectOwnKeysPolyfill } from '../reflectOwnKeys';

describe('reflectOwnKeys', () => {
    test('having the original Reflect.ownKeys if available', () => {
        // eslint-disable-next-line no-prototype-builtins
        if (Reflect.hasOwnProperty('ownKeys')) {
            expect(Reflect.ownKeys).toBe(reflectOwnKeys);
        }
    });

    test('basic', () => {
        const result = reflectOwnKeysPolyfill({ a: 1, b: 2, c: 3 });

        expect(result).toEqual([ 'a', 'b', 'c' ]);
    });
});
