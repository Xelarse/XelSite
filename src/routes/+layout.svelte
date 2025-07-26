<script lang="ts">
	import '../app.css';
	import '$lib/fonts/boxicons/boxicons.css';
	import SocialsWidget from '$lib/components/socials.svelte';
	import logo from '$lib/assets/logo.png';
	import { windowDims, isMobile, isInitialized } from '$lib/windowEvents';
	import { fade, fly } from 'svelte/transition';
	let { children } = $props();
	
	let menuToggle = $state(false);
	function toggleMenu() {menuToggle = !menuToggle;}
	function closeMenu() {menuToggle = false;}
	
	const navLinks = [
		{"name": "Projects", "path": "/projects", "iconClass": "bx-code"},
		{"name": "Blogs", "path": "/blogs", "iconClass": "bx-book-open"},
		{"name": "Char", "path": "/ocs", "iconClass": "bxl-baidu"},
	]
</script>
{#if $isInitialized}
	<nav>
		{#if $isMobile}
			{#if menuToggle}
				<button class="bx bx-chevron-left" onclick={toggleMenu} in:fade={{duration: 200}} aria-label="Close Menu"></button>
			{:else}
				<button class="bx bx-menu" onclick={toggleMenu} in:fade={{duration: 200}} aria-label="Menu"></button>	
			{/if}
			<a href="/" onclick={closeMenu}>Xelsite</a>
		{:else}
			<a href="/">Xelsite</a>
			<div class="desktop-nav">
				{#each navLinks as link}
					<a href="{link.path}">
							<i class="bx {link.iconClass}"></i>
							<p>{link.name}</p>
					</a>						
				{/each}
			</div>
		{/if}
		

		<img alt="Me :)" src="{logo}"/>
	</nav>
	
	<!--{#if menuToggle}-->
	<!--	<div class="mobile-nav" in:fly={{x: -50, delay: 150}} out:fly={{x:-200, duration: 150}}>-->
	<!--		<ul>-->
	<!--			{#each navLinks as link}-->
	<!--				<a href="{link.path}" onclick={closeMenu}>-->
	<!--					<li class="text-2xl">-->
	<!--						<i class="bx {link.iconClass}"></i>-->
	<!--						<p>{link.name}</p>-->
	<!--					</li>-->
	<!--				</a>-->
	<!--			{/each}-->
	<!--		</ul>-->
	<!--		<span class="border-b-2 border-solid border-slate-950 mx-20 my-2"></span>-->
	<!--		<SocialsWidget tailwindTextClass="text-5xl"></SocialsWidget>-->
	<!--	</div>-->
	<!--{:else}-->
	<!--	<div class="page-content" in:fly={{x: $windowDims.width + 50, delay: 150}} out:fly={{x: 50, duration: 150}}>-->
	<!--		{@render children()}-->
	<!--	</div>-->
	<!--{/if}-->
{/if}
<style>
	nav {
			width: 97vw;
			height: 6vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
			border: lightslategrey solid 2px;
			border-radius: 10px;
      margin: 1vh auto 0;
  }
	
	nav a {
			font-size: 6vh;
			text-decoration: none;
			padding: 0 2vh;
	}
	
	nav button {
			padding-left: 10px;
			font-size: 6vh;
			margin-right: auto;
	}
	
	nav img {
			padding-right: 1vh;
			height: 5vh;
			margin-left: auto;
	}
	
	.desktop-nav {
			display: flex;
			font-size: 3vh;
	}
	
	.desktop-nav a {
			display: inline-flex;
			align-items: center;
	}

  .desktop-nav i, p{
      font-size: 4vh;
  }
	
	.mobile-nav {
			width: 95%;
			margin-left: 2.5%;
      border: lightslategrey solid 2px;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
	}
	
	.mobile-nav ul li {
			border: lightslategrey solid 2px;
			border-radius: 10px;
			margin: 10px;
			padding: 4px;
	}
	
	.mobile-nav ul a li {
			display: flex;
			flex-direction: row;
			align-items: center;
      justify-content: center;
	}
	
	.mobile-nav ul a li i {
			padding-right: 2%;
	}
	
	.page-content {
			width: 97%;
			margin-left: 1.5%;
	}
	
</style>