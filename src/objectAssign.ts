function objectAssignPolyfill(target: Object, ...sources: Array<Object>): Object {
    // eslint-disable-next-line no-restricted-syntax
    for (const source of sources) {
        if (source === null || source === undefined) {
            continue;
        }

        // eslint-disable-next-line no-restricted-syntax, no-prototype-builtins
        for (const key of Object.getOwnPropertyNames(source)) {
            target[key] = source[key];
        }
    }

    return target;
}

// eslint-disable-next-line no-prototype-builtins
const objectAssign = (Object.hasOwnProperty('assign') ? Object.assign : objectAssignPolyfill);

export {
    objectAssign as default,
    objectAssignPolyfill,
};
