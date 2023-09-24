<div class="document">
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.document {
		@apply min-h-screen;
		@apply font-serif;
		background-color: rgba(248, 245, 240, 1);

		.content {
			@apply min-h-screen max-w-2xl px-6 pt-6 mx-auto;
		}
		:global(p) {
			@apply pt-4 leading-relaxed;
		}
	}
</style>
