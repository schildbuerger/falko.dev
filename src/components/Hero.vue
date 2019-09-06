<template>
  <section class="section is-fullheight hero bg-hero">
    <div class="hero-body">
      <div class="container has-text-right is-vcentered">
        <h1 class="title">Falko Moeller</h1>
        <h2 class="subtitle">Product Innovation &amp; Leadership</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cHero",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.bg-hero {
  background: url("") center center no-repeat fixed;
  background-size: cover;
}
</style>
