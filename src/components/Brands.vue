<template>
  <section class="section is-fullheight hero bg-brands"></section>
</template>

<script>
export default {
  name: "cBrands",
  props: {
    msg: String
  },
  components: {}
};
</script>

<style lang="scss">
.bg-brands {
  background: url("../assets/img/brands.png") center center no-repeat fixed;
  background-size: contain;
}
</style>
