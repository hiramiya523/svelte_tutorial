<script lang="ts">
	import CodeSnippetCard from '../CodeSnippetCard.svelte';
	import { addSnippet, snippetStore } from '../SnippetStore';
	import type { PageData } from './$types';

	export let data: PageData;

	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6 text-red-500">Create A Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label for="label">
				<span>Snippet Title</span>
				<input
					class="input"
					type="text"
					placeholder="Enter title here"
					bind:value={formData.title}
				/>
			</label>
			<label for="label">
				<span>Programming Language</span>
				<select class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="typescript">TypeScript</option>
				</select>
			</label>
			<label for="label">
				<span>Code Snippet</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter your snippet code here"
					bind:value={formData.code}
				/>
			</label>
			<button
				type="button"
				class="btn btn-sm variant-filled-primary"
				on:click={() => addSnippet(formData)}
				>Create Snippet
			</button>
		</div>
		<div class="text-center py-6">
			<h2>My Code Sniipets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<!-- プロパティ名と、引数が一緒だと省略される -->
			<CodeSnippetCard {snippet} {index} />
		{/each}
	</div>
</div>
