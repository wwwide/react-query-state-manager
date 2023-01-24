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
    '.js': 'jsx'
  },
  external: ['react', 'react-dom', 'react-query']
})
