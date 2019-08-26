<template>
  <section class="section is-fullheight hero bg-lava">
    <div class="columns is-fullheight hero-body">
      <div class="column is-4 is-offset-1">
        <div class="content">
          <h3 class="title has-text-white is-size-1">The Floor is Lava</h3>
          <p class="subtitle has-text-white is-size-6">
            Podcast about agile leadership and future of work.
          </p>
          <a class="button  is-outlined is-white is-medium m-t-sm">
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
  /* background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    #31b5aa 0%,
    #73c4bc 35%,
    #d0e9e5 150%
  ) !important;*/
  background-color: #31b5aa !important;
  background: url("data:image/jpeg;base64,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")
    center center no-repeat fixed;
  background-size: cover;
}
</style>
