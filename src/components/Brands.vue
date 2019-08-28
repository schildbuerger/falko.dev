<template>
  <section class="section is-fullheight hero bg-brands">
    Brands
  </section>
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
  background: url("https://thevalleygroup.com/wp-content/uploads/2015/09/Valley-Who-we-work-with-01.jpg")
    center center no-repeat fixed;
  background-size: contain;
}
</style>
