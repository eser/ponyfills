"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function arrayFromPolyfill(source, mapFn, thisArg) {
    var caller = (thisArg === null || thisArg === undefined) ? this : thisArg;
    if (source === null || source === undefined) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
    }
    var mapping = (mapFn !== null && mapFn !== undefined);
    if (mapping && !(mapFn instanceof Function)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
    }
    var items = __spread(source);
    if (!mapping) {
        return items;
    }
    var result = items.reduce(function (prev, curr, idx) { return (__spread(prev, [mapFn.call(caller, curr, idx)])); }, []);
    return result;
}
exports.arrayFromPolyfill = arrayFromPolyfill;
var arrayFrom = (Array.hasOwnProperty('from') ? Array.from : arrayFromPolyfill);
exports.default = arrayFrom;
//# sourceMappingURL=arrayFrom.js.map