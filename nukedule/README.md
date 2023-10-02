# 構築
1.
pnpm create svelte@latest front

cd front


pnpm i

```vite.config.js
export default defineConfig({
	plugins: [sveltekit()],
  server: {
    host: true
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
```
pnpm run build
