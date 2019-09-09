<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Sparwelt</h3>
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
  name: "cProjectSparwelt",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .bg {
    background: url("../assets/sparwelt_preview.png") center right 10vw
      no-repeat fixed;
    background-size: 60vw;
    background-color: #196db7;
  }
}
@media screen and (max-width: 768px) {
  .bg {
    background: url("../assets/sparwelt_preview.png") bottom 35vw center
      no-repeat fixed;
    background-size: 90vw;
    background-color: #196db7;
  }
}
</style>
