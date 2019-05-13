"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reflectOwnKeys_1 = tslib_1.__importDefault(require("./reflectOwnKeys"));
function objectValuesPolyfill(source) {
    var keys = reflectOwnKeys_1.default(source);
    var result = keys.reduce(function (prev, curr) {
        if (curr.constructor === String && source.propertyIsEnumerable(curr)) {
            return tslib_1.__spread(prev, [source[curr]]);
        }
        return prev;
    }, []);
    return result;
}
exports.objectValuesPolyfill = objectValuesPolyfill;
var objectValues = (Object.hasOwnProperty('values') ? Object.values : objectValuesPolyfill);
exports.default = objectValues;
//# sourceMappingURL=objectValues.js.map