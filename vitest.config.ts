import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        exclude: [
            'node_modules/**/*',
            'dist/**/*',
            'coverage/**/*',
            '.yarn/',
        ],
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        globals: true,
        watch: false,
        minThreads: 1,
        maxThreads: 4,
        testTimeout: 10000,
        coverage: {
            exclude: [
                'node_modules/**/*',
                'coverage/**/*',
                'src/mockData/**/*',
                'e2e/**/*',
                '.yarn/',
                './eslintrc.js',
            ],
            all: true,
            enabled: false,
            provider: 'v8',
            clean: true,
            reporter: ['text', 'lcov', 'html'],
        },
        open: true,
        mockReset: true,
        setupFiles: ['./src/setupTests.ts'],
        environment: 'jsdom',
    },
});
