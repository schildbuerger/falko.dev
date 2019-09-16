<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">The Floor is Lava</h3>
          <p class="subtitle is-size-6 has-text-white">
            Podcast about tech, agile leadership, and the future of work.
          </p>
          <a
            href="https://podcasts.apple.com/de/podcast/the-floor-is-lava/id1435068510"
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
  name: "cProjectLava",
  props: {
    msg: String
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/img/lava_preview_2-min.png") bottom -15vw center no-repeat fixed #f95757
  background-size: 75vw
  @include tablet
    background: url("../assets/img/lava_preview_2-min.png") bottom -10vw right 10vw no-repeat fixed #f95757
    background-size: 40vw
</style>
