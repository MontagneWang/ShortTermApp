import { fileURLToPath, URL } from 'node:url'
import {defineConfig, type PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import inject from '@rollup/plugin-inject';  // 效果和webpack.ProvidePlugin中相同
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver, VantResolver} from 'unplugin-vue-components/resolvers'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
	// 两个选项打包时使用
	base: './',
	assetsDir:'assets',

  plugins: [
    vue(),
	  AutoImport({
		  imports: ['vue','vue-router', 'pinia'],
		  resolvers: [ElementPlusResolver()],
	  }),
	  Components({
		  resolvers: [ElementPlusResolver(),VantResolver()],
	  }),
	  visualizer({
		  open: true
	  }) as PluginOption,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
	server: {
		port: 5173,
		base: "./ ", //生产环境路径
		proxy: {
			'/api': {
				target: 'https://api.bilibili.com',
				// target: 'http://127.0.0.1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
			}
		}
	}
})
