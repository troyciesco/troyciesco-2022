<script>
  import Footer from "$lib/Footer.svelte"
  import Header from "$lib/Header.svelte"
  import "./styles.scss"
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <div class="grow">
    <slot />
  </div>
  <Footer />
</div>
