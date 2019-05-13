declare function objectValuesPolyfill(source: Object): string[];
declare const objectValues: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    (o: {}): any[];
};
export { objectValues as default, objectValuesPolyfill, };
