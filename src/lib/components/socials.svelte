<script lang="ts">
	import {openPageInNewTab} from '$lib/utility';
	
	let {iconTextSize} = $props();

	const socialLinks = [
		{"name": "Bluesky", "url": "https://bsky.app/profile/xelarse.bsky.social", "iconClass": "bx-cloud"},
		{"name": "Github", "url": "https://github.com/Xelarse", "iconClass": "bxl-github"}
	]
</script>

<div>
	<ul>
		{#each socialLinks as link}
				<button	onclick={() => openPageInNewTab(link.url)} aria-label="{link.name}">
					<i class="bx {link.iconClass}" style="font-size: {iconTextSize};"></i>
				</button>
		{/each}
	</ul>
</div>

<style>
	ul {
			display: flex;
			flex-direction: row;
			justify-content: center;
	}
	
	ul button {
      border: lightslategrey solid 2px;
      border-radius: 10px;
			margin: 10px;
			
	}
</style>