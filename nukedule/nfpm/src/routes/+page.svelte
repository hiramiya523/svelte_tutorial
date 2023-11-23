<script lang="ts">
	import { ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
	<section class="flex space-x-2">
		<a
			class="btn btn-filled-primary"
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noreferrer">SvelteKit</a
		>
		<a
			class="btn btn-filled-accent"
			href="https://tailwindcss.com/"
			target="_blank"
			rel="noreferrer">Tailwind</a
		>
		<a class="btn btn-filled-tertiary" href="https://github.com/" target="_blank" rel="noreferrer"
			>GitHub</a
		>
	</section>
	<ConicGradient stops={conicStops} spin>Loading</ConicGradient>
</div>
