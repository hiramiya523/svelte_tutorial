<script lang="ts">
	import type { page } from '$app/stores';
  // import {onMount} from 'svelte';
  // import User from '$lib/Domain/User.js';
  // let users: User[] =[];

  // // コンポーネントのDOMレンダリング完了時に実行
  // onMount(async () =>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   users = await res.json();
  // })

  // +page.ts(js)のload()を利用する場合
	import type { PageData } from './$types';
  export let data: PageData;

</script>

<h1>ユーザ一覧</h1>

<ul>
  <!-- {#each users as user}
    <li>{user.name}</li>
  {/each} -->

  {#each data.users as user}
    <li>{user.name}</li>
  {/each}
</ul>