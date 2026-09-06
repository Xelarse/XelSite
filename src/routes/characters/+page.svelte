<script lang="ts">
	import CharacterDisplay from '$lib/components/characters/characterDisplay.svelte';
	import hrothXel from '$lib/assets/logo.png';
	import bearXel from '$lib/assets/bearXel.png';

	const tempCharacters = [
		{"name": "Bear", "image": bearXel, "corner": "#e8bc8d"},
		{"name": "Hroth", "image": hrothXel, "corner": "#00aaff"},
		{"name": "Charr", "image": "bx-book-open", "corner": "#cc6655"},
		{"name": "Charr", "image": "bx-book-open", "corner": "#cc6655"},
		{"name": "Charr", "image": "bx-book-open", "corner": "#cc6655"},
	]
</script>

{#each tempCharacters as char}
	<CharacterDisplay name={char.name} image={char.image} corner={char.corner} />
{/each}

<style>
	
</style>