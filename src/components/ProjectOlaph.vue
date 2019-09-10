<template>
  <section class="section is-fullheight hero bg">
    <div class="columns is-inline-mobile is-fullheight hero-body">
      <div
        class="column is-4-desktop is-offset-1-desktop is-12-mobile is-5-tablet is-offset-1-tablet"
      >
        <div class="content">
          <h3 class="title is-size-1 has-text-white">Olaph</h3>
          <p class="subtitle is-size-6 has-text-white">
            Slack-Bot for daily standups.
          </p>
          <a
            v-on:click="isShowModal = true"
            class="button is-rounded is-white is-outlined is-medium m-t-sm"
          >
            <span>Show Details</span>
            <span class="icon is-small">
              <i class="fas fa-caret-right"></i> </span
          ></a>
        </div>
      </div>
    </div>
    <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
      <div class="modal-background" v-on:click="isShowModal = false"></div>
      <div class="modal-content">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by1">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="content is-small">
            <p>
              In 2018 we were looking for a tool to support our Daily Standups
              inside of Slack for our remote working teams. The result of that
              research was disillusioning. No solution did what we wanted for a
              reasonable price. Thus we decided to build one ourselves and make
              it free for everyone to use. Olaph was born (hatched?).
            </p>
            <p class="hero title is-4 has-background-primary has-text-white">
              Support teams in their daily collaboration and educate them about
              agile &amp; lean principles.
            </p>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        v-on:click="isShowModal = false"
      ></button>
    </div>
  </section>
</template>

<script>
export default {
  name: "cProjectOlaph",
  props: {
    msg: String
  },
  data: function() {
    return {
      isShowModal: false
    };
  }
};
</script>

<style lang="sass" scoped>
.bg
  background: url("../assets/olaph_preview_2.png") bottom right no-repeat fixed #50c5b7
  background-size: 110vw
  @include tablet
    background-size: 75vw
</style>
