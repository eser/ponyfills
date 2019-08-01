"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrayFrom_1 = __importStar(require("../arrayFrom"));
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