<script lang="ts">
	import { isMobile } from '$lib/windowEvents';
	import MobileCharacterDisplay from '$lib/components/characters/mobileCharacterDisplay.svelte';
	import DesktopCharacterDisplay from '$lib/components/characters/desktopCharacterDisplay.svelte';
	import hrothXel from '$lib/assets/logo.png';
	import bearXel from '$lib/assets/bearXel.png';

	const tempCharacters = [
		{"name": "Bear", "image": bearXel, "corner": "#e8bc8d"},
		{"name": "Hroth", "image": hrothXel, "corner": "#00aaff"},
		{"name": "Charrrrrrrrrrr", "image": "bx-book-open", "corner": "#cc6655"},
		{"name": "Charr", "image": "bx-book-open", "corner": "#cc6655"},
		{"name": "Charr", "image": "bx-book-open", "corner": "#cc6655"},
	]
</script>

{#if $isMobile}
	{#each tempCharacters as char}
	<MobileCharacterDisplay name={char.name} image={char.image} corner={char.corner} />
	{/each}
{:else}
	<div class="desktop-container">
		{#each tempCharacters as char}
			<DesktopCharacterDisplay name={char.name} image={char.image} corner={char.corner} />
		{/each}
	</div>
{/if}


<style>
	.desktop-container {
			display: flex;
			flex-flow: row wrap;
			height: 100%;
			width: 100%;
			justify-content: center;
	}
</style>