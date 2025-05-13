import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 1235,
    host: true,
    allowedHosts: [
      '7954489d-2573-46dc-af4d-2ccf16c539fe-00-1qihhwn7eh3h3.sisko.replit.dev',
      'localhost'
    ]
  },
  css: {
    postcss: './postcss.config.js',
    modules: {
      localsConvention: 'camelCase'
    }
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})