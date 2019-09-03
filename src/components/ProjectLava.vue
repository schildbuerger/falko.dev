<template>
  <section class="section is-fullheight hero bg-lava">
    <div class="columns is-fullheight hero-body">
      <div class="column is-4 is-offset-1">
        <div class="content">
          <h3 class="title is-size-1">The Floor is Lava</h3>
          <p class="subtitle is-size-6">
            Podcast about agile leadership and future of work.
          </p>
          <a class="button  is-outlined is-medium m-t-sm">
            <span>Show Details</span>
            <span class="icon is-small">
              <i class="fas fa-caret-right"></i> </span
          ></a>
        </div>
      </div>
      <div class="column is-6 level">
        <div class="level-item has-text-centered">
          <div class="card-image">
            <figure class="image m-t-xl">
              <img src="../assets/olaph_preview.png" alt="Placeholder image" />
            </figure>
          </div>
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

<style lang="scss">
.bg-lava {
  background: url("") center center no-repeat fixed;
  background-size: cover;
}
</style>
