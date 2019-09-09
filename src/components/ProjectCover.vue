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

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/selection_preview.png") center right 5vw
      no-repeat fixed;
    background-size: 50vw;
    background-color: #333;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url("../assets/selection_preview.png") bottom 20vh right -35vw no-repeat
      fixed;
    background-size: 115vw;
    background-color: #333;
  }
}
</style>
