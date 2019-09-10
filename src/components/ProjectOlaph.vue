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
        <div class="card has-snap-slider snap-start">
          <section class="is-fullheight hero">
            <div class="hero-body">
              <figure class="image">
                <img src="../assets/img/olaph_hoothoot.png" />
              </figure>
              <h4 class="title is-4">What is Olaph?</h4>
              <p>
                Olaph is a Standup-Bot for Slack. Its purpose is to support
                teams facilitating daily standups inside of Slack or act as a
                preparation tool for the actual standup.
              </p>
            </div>
          </section>
          <section class="is-fullheight hero">
            <div class="hero-body">
              <h4 class="title is-4">Origin</h4>
              <p>
                In 2018 we were looking for a tool to support our Daily Standups
                inside of Slack for our remote working teams. The result of that
                research was disillusioning. No solution did what we wanted for
                a reasonable price. Thus we decided to build one ourselves and
                make it free for everyone to use. Olaph was born (hatched?).
              </p>
            </div>
            <p
              class="title hero-body is-4 has-background-primary has-text-white has-text-right"
            >
              &#xbb;Support teams in their daily collaboration and educate them
              about agile &amp; lean principles.&#xab;
            </p>
          </section>
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
  background: url("../assets/img/olaph_preview_2.png") bottom right no-repeat fixed #50c5b7
  background-size: 110vw
  @include tablet
    background-size: 75vw
</style>
