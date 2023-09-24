<script lang="ts">
	import { browser } from '$app/environment';
	let finalURL: string;
	if (browser) {
		let url = new URL(window.location.href);
		let backurl = url.searchParams.get('back_url');
		if (backurl) {
			finalURL = backurl;
		} else {
			finalURL = '/';
		}
	}
</script>

<a href={finalURL}>
	<slot />
</a>
