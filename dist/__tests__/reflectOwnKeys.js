"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var reflectOwnKeys_1 = __importStar(require("../reflectOwnKeys"));
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