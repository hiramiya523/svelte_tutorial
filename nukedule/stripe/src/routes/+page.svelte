<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';

	const products: Product[] = [
		{
			id: '1',
			name: 'Coffee',
			price: 5
		},
		{
			id: '2',
			name: 'Sunglasses',
			price: 10
		},
		{
			id: '3',
			name: 'Water Bottole',
			price: 15
		}
	];
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>SvelteKit 1.0 Store</h1>
		</div>
		{#each products as product}
			<ProductCard product={product} />
		{/each}
		<div class="col-span-3">
			<button class="bg-green-500 rounded-md text-white">Checkout with Stripe API</button>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
