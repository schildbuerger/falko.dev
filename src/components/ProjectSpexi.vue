<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Mister Spex</h3>
          <p class="subtitle is-size-6 has-text-white">
            Online Shop for Eyewear.
          </p>
          <a
            href="https://www.misterspex.de/"
            target="_blank"
            class="button is-rounded is-white is-outlined is-medium m-t-sm"
          >
            <span>Take me there</span>
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
  name: "cProjectSpexi",
  props: {
    msg: String
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/img/spexi_preview-min.png") bottom 5vw right 3vh no-repeat fixed #2f323a
  background-size: 98vw
  @include tablet
    background: url("../assets/img/spexi_preview-min.png") center right 10vw no-repeat fixed #2f323a
    background-size: 50vw
</style>
