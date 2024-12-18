<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<base href="{base}/" />
</svelte:head>

<div class="min-h-screen bg-voi-dark text-white">
	<main class="min-h-screen">
		<slot />
	</main>
</div>

<style>
	/* Base styles */
	:global(body) {
		@apply bg-voi-dark;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Select and Option Styles */
	:global(select) {
		@apply appearance-none;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
		background-position: right 0.5rem center;
		background-repeat: no-repeat;
		background-size: 1.5em 1.5em;
		padding-right: 2.5rem;
	}

	:global(select option) {
		@apply bg-voi-dark text-white;
		padding: 0.5rem;
	}

	/* Ensure backdrop-blur works properly */
	:global(.backdrop-blur-xl) {
		-webkit-backdrop-filter: blur(16px);
		backdrop-filter: blur(16px);
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
