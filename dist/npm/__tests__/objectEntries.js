"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var objectEntries_1 = tslib_1.__importStar(require("../objectEntries"));
describe('objectEntries', function () {
    test('having the original Object.entries if available', function () {
        if (Object.hasOwnProperty('entries')) {
            expect(Object.entries).toBe(objectEntries_1.default);
        }
    });
    test('basic', function () {
        var result = objectEntries_1.objectEntriesPolyfill({ a: 1, b: 2, c: 3 });
        expect(result).toEqual([['a', 1], ['b', 2], ['c', 3]]);
    });
});
//# sourceMappingURL=objectEntries.js.map