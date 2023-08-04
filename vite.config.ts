import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		port: 3000,
	},
	resolve: {
		alias: {
			'@src': '/src',
			'@components': '/src/components',
			'@pages': '/src/pages',
		},
	},
	plugins: [react()],
});
