<template>
  <section class="section is-fullheight hero">
    <div class="hero-body">
      <div class="container is-vcentered">
        <div class="columns">
          <div class="column bg-olaph box is-8 is-offset-2">
            <div class="columns is-vcentered card-height">
              <div class="column is-4 is-offset-1">
                <div class="content">
                  <h3 class="title has-text-white is-size-1">Olaph</h3>
                  <p class="subtitle has-text-white is-size-6">
                    A Slack bot for daily standups.
                  </p>
                  <a class="button  is-outlined is-white is-medium m-t-sm">
                    <span>Show Details</span>
                    <span class="icon is-small">
                      <i class="fas fa-caret-right"></i> </span
                  ></a>
                </div>
              </div>
              <div class="column is-6 level">
                <div class="level-item has-text-centered">
                  <div class="card-image">
                    <figure class="image m-t-xl">
                      <img
                        src="../assets/olaph_preview.png"
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
.card-height {
  height: 70vh;
}
.box {
  box-shadow: 0 0px 10px rgba(black, 0.5), 0 0 0 1px rgba(black, 0.1) !important;
}
.bg-olaph {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #31b5aa 0%, #73c4bc 35%, #d0e9e5 150%);
}
</style>
