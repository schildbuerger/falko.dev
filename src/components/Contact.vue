<template>
  <section class="section is-fullheight hero bg-berlin">
    <div class="hero-body m-b-lg">
      <div class="container is-vcentered">
        <div class="columns">
          <div
            class="column is-4 is-offset-4 is-6-tablet is-offset-3-tablet is-12-mobile"
          >
            <div class="m-b-md has-text-centered">
              <div class="field">
                <div class="control has-icons-left">
                  <input
                    class="input is-dark is-large is-rounded"
                    type="text"
                    placeholder="msg@falko.fyi"
                    value="msg@falko.fyi"
                    readonly
                  />
                  <span class="icon is-large is-dark is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="columns is-mobile">
              <div class="column is-4 has-text-centered">
                <a
                  class="icon is-large has-text-dark"
                  href="https://www.linkedin.com/in/falkomoeller/"
                  target="_blank"
                >
                  <i class="fab fa-3x fa-linkedin-in"></i>
                </a>
              </div>
              <div class="column is-4 has-text-centered">
                <a
                  class="icon is-large has-text-dark"
                  href="https://twitter.com/prod_ct"
                  target="_blank"
                >
                  <i class="fab fa-3x fa-twitter"></i>
                </a>
              </div>
              <div class="column is-4 has-text-centered">
                <a
                  class="icon is-large has-text-dark"
                  href="https://medium.com/@falkomoeller"
                  target="_blank"
                >
                  <i class="fab fa-3x fa-medium"></i>
                </a>
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
  /* background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    #31b5aa 0%,
    #73c4bc 35%,
    #d0e9e5 150%
  ) !important;*/
  background-color: white !important;
  background: url("https://quoteddata.com/wp-content/uploads/2019/08/190808-psdl.png")
    center bottom no-repeat fixed;
  background-size: cover;
  background-position-y: 1rem;
}
</style>
