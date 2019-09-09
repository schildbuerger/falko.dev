<template>
  <div class="has-scroll-snap">
    <cHero />
    <cProjectCollection />
    <cContact />
  </div>
</template>

<script>
// @ is an alias to /src
import cHero from "@/components/Hero.vue";
import cProjectCollection from "@/components/ProjectCollection.vue";
/* import cBrands from "@/components/Brands.vue";
 */ import cContact from "@/components/Contact.vue";

export default {
  name: "vHome",
  components: {
    cHero,
    cProjectCollection,
    /*     cBrands,
     */ cContact
  }
};
</script>

<style lang="scss">
.has-scroll-snap {
  overflow-x: hidden;
  height: 100vh;
  scroll-snap-type: y mandatory;
}
.section {
  scroll-snap-align: start;
  min-width: 100vw;
}
</style>
