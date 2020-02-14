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
    if (mapFn !== null && mapFn !== undefined) {
        if (!(mapFn instanceof Function)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        var result = __spread(source).reduce(function (prev, curr, idx) { return (__spread(prev, [mapFn.call(caller, curr, idx)])); }, []);
        return result;
    }
    return __spread(source);
}
var arrayFrom = (Array.hasOwnProperty('from') ? Array.from : arrayFromPolyfill);

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
