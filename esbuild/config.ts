import { BuildOptions, BuildFailure, BuildResult } from 'esbuild'

export const buildConfig = (): BuildOptions => ({
  entryPoints: ['./src/index.ts'],
  outdir: 'dist',
  bundle: true,
  metafile: true,
  sourcemap: false,
  minify: true,
  splitting: true,
  format: 'esm',
  color: true,
  publicPath: '/',
  loader: {
    '.png': 'dataurl',
    '.svg': 'text',
    '.jpg': 'file',
    '.js': 'jsx'
  }
})
