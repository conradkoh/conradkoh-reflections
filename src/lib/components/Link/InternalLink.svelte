<script lang="ts">
	import { browser } from '$app/environment';

	export let href: string;
	let finalURL: string;
	if (browser) {
		let url = new URL(href, window.location.href);
		url.searchParams.append('back_url', window.location.href);
		finalURL = url.toString();
	}
</script>

<a href={finalURL}>
	<slot />
</a>
