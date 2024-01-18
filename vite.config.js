import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, join } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "@root", replacement: resolve(__dirname)},
      {find: "@source", replacement: resolve(join(__dirname, "src"))},
      {find: "@assets", replacement: resolve(join(__dirname, "src/assets"))},
      {find: "@components", replacement: resolve(join(__dirname, "src/components"))}
    ]
  }
})
