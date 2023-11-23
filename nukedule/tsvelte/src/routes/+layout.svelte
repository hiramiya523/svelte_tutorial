<!-- 共通部分 -->
<script lang="ts">
	import { page } from '$app/stores';
	$: pathname = $page.url.pathname;
	$: console.log(pathname);
</script>

<nav>
	<!-- 動的なクラス class:クラス名={条件} -->
	<!-- カレントパスによって、CSSの適応を変化させる -->
	<a href="/" class:active={pathname === '/'}>home</a>
	<a href="/about" class:active={pathname === '/about'}>about</a>
	<a href="/user" class:active={pathname === '/user'}>user</a>
	<a href="/todo" class:active={pathname === '/todo'}>todo</a>
</nav>

<!-- slotに、このファイルを利用するページファイルを挿入する -->
<!-- ファイル作成するだけで、そのスコープに設定は適応される -->
<slot />

<style>
	.active {
		color: red;
		font-weight: 900;
	}
</style>
