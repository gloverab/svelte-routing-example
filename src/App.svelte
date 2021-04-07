<script>
	import { onMount } from 'svelte'
	import router, { curRoute } from './router.js'
	import RouterLink from './RouterLink.svelte'

	onMount(() => {
		curRoute.set(window.location.pathname);
		if (!history.state) {
			window.history.replaceState({path: window.location.pathname}, '',   window.location.href)
		}
	})

	function handleBackNav(event){
		curRoute.set(event.state.path)
	}

</script>

<svelte:window on:popstate={handleBackNav} />

<main>
	<div id='nav'>
		<RouterLink
			page={{
				path: '/home',
				name: 'Home'
			}}
		/>
		<RouterLink
			page={{
				path: '/about',
				name: 'About'
			}}
		/>
		<RouterLink
			page={{
				path: '/contact',
				name: 'Contact'
			}}
		/>
	</div>
	<svelte:component this={router[$curRoute]} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>