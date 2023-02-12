<script lang="ts" context="module">
	export class TPerson {
		private _age: number;

		get age() {
			return this._age;
		}

		constructor(public firstName: string, public lastName: string, age: number) {
			this._age = age;
		}
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';

	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Counter from './Counter.svelte';
	import Something from './something.svelte';
	import welcome from '../lib/images/svelte-welcome.webp';
	import notok from '../lib/images/svelte-welcome2.png';

	let x: Something;

	$: console.log($page);
	$: console.log(x.pk, x.api.value3, x.api.value2, x.something.pk, x.api.value3);
</script>

<div on:click={console.log} on:keyup />

<Something bind:this={x} on:click={() => console.log(x.pk)} />

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<img src={notok} alt="Welcome" />
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
