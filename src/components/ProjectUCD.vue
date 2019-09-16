<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Urban Coffee Discovery</h3>
          <p class="subtitle is-size-6 has-text-white">
            Pop-up Online Shop.
          </p>
          <!-- <a
            href=""
            target="_blank"
            class="button is-rounded is-white is-outlined is-medium m-t-sm"
          >
            <span>Take me there</span>
            <span class="icon is-small">
              <i class="fas fa-caret-right"></i> </span
          ></a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cProjectUCD",
  props: {
    msg: String
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/img/ucd_preview-min.png") bottom 5vh center no-repeat fixed #f6ad49
  background-size: 100vw
  @include tablet
    background: url("../assets/img/ucd_preview-min.png") center right 5vw no-repeat fixed #f6ad49
    background-size: 55vw
</style>
