import type { Writable } from 'svelte/store';

export type SongListContext = {
	activeSongStore: Writable<number>;
	generateIdx: () => number;
};
