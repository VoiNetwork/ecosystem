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

	<!-- Basic SEO -->
	<title>Voi Ecosystem</title>
	<meta name="description" content="Voi is a revolutionary L1 blockchain designed to fulfill the promises of Web3. A highly performant network truly owned, run, and built by its community." />
	
	<!-- OpenGraph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ecosystem.voi.network" />
	<meta property="og:title" content="Voi Ecosystem - Built by You. Run by You. Owned by You." />
	<meta property="og:description" content="Voi is a revolutionary L1 blockchain designed to fulfill the promises of Web3. A highly performant network truly owned, run, and built by its community." />
	<meta property="og:image" content="https://ecosystem.voi.network/social_preview.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://ecosystem.voi.network" />
	<meta name="twitter:title" content="Voi Ecosystem - Built by You. Run by You. Owned by You." />
	<meta name="twitter:description" content="Voi is a revolutionary L1 blockchain designed to fulfill the promises of Web3. A highly performant network truly owned, run, and built by its community." />
	<meta name="twitter:image" content="https://ecosystem.voi.network/social_preview.png" />
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
