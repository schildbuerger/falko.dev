<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Urban Coffee Discovery</h3>
          <p class="subtitle is-size-6 has-text-white">
            Pop-up Online Shop.
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
  name: "cProjectUCD",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/ucd_preview.png") center right 5vw no-repeat
      fixed;
    background-size: 55vw;
    background-color: #f6ad49;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url("../assets/ucd_preview.png") bottom 20vh center no-repeat
      fixed;
    background-size: 100vw;
    background-color: #f6ad49;
  }
}
</style>
