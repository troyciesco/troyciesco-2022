<script context="module" lang="ts">
	import IntroSection from "$lib/IntroSection.svelte"

	export const prerender = true
</script>

<svelte:head>
	<title>Home | Troy Ciesco</title>
	<meta name="description" content="Portfolio website of Troy Ciesco" />
</svelte:head>

<main>
	<section class="flex flex-col items-center justify-center px-8" style="height: 80vh;">
		<h2 class="text-center mb-8 leading-none text-5xl md:text-7xl lg:text-[96px]">
			Hello! <br />I'm Troy Ciesco.
		</h2>
		<p class="max-w-prose text-center text-md md:text-lg">I'm a full-stack software engineer from Connecticut.</p>
	</section>
	<IntroSection />
</main>
