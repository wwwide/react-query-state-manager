import { BuildOptions, Format } from 'esbuild'

export const buildConfig = (format: Format): BuildOptions => ({
  format,
  entryPoints: ['./src/index.ts'],
  outdir: `dist/${format}`,
  bundle: true,
  metafile: true,
  sourcemap: false,
  minify: true,
  splitting: false,
  color: true,
  publicPath: '/',
  loader: {
    '.js': 'jsx'
  },
  external: ['react', 'react-dom', 'react-query']
})
