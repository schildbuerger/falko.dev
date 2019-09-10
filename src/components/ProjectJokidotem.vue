<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Jokidotem</h3>
          <p class="subtitle is-size-6 has-text-white">
            Meetup about Collaboration of Dev, Design, &amp; Product.
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
  name: "cProjectSparwelt",
  props: {
    msg: String
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/img/jokidotem_preview.png") bottom -10vh right -35vw no-repeat fixed #736f72
  background-size: 75vh
  @include tablet
    background: url("../assets/img/jokidotem_preview.png") center right no-repeat fixed #736f72
    background-size: 55vw
</style>
