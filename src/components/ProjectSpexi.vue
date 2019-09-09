<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Mister Spex</h3>
          <p class="subtitle is-size-6 has-text-white">
            Online Shop for Eyewear.
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
  name: "cProjectSpexi",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/spexi_preview.png") center right 10vw no-repeat
      fixed;
    background-size: 50vw;
    background-color: #2f323a;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url(/img/spexi_preview.bba3ab8f.png) bottom right 2vh no-repeat
      fixed;
    background-size: 80vw;
    background-color: #2f323a;
  }
}
</style>
