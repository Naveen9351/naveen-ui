import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.css'],
    }),
    postcss({
      modules: true,
      extract: false,
    }),
    external(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      include: 'src/**',
      presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { 'runtime': 'automatic' }]
      ],
      exclude: 'node_modules/**',
    }),
    terser(),  // Minifies output
  ],
};