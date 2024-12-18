<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen bg-voi-dark text-white">
	<main class="min-h-screen">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		@apply bg-voi-dark m-0 p-0;
		min-height: 100vh;
	}

	:global(html) {
		@apply antialiased;
		min-height: 100vh;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
