<script lang="ts">
	import type { SongListContext } from '$lib/components/song/SongListContext';
	import { getContext, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
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

{#if active}
	<div in:fade class="song">
		<slot />
	</div>
{/if}

<style>
	.song {
		display: initial;
	}
	.song :global(h3) {
		@apply font-bold text-lg pt-3;
	}
</style>
