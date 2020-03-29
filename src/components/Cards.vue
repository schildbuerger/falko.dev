<template>
  <section class="section is-fullheight hero bg">
    <div class="hero-body">
      <div class="container has-text-right is-vcentered">
        <h1 class="title">Cards</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cCards",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="sass">
.bg
  background: url("") center center no-repeat fixed
  background-size: cover
  @include tablet
    background-color: white
</style>
