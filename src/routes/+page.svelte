<script lang="ts">
	import logo from '$lib/assets/logo.png';
	
	const title = "Xel's home!";
	let hasHovered = $state(false);
</script>

<div>
	<img alt="Me :)" class={[hasHovered && "speen"]} src={logo} onpointerover={() => hasHovered=true}/>
	<h1>{title}</h1>
</div>

<style>
		div{
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 5%;
		}
		
		img {
				width: 80%;
		}
		
		@keyframes speen {
				from {
						transform: rotate(0deg) scale(80%);
				}
				
				to {
						transform: rotate(360deg) scale(80%);
				}
    }
		
		.speen{
				animation: speen linear 8s infinite;
		}
		
		h1 {
				text-align: center;
				font-size: 6vh;
		}
</style>