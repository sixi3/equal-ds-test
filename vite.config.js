const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react-swc').default;

module.exports = defineConfig({
  plugins: [react()],
});


