// https://vite.dev/config/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@budgetflix/core": path.resolve(__dirname, "../../packages/core/src"),
      "@budgetflix/api": path.resolve(__dirname, "../../packages/api/src"),
      "@budgetflix/features": path.resolve(__dirname, "../../packages/features/src")
    }
  }
})