<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-multiline is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3
            class="title is-1 is-size-1-mobile has-text-white has-text-centered-mobile"
          >
            That's all folks!<br />
            <span class="title is-1 is-size-2-mobile has-text-grey-light">
              For more, please contact me.
            </span>
          </h3>
        </div>
      </div>
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet has-text-centered"
      >
        <h4 class="title is-1 has-text-white">
          hi@falko.fyi
        </h4>
        <div class="columns is-centered is-mobile">
          <div
            class="
          column
          is-2
          has-text-centered"
          >
            <a
              class="icon is-medium has-text-white"
              href="https://www.linkedin.com/in/falkomoeller/"
              target="_blank"
            >
              <i class="fab fa-2x fa-linkedin-in"></i>
            </a>
          </div>
          <div class="column is-2 has-text-centered">
            <a
              class="icon is-medium has-text-white"
              href="https://twitter.com/prod_ct"
              target="_blank"
            >
              <i class="fab fa-2x fa-twitter"></i>
            </a>
          </div>
          <div class="column is-2 has-text-centered">
            <a
              class="icon is-medium has-text-white"
              href="https://medium.com/@falkomoeller"
              target="_blank"
            >
              <i class="fab fa-2x fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cContact",
  props: {
    msg: String
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.bg {
  background: url(../assets/img/contact_background.svg) bottom center no-repeat
    fixed;
  background-size: cover;
  background-color: #373e62;
}
</style>
