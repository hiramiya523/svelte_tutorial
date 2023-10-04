<script lang="ts">
  // import {page} from '$app/stores'
	import type { PageData } from './$types';
  // $: id = $page.params.id;

  export let data :PageData;
</script>
<h1>ユーザー詳細画面</h1>
<p>ユーザーid:{data.user.id}</p>
<p>name: {data.user.name}</p>