<script lang="ts">
	import '../app.css';
	import '$lib/fonts/boxicons/boxicons.css';
	import SocialsWidget from '$lib/components/socials.svelte';
	import logo from '$lib/assets/logo.png';
	import { windowDims, isMobile, isInitialized } from '$lib/windowEvents';
	import { fade, fly } from 'svelte/transition';
	let { children } = $props();
	
	let menuActive = $state(false);
	function toggleMenu() {menuActive = !menuActive;}
	function closeMenu() {menuActive = false;}
	
	const navLinks = [
		{"name": "Projects", "path": "/projects", "iconClass": "bx-code"},
		{"name": "Blogs", "path": "/blogs", "iconClass": "bx-book-open"},
		{"name": "Characters", "path": "/oc", "iconClass": "bxl-baidu"},
	]
</script>

<div style="display: grid;">
	
{#if $isInitialized}
	<nav>
		{#if $isMobile}

			{#if menuActive}
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

	{#if $isMobile}
		{#if menuActive}
			<div class="mobile-menu" in:fly={{x: -50, delay: 150}} out:fly={{x:-200, duration: 150}}>
				<ul>
					{#each navLinks as link}
						<a href="{link.path}" onclick={closeMenu}>
							<i class="bx {link.iconClass}"></i>
							<p>{link.name}</p>
						</a>
						<hr/>
					{/each}
				</ul>
				<SocialsWidget iconTextSize="6vh"></SocialsWidget>
			</div>
		{:else}
			<div class="page-content" in:fly={{x: $windowDims.width + 50, delay: 150}} out:fly={{x: 50, duration: 150}}>
				{@render children()}
			</div>
		{/if}
	{/if}

{/if}

</div>
	
<style>
	nav {
			width: 90vw;
			height: 8vh;
			display: flex;
			align-items: center;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
			border: lightslategrey solid 2px;
			border-radius: 10px;
      margin: 1.5% 5%;
  }
	
	nav a {
			font-size: 5vh;
			text-decoration: none;
			padding: 0 2vh;
	}
	
	nav button {
			padding-left: 2%;
			font-size: 6vh;
			margin-right: auto;
	}
	
	nav img {
			padding-right: 2%;
			height: 5vh;
			margin-left: auto;
	}

	.desktop-nav a {
			display: inline-flex;
			align-items: center;
	}

  .desktop-nav i, p {
      font-size: 4vh;
  }
	
	.mobile-menu {
      width: 90vw;
      margin: 0 5%;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
      border: lightslategrey solid 2px;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
	}
	
	.mobile-menu ul {
			margin: 0 8%;
	}
	
	.mobile-menu ul a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
			text-decoration: none;
	}
	
	.mobile-menu ul hr {
			margin: 0 1%;
      border-bottom: lightslategrey solid 2px;
	}

	.mobile-menu ul a i {
			justify-content: left;
			padding-right: 5%;
			font-size: 5vh;
	}

  .mobile-menu ul a p {
      justify-content: left;
			font-size: 4vh;
  }
	
	.page-content {
			width: 100%
	}
	
</style>