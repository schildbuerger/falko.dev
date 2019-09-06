<template>
  <section class="section is-fullheight hero bg is-hidden-mobile">
    <div class="columns is-fullheight hero-body is-hidden-mobile">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-1 has-text-white">
            That's all folks!<br />
            <span class="title is-1 has-text-grey-light">
              For more please contact me.
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
        <div class="columns is-mobile">
          <div class="column is-2 is-offset-3 has-text-centered">
            <a
              class="icon is-large has-text-white"
              href="https://www.linkedin.com/in/falkomoeller/"
              target="_blank"
            >
              <i class="fab fa-2x fa-linkedin-in"></i>
            </a>
          </div>
          <div class="column is-2 has-text-centered">
            <a
              class="icon is-large has-text-white"
              href="https://twitter.com/prod_ct"
              target="_blank"
            >
              <i class="fab fa-2x fa-twitter"></i>
            </a>
          </div>
          <div class="column is-2 has-text-centered">
            <a
              class="icon is-large has-text-white"
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
  background: url(/img/bg01.d9aa08fb.jpg) center left 30vh no-repeat fixed;
  background-size: cover;
  background-color: #2d2e44;
}
</style>
