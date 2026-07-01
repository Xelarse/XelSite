<script lang="ts">
	import {isMobile} from '$lib/windowEvents';
	import MobileCharacterDisplay from '$lib/components/characters/mobileCharacterDisplay.svelte';
	import hrothXel from '$lib/assets/logo.png';
	import bearXel from '$lib/assets/bearXel.png';

	const tempCharacters = [
		{"name": "Bear", "image": bearXel, "corner": "#e8bc8d"},
		{"name": "Hroth", "image": hrothXel, "corner": "#00aaff"},
		{"name": "Charr", "image": "bx-book-open", "corner": "#cc6655"},
	]
</script>

{#if $isMobile}
	{#each tempCharacters as char}
		<MobileCharacterDisplay name={char.name} image={char.image} corner={char.corner} />
	{/each}
{:else}
	<h1> Desktop View</h1>
{/if}

<style>
	
</style>