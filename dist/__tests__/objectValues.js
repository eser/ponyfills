"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var objectValues_1 = tslib_1.__importStar(require("../objectValues"));
describe('objectValues', function () {
    test('having the original Object.values if available', function () {
        if (Object.hasOwnProperty('values')) {
            expect(Object.values).toBe(objectValues_1.default);
        }
    });
    test('basic', function () {
        var result = objectValues_1.objectValuesPolyfill({ a: 1, b: 2, c: 3 });
        expect(result).toEqual([1, 2, 3]);
    });
});
//# sourceMappingURL=objectValues.js.map