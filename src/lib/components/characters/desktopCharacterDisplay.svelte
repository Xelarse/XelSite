<script lang="ts">
	let {image, name, corner} = $props();
	let hovering = $state(false);
</script>


<div style="--corner-colour: {corner}; --gradient-length: {hovering ? "40%" : "20%"};"
		 class="container"
		 role="link"
		 tabindex="0"
		 onpointerenter={() => hovering = true}
		 onpointerleave={() => hovering = false}>
	<img src={image} alt="{name} xel" />
	<div class="banner-gradient"></div>
	<h1>{name}</h1>
</div>

<style>
	.container {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
			height: 70vh;
			width: 30%;
			position: relative;
			margin: 1% 1%;
      border-radius: 2%;
	}

	.banner-gradient {
			width: 100%;
			height: 100%;
			position: absolute;
      background: linear-gradient(to top, var(--corner-colour) 5%, transparent var(--gradient-length));
      border-radius: 2%;
	}
	
	img {
      width: 100%;
      height: 100%;
      position: absolute;
			object-fit: cover;
      border-radius: 2%;
	}
	
	h1 {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			text-align: center;
	}
</style>