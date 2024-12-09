import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const phasermsg = () => {
    return {
        name: 'phasermsg',
        buildStart() {
            process.stdout.write(`Building for production...\n`);
        },
        buildEnd() {
            const line = "---------------------------------------------------------";
            const msg = `Project built successfully.`;
            process.stdout.write(`${line}\n${msg}\n${line}\n`);
            
            process.stdout.write(`✨ Done ✨\n`);
        }
    }
}   

export default defineConfig({
    base: './',
    logLevel: 'warning',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                passes: 2
            },
            mangle: true,
            format: {
                comments: false
            }
        }
    },
    server: {
        port: 8080
    },
    plugins: [
        phasermsg(),
        VitePWA({
            registerType: 'autoUpdate', // Automatically update the service worker
            manifest: {
                name: 'Space-Mine',
                short_name: 'SpaceMine',
                description: 'A 2D mining simulator built using Phaser',
                start_url: 'index.html',
                display: 'standalone',
                icons: [
                    {
                        src: 'android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'apple-touch-icon.png',
                        sizes: '180x180',
                        type: 'image/png',
                    },
                    {
                        src: 'favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                    {
                        src: 'favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                    },
                    {
                        src: 'favicon.ico',
                        sizes: '48x48',
                        type: 'image/x-icon',
                    }
                ],
                theme_color: '#ffffff',
                background_color: '#ffffff',
            },
        }),
    ]
});
