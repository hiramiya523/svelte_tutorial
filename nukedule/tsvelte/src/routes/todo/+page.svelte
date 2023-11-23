<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Todo</h1>

<form method="post">
	<div>
		<label for="name">Name:</label>
		<input name="name" id="id-1" />
	</div>
	<button type="submit">Add</button>
</form>

<ul>
	{#each data.todos as todo}
		<li>{todo.name}</li>
	{/each}
</ul>
