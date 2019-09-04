<template>
  <section class="section is-fullheight hero bg-olaph">
    <div class="columns is-fullheight hero-body">
      <div class="column is-4 is-offset-1">
        <div class="content">
          <h3 class="title is-size-1">Sparwelt</h3>
          <p class="subtitle is-size-6">
            Affiliate Voucher &amp; Coupon Portal
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
            <figure class="image">
              <img
                src="../assets/sparwelt_preview.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
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

<style lang="scss">
.bg-olaph {
  background: url("") center center no-repeat fixed;
  background-size: cover;
}
</style>
