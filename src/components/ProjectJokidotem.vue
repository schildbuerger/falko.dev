<template>
  <section class="section is-fullheight hero bg-sparwelt is-hidden-mobile">
    <div class="columns is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Jokidotem</h3>
          <p class="subtitle is-size-6 has-text-white">
            Meetup about Collaboration of Dev, Design, &amp; Product.
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
  name: "cProjectSparwelt",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
.bg-sparwelt {
  background: url("../assets/jokidotem_preview.png") center right no-repeat
    fixed;
  background-size: 55vw;
  background-color: #736f72;
}
</style>
