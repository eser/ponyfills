declare function objectEntriesPolyfill(source: Object): string[];
declare const objectEntries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
} | typeof objectEntriesPolyfill;
export { objectEntries as default, objectEntriesPolyfill, };
