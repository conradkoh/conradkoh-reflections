<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import '../app.css';
</script>

{#key $page.url.pathname}
	<main class="min-h-screen" in:fade>
		<slot />
	</main>
{/key}
