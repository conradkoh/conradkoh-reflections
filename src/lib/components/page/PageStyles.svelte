<div class="page">
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.page {
		@apply min-h-screen font-serif bg-amber-50;
	}
	.page {
		.content {
			@apply px-6 pt-6  max-w-2xl mx-auto;

			:global(p) {
				@apply pt-4 leading-relaxed;
			}
		}
	}
</style>
