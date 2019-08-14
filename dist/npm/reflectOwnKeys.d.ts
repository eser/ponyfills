declare function reflectOwnKeysPolyfill(source: Object): (string | symbol)[];
declare const reflectOwnKeys: typeof Reflect.ownKeys;
export { reflectOwnKeys as default, reflectOwnKeysPolyfill, };
