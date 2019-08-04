import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/index.ts',
    output: [
        {
            file: './dist/index.min.js',
            format: 'umd',
            exports: 'named',
            name: 'ponyfills',
        },
        {
            file: './dist/index.esm.min.js',
            format: 'es',
        },
    ],
    external: [],
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: 'es2015',
                },
            },
        }),
        terser({
            include: [ /^.+\.min\.js$/ ],
        }),
    ],
};
