<template>
  <section class="section is-fullheight hero bg is-hidden-mobile">
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
      <!-- <div class="column is-6-desktop level is-12-mobile">
        <div class="level-item has-text-centered">
          <div class="card-image">
            <figure class="image">
              <img
                src="../assets/sparwelt_preview.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div> -->
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
.bg {
  background: url("../assets/wareable_preview.png") bottom -5vw right 10vw no-repeat
    fixed;
  background-size: 40vw;
  background-color: #2f323a;
}
</style>
