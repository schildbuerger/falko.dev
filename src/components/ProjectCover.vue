<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white is-uppercase">
            Selected<br />Work
          </h3>
          <p class="subtitle is-size-6 has-text-white"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cProjectCover",
  props: {
    msg: String
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/img/selection_preview.png") bottom 5vh right -35vw no-repeat fixed #333
  background-size: 115vw
  @include tablet
    background: url("../assets/img/selection_preview.png") center right 5vw no-repeat fixed #333
    background-size: 50vw
</style>
