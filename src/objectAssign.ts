function objectAssignPolyfill(target: Object, ...sources: Array<Object>): Object {
    sources.forEach((source) => {
        if (source === null || source === undefined) {
            return;
        }

        Object.getOwnPropertyNames(source).forEach((key) => {
            // eslint-disable-next-line no-param-reassign
            target[key] = source[key];
        });
    });

    return target;
}

// eslint-disable-next-line no-prototype-builtins
const objectAssign = (Object.hasOwnProperty('assign') ? Object.assign : objectAssignPolyfill);

export {
    objectAssign as default,
    objectAssignPolyfill,
};
