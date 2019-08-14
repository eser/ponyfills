"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function objectAssignPolyfill(target) {
    var e_1, _a, e_2, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    try {
        for (var sources_1 = tslib_1.__values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
            var source = sources_1_1.value;
            if (source === null || source === undefined) {
                continue;
            }
            try {
                for (var _c = (e_2 = void 0, tslib_1.__values(Object.getOwnPropertyNames(source))), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var key = _d.value;
                    target[key] = source[key];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (sources_1_1 && !sources_1_1.done && (_a = sources_1.return)) _a.call(sources_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return target;
}
exports.objectAssignPolyfill = objectAssignPolyfill;
var objectAssign = (Object.hasOwnProperty('assign') ? Object.assign : objectAssignPolyfill);
exports.default = objectAssign;
//# sourceMappingURL=objectAssign.js.map