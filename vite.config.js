/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,"./src"),
      '@components': path.resolve(__dirname,"./src/components"),
      '@assets': path.resolve(__dirname,"./src/assets"),
      '@pages': path.resolve(__dirname,"./src/pages"),
      '@stories': path.resolve(__dirname,"./src/stories"),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "namefi-ui",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          'react': 'React'
        }
      }
    },
  },
})
