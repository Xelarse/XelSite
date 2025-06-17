<script lang="ts">
	import logo from '$lib/assets/logo.png';
	
	const title = "Xel's home!";
	const body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit dolores. Quaerat, facilis voluptates iste suscipit totam, culpa cum tempora sit dolorum perferendis quisquam enim quo alias maxime magnam sed!"
</script>

<div class="img-container">
	<img alt="Me :)" src="{logo}"/>
</div>

<h1>{title}</h1>

<p>{body}</p>

<style>
    .img-container {
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
				padding: 0 10%;
    }
		
		.img-container img {
				max-height: 100%;
				width: auto;
		}
		
		h1 {
				height: 23vh;
				width: auto;
				text-align: center;
				font-size: 15vw;
				padding-top: 5%;
		}
		
		p {
				text-align: center;
				font-size: 4vw;
		}
</style>