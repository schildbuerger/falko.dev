<template>
  <div class="has-scroll-snap">
    <!--     <cCards />
 -->
    <cHero />
    <cProjectCollection />
    <cContact />
  </div>
</template>

<script>
// @ is an alias to /src
import cHero from "@/components/Hero.vue";
import cProjectCollection from "@/components/ProjectCollection.vue";
import cContact from "@/components/Contact.vue";
/* import cCards from "@/components/Cards.vue";
 */
export default {
  name: "vHome",
  components: {
    cHero,
    cProjectCollection,
    cContact
    /*     cCards
     */
  }
};

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
</script>

<style lang="scss">
.fullheight {
  height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>
