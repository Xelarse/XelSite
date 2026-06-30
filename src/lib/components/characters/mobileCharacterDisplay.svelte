<script lang="ts">
	
	let {image, name} = $props();
</script>

<div>
	<img src={image} alt="{name} xel" />
	<h1>{name}</h1>
</div>

<style>
	div {
			display: flex;
			flex-direction: column;
			margin: 5vh 6vw;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
      border: lightslategrey solid 2px;
      border-radius: 10px;
	}
</style>