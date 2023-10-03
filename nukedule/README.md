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



SvelteKitのページでは、レンダリングの前にデータを読み込む場合、
+page.ts または +page.server.ts で load 関数をエクスポートします。
ここでは load 関数をサーバー上でのみ実行したいので +page.server.ts を作成します。
https://kit.svelte.jp/docs/load

```
load 関数の戻り値は page で data プロパティを介して使用することができます。
src/routes/blog/[slug]/+page.js

<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

生成される $types モジュールのおかげで、完全な型安全性を確保できます。
```