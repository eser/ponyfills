import arrayFrom from './arrayFrom';
import objectAssign from './objectAssign';
import objectEntries from './objectEntries';
import objectValues from './objectValues';
import reflectOwnKeys from './reflectOwnKeys';
declare const library: {
    arrayFrom: {
        <T>(arrayLike: ArrayLike<T>): T[];
        <T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        <T>(iterable: Iterable<T> | ArrayLike<T>): T[];
        <T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    } | typeof import("./arrayFrom").arrayFromPolyfill;
    objectAssign: {
        <T, U>(target: T, source: U): T & U;
        <T, U, V>(target: T, source1: U, source2: V): T & U & V;
        <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
        (target: object, ...sources: any[]): any;
    };
    objectEntries: {
        <T>(o: {
            [s: string]: T;
        } | ArrayLike<T>): [string, T][];
        (o: {}): [string, any][];
    } | typeof import("./objectEntries").objectEntriesPolyfill;
    objectValues: {
        <T>(o: {
            [s: string]: T;
        } | ArrayLike<T>): T[];
        (o: {}): any[];
    };
    reflectOwnKeys: typeof Reflect.ownKeys;
};
export { library as default, arrayFrom, objectAssign, objectEntries, objectValues, reflectOwnKeys, };
