<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Wareable</h3>
          <p class="subtitle is-size-6 has-text-white">
            Tech-Blog about Wearable Technology.
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
  name: "cProjectWareable",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/wareable_preview.png") bottom -5vw right 10vw no-repeat
      fixed;
    background-size: 40vw;
    background-color: #2f323a;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url(/img/wareable_preview.d5b75a7d.png) bottom right -8vw no-repeat
      fixed;
    background-size: 60vw;
    background-color: #2f323a;
  }
}
</style>
