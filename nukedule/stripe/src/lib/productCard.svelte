<script lang="ts">
	export let product: Product = { id: '', name: '', price: 0 };
	console.log(product);
</script>

<div>
	<header><h2>Product Name</h2></header>
	<div>
		Quantity: <strong>4</strong>
	</div>
	<div class="px-4">Price: $10</div>
	<footer>
		<button class="p-2 rounded">Add</button>
		<button class="p-2 rounded">Remove</button>
	</footer>
</div>
