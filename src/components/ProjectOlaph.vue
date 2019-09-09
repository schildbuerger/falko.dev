<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Olaph</h3>
          <p class="subtitle is-size-6 has-text-white">
            Slack-Bot for daily standups.
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
  name: "cProjectOlaph",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/olaph_preview_2.png") bottom right no-repeat
      fixed;
    background-size: 75vw;
    background-color: #50c5b7;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url("../assets/olaph_preview_2.png") bottom right no-repeat
      fixed;
    background-size: 110vw;
    background-color: #50c5b7;
  }
}
</style>
