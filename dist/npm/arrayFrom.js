"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function arrayFromPolyfill(source, mapFn, thisArg) {
    var caller = (thisArg === null || thisArg === undefined) ? this : thisArg;
    if (source === null || source === undefined) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
    }
    if (mapFn !== null && mapFn !== undefined) {
        if (!(mapFn instanceof Function)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        var result = tslib_1.__spread(source).reduce(function (prev, curr, idx) { return (tslib_1.__spread(prev, [mapFn.call(caller, curr, idx)])); }, []);
        return result;
    }
    return tslib_1.__spread(source);
}
exports.arrayFromPolyfill = arrayFromPolyfill;
var arrayFrom = (Array.hasOwnProperty('from') ? Array.from : arrayFromPolyfill);
exports.default = arrayFrom;
//# sourceMappingURL=arrayFrom.js.map