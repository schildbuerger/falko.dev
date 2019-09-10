<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Bargainmoose</h3>
          <p class="subtitle is-size-6 has-text-white">
            Affiliate Voucher &amp; Coupon Portal.
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
  name: "cProjectBargain",
  props: {
    msg: String
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/bargainmoose_preview.png") bottom 30vw right -60vw no-repeat fixed #e71d36
  background-size: 155vw
  @include tablet
    background: url("../assets/bargainmoose_preview.png") center right -20vw no-repeat fixed #e71d36
    background-size: 80vw
</style>
