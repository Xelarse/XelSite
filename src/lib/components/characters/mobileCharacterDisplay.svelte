<script lang="ts">
	
	let {image, name, corner} = $props();
	let hovering = $state(false);
</script>

<div style="--corner-colour: {corner};" class="container"
     onpointerenter={() => hovering = true}
     onpointerleave={() => hovering = false}>
	<div 
		class={[hovering && "hoverEnter", !hovering && "hoverExit", "img-container"]}
	>
		<img src={image} alt="{name} xel" />
	</div>
	<h1>{name}</h1>
</div>

<style>
	.container {
			display: flex;
			flex-direction: column;
			margin: 3vh 6vw;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
      border: lightslategrey solid 2px;
      border-radius: 10px;
			height: 25vh;
	}
	
	.img-container {
      width: 100%;
      height: 100%;
      background: linear-gradient(145deg, transparent 70%, var(--corner-colour) 20%);
	}
	
	img {
      width: 100%;
      height: 100%;
			object-fit: cover;
	}
	
	h1 {
			position: relative;
			bottom: 35%;
			right: 3%;
			text-align: right;
	}

  @keyframes hoverAnimEnter {
      from {
          background: linear-gradient(145deg, transparent 70%, var(--corner-colour) 20%);
      }

      to {
          background: linear-gradient(145deg, transparent 40%, var(--corner-colour) 20%);
      }
  }

  @keyframes hoverAnimExit {
      from {
          background: linear-gradient(145deg, transparent 40%, var(--corner-colour) 20%);
      }

      to {
          background: linear-gradient(145deg, transparent 70%, var(--corner-colour) 20%);
      }
  }

  .hoverEnter{
      animation: hoverAnimEnter linear 3s;
  }

  .hoverExit{
      animation: hoverAnimExit linear 3s;
  }
	
</style>