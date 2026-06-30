<script lang="ts">
	import {isMobile} from '$lib/windowEvents';
	import MobileCharacterDisplay from '$lib/components/characters/mobileCharacterDisplay.svelte';

	const tempCharacters = [
		{"name": "Bear", "image": "bx-code"},
		{"name": "Hroth", "image": "bx-book-open"},
	]
</script>

{#if $isMobile}
	<h1> Mobile View</h1>
	{#each tempCharacters as char}
		<MobileCharacterDisplay name={char.name} image={char.image} />
	{/each}
{:else}
	<h1> Desktop View</h1>
{/if}

<style>
	
</style>