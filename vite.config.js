import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change this to match your theme file path
const wp_theme_route = 'wp-content/themes/our-theme';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb','**/*.gltf'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          // set img folder
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }  
          // set models folder
          else if (/glb|gltf/i.test(extType)) {
            extType = 'models';
          }   
          // return assets in correct folders 
          return wp_theme_route + `/assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: wp_theme_route + '/assets/js/[name]-[hash].js',
        entryFileNames: wp_theme_route + '/assets/js/[name]-[hash].js',
      },
    },
  },
});

