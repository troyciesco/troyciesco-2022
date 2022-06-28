<script lang="ts">
	import { page } from "$app/stores"
</script>

<header class="px-8 py-4 w-full flex justify-between items-center">
	<!-- <nav>
		<a href="/">
			<span class="font-logo text-3xl">Grayhaber</span>
		</a>
		<ul>
			<li class:active={$page.url.pathname === "/"}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === "/work"}>
				<a sveltekit:prefetch href="/work">Work</a>
			</li>
			<li class:active={$page.url.pathname === "/services"}>
				<a sveltekit:prefetch href="/services">Services</a>
			</li>
			<li class:active={$page.url.pathname === "/about"}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === "/contact"}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
	</nav> -->
	<div class="font-logo text-3xl text-center tracking-wide">{`{ tmc }`}</div>
	<a class="text-blue-600 font-bold underline" href="https://tmciesco-content.s3.amazonaws.com/img/troy-ciesco-resume.pdf"
		>Download Resume</a
	>
</header>

<!-- <style lang="scss">
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		& ul {
			display: flex;
			& li:not(:last-child) {
				margin-right: 24px;
			}
		}
	}
</style> -->
