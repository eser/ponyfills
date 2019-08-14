declare function arrayFromPolyfill(source: any, mapFn?: any, thisArg?: any): any;
declare const arrayFrom: {
    <T>(arrayLike: ArrayLike<T>): T[];
    <T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    <T>(iterable: Iterable<T> | ArrayLike<T>): T[];
    <T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
} | typeof arrayFromPolyfill;

declare function objectAssignPolyfill(target: Object, ...sources: Array<Object>): Object;
declare const objectAssign: {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
};

declare function objectEntriesPolyfill(source: Object): string[];
declare const objectEntries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
} | typeof objectEntriesPolyfill;

declare function objectValuesPolyfill(source: Object): string[];
declare const objectValues: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    (o: {}): any[];
};

declare function reflectOwnKeysPolyfill(source: Object): (string | symbol)[];
declare const reflectOwnKeys: typeof Reflect.ownKeys;

declare const library: {
    arrayFrom: {
        <T>(arrayLike: ArrayLike<T>): T[];
        <T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        <T>(iterable: Iterable<T> | ArrayLike<T>): T[];
        <T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    } | typeof arrayFromPolyfill;
    arrayFromPolyfill: typeof arrayFromPolyfill;
    objectAssign: {
        <T, U>(target: T, source: U): T & U;
        <T, U, V>(target: T, source1: U, source2: V): T & U & V;
        <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
        (target: object, ...sources: any[]): any;
    };
    objectAssignPolyfill: typeof objectAssignPolyfill;
    objectEntries: {
        <T>(o: {
            [s: string]: T;
        } | ArrayLike<T>): [string, T][];
        (o: {}): [string, any][];
    } | typeof objectEntriesPolyfill;
    objectEntriesPolyfill: typeof objectEntriesPolyfill;
    objectValues: {
        <T>(o: {
            [s: string]: T;
        } | ArrayLike<T>): T[];
        (o: {}): any[];
    };
    objectValuesPolyfill: typeof objectValuesPolyfill;
    reflectOwnKeys: typeof Reflect.ownKeys;
    reflectOwnKeysPolyfill: typeof reflectOwnKeysPolyfill;
};

export default library;
export { arrayFrom, arrayFromPolyfill, objectAssign, objectAssignPolyfill, objectEntries, objectEntriesPolyfill, objectValues, objectValuesPolyfill, reflectOwnKeys, reflectOwnKeysPolyfill };
