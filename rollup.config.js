import typescript from 'rollup-plugin-typescript';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/index.min.js',
        format: 'umd',
        name: 'ponyfills',
        compact: true,
        sourcemap: true,
    },
    plugins: [
        typescript({
            tsconfig: './',
        }),
    ],
};
