<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Wunderkarten</h3>
          <p class="subtitle is-size-6 has-text-white">
            Web2Print Online Shop.
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
  name: "cProjectWunderkarten",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/wunderkarten_preview.png") bottom -20vw right -30vw
      no-repeat fixed;
    background-size: 100vw;
    background-color: #9bc53d;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url(/img/wunderkarten_preview.82a88355.png) bottom -20vw right -60vw
      no-repeat fixed;
    background-size: 150vw;
    background-color: #9bc53d;
  }
}
</style>
