import arrayFrom, { arrayFromPolyfill } from './arrayFrom';
import objectAssign, { objectAssignPolyfill } from './objectAssign';
import objectEntries, { objectEntriesPolyfill } from './objectEntries';
import objectValues, { objectValuesPolyfill } from './objectValues';
import reflectOwnKeys, { reflectOwnKeysPolyfill } from './reflectOwnKeys';
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
export { library as default, arrayFrom, arrayFromPolyfill, objectAssign, objectAssignPolyfill, objectEntries, objectEntriesPolyfill, objectValues, objectValuesPolyfill, reflectOwnKeys, reflectOwnKeysPolyfill, };
