import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import shebang from 'rollup-plugin-add-shebang';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: './index.ts',
    output: {
        format: 'cjs',
        dir: './dist',
    },
    external: [
        'child_process',
        'fs',
        'os',
        'path',
        'util',
    ],
    plugins: [
        commonjs(),
        resolve(),
        typescript(),
        terser(),
        shebang({
            include: 'dist/index.js'
        }),
    ],
}
