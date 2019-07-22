<template>
  <section class="section is-fullheight hero">
    <div class="hero-body">
      <div class="container is-vcentered">
        <div class="columns">
          <div class="column has-background-olaph box">
            <div class="columns is-vcentered">
              <div class="column is-one-half is-offset-1">
                <div class="content">
                  <h3 class="title has-text-white is-size-1">Olaph.io</h3>
                  <p class="subtitle has-text-white is-size-7 is-uppercase">
                    Product Lead
                  </p>
                  <p class="has-text-white is-size-6">
                    A Slack Standup Bot
                  </p>
                  <a class="button is-white">More</a>
                </div>
              </div>
              <div class="column is-one-half">
                <div class="">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../assets/logo_olaph.svg"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
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
  name: "cProjects",
  props: {
    msg: String
  }
};
</script>

<style lang="scss">
.has-background-olaph {
  background-color: #31b5aa !important;
}
</style>
