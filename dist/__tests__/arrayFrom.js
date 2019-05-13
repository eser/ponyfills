"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var arrayFrom_1 = tslib_1.__importStar(require("../arrayFrom"));
describe('arrayFrom', function () {
    test('having the original Array.from if available', function () {
        if (Array.hasOwnProperty('from')) {
            expect(Array.from).toBe(arrayFrom_1.default);
        }
    });
    test('Array from a String', function () {
        var result = arrayFrom_1.arrayFromPolyfill('foo');
        expect(result).toEqual(['f', 'o', 'o']);
    });
    test('Array from a Set', function () {
        var set = new Set(['foo', 'bar', 'baz', 'foo']);
        var result = arrayFrom_1.arrayFromPolyfill(set);
        expect(result).toEqual(['foo', 'bar', 'baz']);
    });
    test('Array from a Map', function () {
        var map = new Map([[1, 2], [2, 4], [4, 8]]);
        var result = arrayFrom_1.arrayFromPolyfill(map);
        expect(result).toEqual([[1, 2], [2, 4], [4, 8]]);
    });
});
//# sourceMappingURL=arrayFrom.js.map