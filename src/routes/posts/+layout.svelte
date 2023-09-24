<script>
	import BackLink from '$lib/components/Link/BackLink.svelte';
	import DocumentStyles from '$lib/components/document/DocumentStyles.svelte';
</script>

<DocumentStyles>
	<div class="back-btn">
		<BackLink>Back</BackLink>
	</div>
	<slot />
</DocumentStyles>

<style>
	.back-btn {
		@apply absolute top-5 inline-block opacity-40;
	}
	.back-btn:hover {
		@apply opacity-100;
	}
</style>
