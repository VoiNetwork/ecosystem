<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Chakra+Petch:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<base href="{base}/" />
</svelte:head>

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

	/* Ensure critical styles are available immediately */
	:global(:root) {
		--voi-dark: #2C037A;
		--voi-light: #672ED9;
	}
</style>
