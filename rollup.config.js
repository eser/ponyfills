import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import cleanup from 'rollup-plugin-cleanup';
import pkg from './package.json';

export default [
    {
        input: './src/index.ts',
        output: [
            // browser-friendly UMD build
            {
                file: './dist/index.umd.js',
                format: 'umd',
                exports: 'named',
                name: pkg.name,
            },
            // browser-friendly UMD build (minified)
            {
                file: './dist/index.umd.min.js',
                format: 'umd',
                exports: 'named',
                name: pkg.name,
            },
            // ES module
            {
                file: './dist/index.esm.js',
                format: 'es',
            },
            // ES module (minified)
            {
                file: './dist/index.esm.min.js',
                format: 'es',
            },
        ],
        external: Object.keys(pkg.dependencies),
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        module: 'es2015',
                    },
                },
            }),
            cleanup({
                comments: 'none',
            }),
            terser({
                include: [ /^.+\.min\.js$/ ],
            }),
            sizeSnapshot(),
        ],
    },
];
