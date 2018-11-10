import assign, { assignPolyfill } from '../assign';

describe('assign', () => {
    test('having the original assign if available', () => {
        if (Object.hasOwnProperty('assign')) {
            expect(Object['assign']).toBe(assign);
        }
    });

    test('ensure skipping null/undefined sources', () => {
        const obj1 = {};
        const obj2: any = null;
        const obj3: any = undefined;

        const result = assignPolyfill(obj1, obj2, obj3);

        expect(result).toBe(obj1);
        expect(result).toEqual(obj1);
    });

    test('assign values right to left', () => {
        const obj1 = {};
        const obj2 = { test: true };

        const result = assignPolyfill(obj1, obj2);

        expect(result).toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(result).toEqual({ test: true });
    });
});
