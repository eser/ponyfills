"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectAssignPolyfill(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (source === null || source === undefined) {
            return;
        }
        Object.getOwnPropertyNames(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}
exports.objectAssignPolyfill = objectAssignPolyfill;
var objectAssign = (Object.hasOwnProperty('assign') ? Object.assign : objectAssignPolyfill);
exports.default = objectAssign;
//# sourceMappingURL=objectAssign.js.map