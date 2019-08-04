"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reflectOwnKeys_1 = tslib_1.__importStar(require("../reflectOwnKeys"));
describe('reflectOwnKeys', function () {
    test('having the original Reflect.ownKeys if available', function () {
        if (Reflect.hasOwnProperty('ownKeys')) {
            expect(Reflect.ownKeys).toBe(reflectOwnKeys_1.default);
        }
    });
    test('basic', function () {
        var result = reflectOwnKeys_1.reflectOwnKeysPolyfill({ a: 1, b: 2, c: 3 });
        expect(result).toEqual(['a', 'b', 'c']);
    });
});
//# sourceMappingURL=reflectOwnKeys.js.map