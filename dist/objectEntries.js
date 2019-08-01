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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var reflectOwnKeys_1 = __importDefault(require("./reflectOwnKeys"));
function objectEntriesPolyfill(source) {
    var keys = reflectOwnKeys_1.default(source);
    var result = keys.reduce(function (prev, curr) {
        if (curr.constructor === String && source.propertyIsEnumerable(curr)) {
            return __spread(prev, [[curr, source[curr]]]);
        }
        return prev;
    }, []);
    return result;
}
exports.objectEntriesPolyfill = objectEntriesPolyfill;
var objectEntries = (Object.hasOwnProperty('entries') ? Object.entries : objectEntriesPolyfill);
exports.default = objectEntries;
//# sourceMappingURL=objectEntries.js.map