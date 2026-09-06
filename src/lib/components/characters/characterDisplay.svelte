<script lang="ts">
	import {isMobile} from '$lib/windowEvents';
	
	let {image, name, corner} = $props();
	let hovering = $state(false);
</script>


{#if $isMobile}
		<div style="--corner-colour: {corner}; --gradient-length: {hovering ? "40%" : "70%"}; --gradient-pitch: {hovering ? "180deg" : "145deg"};"
				 class="container"
				 role="link"
				 tabindex="0"
				 onpointerenter={() => hovering = true}
				 onpointerleave={() => hovering = false}>
			<img src={image} alt="{name} xel" />
			<div class="banner-gradient"></div>
			<h1>{name}</h1>

		</div>
	{:else}
	<div></div>
{/if}

<style>
	.container {
			display: flex;
			flex-direction: column;
			margin: 3vh 6vw;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
      border: lightslategrey solid 2px;
      border-radius: 10px;
			height: 25vh;
			position: relative;
	}

	.banner-gradient {
			width: 100%;
			height: 100%;
			position: absolute;
      background: linear-gradient(var(--gradient-pitch), transparent var(--gradient-length), var(--corner-colour) 80%);
	}
	
	img {
      width: 100%;
      height: 100%;
			object-fit: cover;
			position: absolute;
	}
	
	h1 {
			position: absolute;
			bottom: -5%;
			right: 5%;
			text-align: right;
	}
</style>