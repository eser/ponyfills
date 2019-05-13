function reflectOwnKeysPolyfill(source: Object): (string | symbol)[] {
    return [ ...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source) ];
}

// eslint-disable-next-line no-prototype-builtins
const reflectOwnKeys = (Reflect.hasOwnProperty('ownKeys') ? Reflect.ownKeys : reflectOwnKeysPolyfill);

export {
    reflectOwnKeys as default,
    reflectOwnKeysPolyfill,
};
