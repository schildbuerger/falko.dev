<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Sparwelt</h3>
          <p class="subtitle is-size-6 has-text-white">
            Affiliate Voucher &amp; Coupon Portal.
          </p>
          <a
            href="https://www.sparwelt.de/"
            target="_blank"
            class="button is-rounded is-white is-outlined is-medium m-t-sm"
          >
            <span>Take me there</span>
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

<style lang="sass" scoped>
.bg
  background: url("../assets/img/sparwelt_preview.png") bottom 25vw center no-repeat fixed #196db7
  background-size: 90vw
  @include tablet
    background: url("../assets/img/sparwelt_preview.png") center right 10vw no-repeat fixed #196db7
    background-size: 60vw
</style>
