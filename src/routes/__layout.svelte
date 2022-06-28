<script lang="ts">
	import Footer from "$lib/footer/Footer.svelte"
	import Header from "$lib/header/Header.svelte"
	import "../app.scss"
</script>

<Header />

<slot />

<Footer />
