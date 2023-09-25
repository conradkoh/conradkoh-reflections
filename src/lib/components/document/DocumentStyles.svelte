<div class="document">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.document {
		@apply min-h-screen;
		@apply font-serif;
	}
	.document > .content {
		@apply min-h-screen max-w-2xl px-6 pt-6 mx-auto;
	}
	.document :global(p) {
		@apply leading-relaxed;
	}
</style>
