<template>
  <section class="section is-fullheight hero bg-berlin">
    <div class="hero-body m-b-lg">
      <div class="container is-vcentered">
        <div class="columns">
          <div
            class="column is-4-desktop is-offset-4 is-6-tablet is-offset-3-tablet is-12-mobile card"
          >
            <div class="m-b-md has-text-centered card-content">
              <h3 class="title is-1">Contact</h3>
              <span class="icon">
                <i class="fas fa-2x fa-envelope"></i>
              </span>
              <h4 class="title is-4 m-t-sm">
                hi@falko.fyi
              </h4>
              <div class="columns is-mobile">
                <div class="column is-2 is-offset-3 has-text-centered">
                  <a
                    class="icon is-large has-text-dark"
                    href="https://www.linkedin.com/in/falkomoeller/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin-in"></i>
                  </a>
                </div>
                <div class="column is-2 has-text-centered">
                  <a
                    class="icon is-large has-text-dark"
                    href="https://twitter.com/prod_ct"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-twitter"></i>
                  </a>
                </div>
                <div class="column is-2 has-text-centered">
                  <a
                    class="icon is-large has-text-dark"
                    href="https://medium.com/@falkomoeller"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-medium"></i>
                  </a>
                </div>
              </div>
            </div>
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

<style lang="scss">
.bg-berlin {
  background: url("") center center no-repeat fixed;
  background-size: cover;
}
</style>
