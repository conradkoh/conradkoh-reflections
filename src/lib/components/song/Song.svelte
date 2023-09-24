<script lang="ts">
	import type { SongListContext } from '$lib/components/song/SongListContext';
	import { getContext, onMount } from 'svelte';
	let songListCtx = getContext<SongListContext>('songlist');
	let isPartOfList = songListCtx != null;
	let idx = 0;
	let activeSongIdx = -1;
	onMount(() => {
		if (isPartOfList) {
			idx = songListCtx.generateIdx();
			songListCtx.activeSongStore.subscribe((n) => {
				activeSongIdx = n;
			});
		}
	});
	$: active = isPartOfList ? activeSongIdx === idx : true;
</script>

<div class="song" class:active>
	<slot />
</div>

<style lang="scss">
	.song {
		display: initial;
		:global(h3) {
			@apply font-bold text-lg pt-3;
		}
	}
	.song:not(.active) {
		display: none;
	}
</style>
