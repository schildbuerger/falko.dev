<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Bonnyprints</h3>
          <p class="subtitle is-size-6 has-text-white">
            Web2Print Online Shop.
          </p>
          <a class="button is-rounded is-white is-outlined is-medium m-t-sm">
            <span>Show Details</span>
            <span class="icon is-small">
              <i class="fas fa-caret-right"></i> </span
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cProjectWunderkarten",
  props: {
    msg: String
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/img/wunderkarten_preview.png") bottom 20vw right -55vw no-repeat fixed #9bc53d
  background-size: 150vw
  @include tablet
    background: url("../assets/img/wunderkarten_preview.png") bottom -20vw right -30vw no-repeat fixed #9bc53d
    background-size: 100vw
</style>
