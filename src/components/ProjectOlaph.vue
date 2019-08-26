<template>
  <section class="section is-fullheight hero bg-olaph">
    <div class="columns is-fullheight hero-body">
      <div class="column is-4 is-offset-1">
        <div class="content">
          <h3 class="title has-text-white is-size-1">Olaph</h3>
          <p class="subtitle has-text-white is-size-6">
            A Slack bot for daily standups.
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
  name: "cProjectOlaph",
  props: {
    msg: String
  }
};
</script>

<style lang="scss">
.bg-olaph {
  /* background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    #31b5aa 0%,
    #73c4bc 35%,
    #d0e9e5 150%
  ) !important;*/
  background-color: #31b5aa !important;
  background: url("https://i.pinimg.com/originals/e9/00/5c/e9005c830342a839b6e259be4b0c02ed.jpg")
    center center no-repeat fixed;
  background-size: cover;
}
</style>
