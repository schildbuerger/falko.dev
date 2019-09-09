<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">The Floor is Lava</h3>
          <p class="subtitle is-size-6 has-text-white">
            Podcast about tech, agile leadership, and the future of work.
          </p>
          <a class="button is-white is-outlined is-medium m-t-sm">
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
  name: "cProjectLava",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/lava_preview_2.png") bottom -10vw right 10vw no-repeat
      fixed;
    background-size: 40vw;
    background-color: #f95757;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url("../assets/lava_preview_2.png") bottom 10vw center no-repeat
      fixed;
    background-size: 75vw;
    background-color: #f95757;
  }
}
</style>
