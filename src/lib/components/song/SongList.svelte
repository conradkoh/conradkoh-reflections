<script lang="ts">
	import { browser } from '$app/environment';
	import type { SongListContext } from '$lib/components/song/SongListContext';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	let activeSongStore = writable(0);
	let activeSongIdx = -1;
	activeSongStore.subscribe((n) => (activeSongIdx = n));
	let songCount = 0;
	setContext<SongListContext>('songlist', {
		activeSongStore: activeSongStore,
		generateIdx: () => {
			songCount += 1;
			return songCount - 1;
		}
	});

	function next() {
		activeSongStore.update((n) => (n + 1) % songCount);
	}
	function prev() {
		activeSongStore.update((n) => (songCount + n - 1) % songCount);
	}
</script>

{#if browser}
	<div class="content">
		<div class="flex flex-row mb-3">
			<div class="flex-grow">Song {activeSongIdx + 1} of {songCount}</div>
			<button class="px-3 underline" on:click={prev}>Prev</button>
			<button class="pl-3 underline" on:click={next}>Next</button>
		</div>

		<slot />
	</div>
{/if}

<style>
	.content {
		@apply px-4 py-4 border shadow;
	}
</style>
