"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importStar(require("../objectAssign"));
describe('objectAssign', function () {
    test('having the original Object.assign if available', function () {
        if (Object.hasOwnProperty('assign')) {
            expect(Object.assign).toBe(objectAssign_1.default);
        }
    });
    test('ensure skipping null/undefined sources', function () {
        var obj1 = {};
        var obj2 = null;
        var obj3 = undefined;
        var result = objectAssign_1.objectAssignPolyfill(obj1, obj2, obj3);
        expect(result).toBe(obj1);
        expect(result).toEqual(obj1);
    });
    test('assign values right to left', function () {
        var obj1 = {};
        var obj2 = { test: true };
        var result = objectAssign_1.objectAssignPolyfill(obj1, obj2);
        expect(result).toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(result).toEqual({ test: true });
    });
});
//# sourceMappingURL=objectAssign.js.map