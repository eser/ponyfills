"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var arrayFrom_1 = tslib_1.__importDefault(require("./arrayFrom"));
exports.arrayFrom = arrayFrom_1.default;
var objectAssign_1 = tslib_1.__importDefault(require("./objectAssign"));
exports.objectAssign = objectAssign_1.default;
var objectEntries_1 = tslib_1.__importDefault(require("./objectEntries"));
exports.objectEntries = objectEntries_1.default;
var objectValues_1 = tslib_1.__importDefault(require("./objectValues"));
exports.objectValues = objectValues_1.default;
var reflectOwnKeys_1 = tslib_1.__importDefault(require("./reflectOwnKeys"));
exports.reflectOwnKeys = reflectOwnKeys_1.default;
var library = {
    arrayFrom: arrayFrom_1.default,
    objectAssign: objectAssign_1.default,
    objectEntries: objectEntries_1.default,
    objectValues: objectValues_1.default,
    reflectOwnKeys: reflectOwnKeys_1.default,
};
exports.default = library;
//# sourceMappingURL=index.js.map