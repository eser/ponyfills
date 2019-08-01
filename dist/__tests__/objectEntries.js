"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectEntries_1 = __importStar(require("../objectEntries"));
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