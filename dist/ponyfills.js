/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

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
var arrayFrom = (Array.hasOwnProperty('from') ? Array.from : arrayFromPolyfill);

function objectAssignPolyfill(target) {
    var e_1, _a, e_2, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    try {
        for (var sources_1 = __values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
            var source = sources_1_1.value;
            if (source === null || source === undefined) {
                continue;
            }
            try {
                for (var _c = (e_2 = void 0, __values(Object.getOwnPropertyNames(source))), _d = _c.next(); !_d.done; _d = _c.next()) {
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
var objectAssign = (Object.hasOwnProperty('assign') ? Object.assign : objectAssignPolyfill);

function reflectOwnKeysPolyfill(source) {
    return __spread(Object.getOwnPropertyNames(source), Object.getOwnPropertySymbols(source));
}
var reflectOwnKeys = (Reflect.hasOwnProperty('ownKeys') ? Reflect.ownKeys : reflectOwnKeysPolyfill);

function objectEntriesPolyfill(source) {
    var keys = reflectOwnKeys(source);
    var result = keys.reduce(function (prev, curr) {
        if (curr.constructor === String && source.propertyIsEnumerable(curr)) {
            return __spread(prev, [[curr, source[curr]]]);
        }
        return prev;
    }, []);
    return result;
}
var objectEntries = (Object.hasOwnProperty('entries') ? Object.entries : objectEntriesPolyfill);

function objectValuesPolyfill(source) {
    var keys = reflectOwnKeys(source);
    var result = keys.reduce(function (prev, curr) {
        if (curr.constructor === String && source.propertyIsEnumerable(curr)) {
            return __spread(prev, [source[curr]]);
        }
        return prev;
    }, []);
    return result;
}
var objectValues = (Object.hasOwnProperty('values') ? Object.values : objectValuesPolyfill);

var library = {
    arrayFrom: arrayFrom,
    arrayFromPolyfill: arrayFromPolyfill,
    objectAssign: objectAssign,
    objectAssignPolyfill: objectAssignPolyfill,
    objectEntries: objectEntries,
    objectEntriesPolyfill: objectEntriesPolyfill,
    objectValues: objectValues,
    objectValuesPolyfill: objectValuesPolyfill,
    reflectOwnKeys: reflectOwnKeys,
    reflectOwnKeysPolyfill: reflectOwnKeysPolyfill,
};

export default library;
export { arrayFrom, arrayFromPolyfill, objectAssign, objectAssignPolyfill, objectEntries, objectEntriesPolyfill, objectValues, objectValuesPolyfill, reflectOwnKeys, reflectOwnKeysPolyfill };
