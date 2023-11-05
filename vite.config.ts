import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { resolve } from "path";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons"; // 支持svg
//
export default defineConfig(({ mode, command }) => {
  // 获取当前的模式
  console.log('🚀🚀 ~ 当前阶段', command);
  console.log('🚀🚀 ~ 当前运行环境', mode);
  return {
    base: './',
    // base: '/myblog/',
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [resolve(process.cwd(), "src/icons/svg")],
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@v': path.resolve(__dirname, 'src/views'),
        '@c': path.resolve(__dirname, 'src/components'),
        '@u': path.resolve(__dirname, 'src/utils'),  
        '@a': path.resolve(__dirname, 'src/assets'),
      },
    },
    css: {
      preprocessorOptions: {
        // 引入全局scss
        scss: {
          additionalData: `@import "./src/styles/base.scss";`,
        },
      },
    },
    server: {
      proxy: {
        '/juejin_api/': {
          target: 'https://juejin.palxp.com/',
          changeOrigin: true,
          rewrite: (apiPath: string) => apiPath.replace(/^\/juejin_api/, ''),
        },
        "/wapi": {
          //要访问的跨域的域名
          target: "http://mrzym.top:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/wapi/, ""),
        },
      },
    },
  };
});
