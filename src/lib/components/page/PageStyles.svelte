<div class="page">
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.page {
		@apply min-h-screen font-serif;
	}
	.page {
		.content {
			@apply px-2 pt-2 max-w-2xl mx-auto;
		}
	}
</style>
