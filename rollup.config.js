import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator'
import pkg from './package.json';

export default {
  external: Object.keys(pkg['dependencies'] || []),
  input: './src/index.ts',
  plugins: [
    typescript({
      tsconfigDefaults: { compilerOptions: {} },
      tsconfig: "tsconfig.json",
      tsconfigOverride: { compilerOptions: {} },
      useTsconfigDeclarationDir: true
    }),
    terser(),
    json(),
    resolve({
      mainFields: ['module', 'main']
    }),
    obfuscatorPlugin({
      compact: true,
      sourceMap: false
    })
  ],
  output: [
    // ES module (for bundlers) build.
    {
      format: 'esm',
      file: pkg.module
    },
    // CommonJS (for Node) build.
    {
      format: 'cjs',
      file: pkg.main
    },
    // browser-friendly UMD build
    {
      format: 'umd',
      file: pkg.browser,
      name: pkg.name
        .replace(/^.*\/|\.js$/g, '')
        .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
    }
  ],
  watch: {
    exclude: 'node_modules/**',
    include: 'src/**'
  }
}