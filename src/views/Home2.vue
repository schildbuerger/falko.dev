<template>
  <div class="has-scroll-snap">
    <h1 class="is-size-test">Cards</h1>
    <cCards />
  </div>
</template>

<script>
// @ is an alias to /src
import cCards from "@/components/Cards.vue";

export default {
  name: "vHome",
  components: {
    cCards
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

<style lang="scss">
.is-size-test {
  color: blue;
  font-size: 30em !important;
}
@-moz-document url-prefix() {
  .is-size-test {
    color: green;
  }
}
@media only screen and (min-width: 768px) {
  .is-size-test {
    color: black !important;
  }
}
</style>
