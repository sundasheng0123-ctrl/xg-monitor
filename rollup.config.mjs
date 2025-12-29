import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import terser from '@rollup/plugin-terser'
import swc from '@rollup/plugin-swc'
import alias from '@rollup/plugin-alias'
import del from 'rollup-plugin-delete'
import nodeResolve from '@rollup/plugin-node-resolve'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/bundle.js',
      format: 'umd',
      name: 'Monitor'
    },
    {
      file: './dist/bundle.min.js',
      format: 'umd',
      sourcemap: true,
      name: 'Monitor',
      plugins: [terser()]
    }
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    alias({
      entries: [
        { find: '@', replacement: resolve(__dirname, 'src') },
        { find: '@u', replacement: resolve(__dirname, 'src/utils') }
      ]
    }),
    nodeResolve({ extensions: ['.ts', '.js'] }),
    swc()
  ]
}