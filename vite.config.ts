import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Import path module

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 2. Add resolve.alias configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 3. (Optional but recommended for SCSS) Add css.preprocessorOptions
  // This can sometimes help with resolving imports within SCSS files
  css: {
    preprocessorOptions: {
      scss: {
        // Example: Inject global variables/mixins automatically (alternative to @import in every file)
        // additionalData: `@import "@/styles/_variables.scss";\n` 
      },
    },
  },
})

