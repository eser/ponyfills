"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function reflectOwnKeysPolyfill(source) {
    return tslib_1.__spread(Object.getOwnPropertyNames(source), Object.getOwnPropertySymbols(source));
}
exports.reflectOwnKeysPolyfill = reflectOwnKeysPolyfill;
var reflectOwnKeys = (Reflect.hasOwnProperty('ownKeys') ? Reflect.ownKeys : reflectOwnKeysPolyfill);
exports.default = reflectOwnKeys;
//# sourceMappingURL=reflectOwnKeys.js.map