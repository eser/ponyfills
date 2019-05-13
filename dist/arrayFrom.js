"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function arrayFromPolyfill(source, mapFn, thisArg) {
    var caller = (thisArg === null || thisArg === undefined) ? this : thisArg;
    if (source === null || source === undefined) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
    }
    var mapping = (mapFn !== null && mapFn !== undefined);
    if (mapping && !(mapFn instanceof Function)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
    }
    var items = tslib_1.__spread(source);
    if (!mapping) {
        return items;
    }
    var result = items.reduce(function (prev, curr, idx) { return (tslib_1.__spread(prev, [mapFn.call(caller, curr, idx)])); }, []);
    return result;
}
exports.arrayFromPolyfill = arrayFromPolyfill;
var arrayFrom = (Array.hasOwnProperty('from') ? Array.from : arrayFromPolyfill);
exports.default = arrayFrom;
//# sourceMappingURL=arrayFrom.js.map