declare function arrayFromPolyfill(source: any, mapFn?: any, thisArg?: any): any;
declare const arrayFrom: {
    <T>(arrayLike: ArrayLike<T>): T[];
    <T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
    <T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
    <T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
} | typeof arrayFromPolyfill;

declare function objectAssignPolyfill(target: Object, ...sources: Array<Object>): Object;
declare const objectAssign: {
    <T, U>(target: T, source: U): T & U;
    <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
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
        <T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        <T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        <T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
    } | typeof arrayFromPolyfill;
    arrayFromPolyfill: typeof arrayFromPolyfill;
    objectAssign: {
        <T_4, U_2>(target: T_4, source: U_2): T_4 & U_2;
        <T_5, U_3, V>(target: T_5, source1: U_3, source2: V): T_5 & U_3 & V;
        <T_6, U_4, V_1, W>(target: T_6, source1: U_4, source2: V_1, source3: W): T_6 & U_4 & V_1 & W;
        (target: object, ...sources: any[]): any;
    };
    objectAssignPolyfill: typeof objectAssignPolyfill;
    objectEntries: {
        <T_7>(o: {
            [s: string]: T_7;
        } | ArrayLike<T_7>): [string, T_7][];
        (o: {}): [string, any][];
    } | typeof objectEntriesPolyfill;
    objectEntriesPolyfill: typeof objectEntriesPolyfill;
    objectValues: {
        <T_8>(o: {
            [s: string]: T_8;
        } | ArrayLike<T_8>): T_8[];
        (o: {}): any[];
    };
    objectValuesPolyfill: typeof objectValuesPolyfill;
    reflectOwnKeys: typeof Reflect.ownKeys;
    reflectOwnKeysPolyfill: typeof reflectOwnKeysPolyfill;
};

export default library;
export { arrayFrom, arrayFromPolyfill, objectAssign, objectAssignPolyfill, objectEntries, objectEntriesPolyfill, objectValues, objectValuesPolyfill, reflectOwnKeys, reflectOwnKeysPolyfill };
