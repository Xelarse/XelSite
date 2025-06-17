<script lang="ts">
	import {openPageInNewTab} from '$lib/utility';
	
	let {tailwindTextClass} = $props();

	const socialLinks = [
		{"name": "Bluesky", "url": "https://bsky.app/profile/xelarse.bsky.social", "iconClass": "bx-cloud"},
		{"name": "Github", "url": "https://github.com/Xelarse", "iconClass": "bxl-github"}
	]
</script>

<div>
	<ul>
		{#each socialLinks as link}
			<li>
				<button	onclick={() => openPageInNewTab(link.url)} aria-label="{link.name}">
					<i class="bx {link.iconClass} {tailwindTextClass}"></i>
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
			display: flex;
			flex-direction: row;
			justify-content: center;
	}
	
	ul li {
      border: lightslategrey solid 2px;
      border-radius: 10px;
			margin: 10px;
			
	}
</style>