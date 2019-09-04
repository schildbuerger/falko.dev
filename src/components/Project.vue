<template>
  <section class="section is-fullheight hero">
    <div class="container is-vcentered">
      <div class="columns">
        <div class="column is-2 is-offset-1 has-background-primary">
          First column
        </div>
        <div class="column is-2 is-offset-1 has-background-primary">
          Second column
        </div>
        <div class="column is-2 is-offset-1 has-background-primary">
          Third column
        </div>
        <div class="column is-2 is-offset-1 has-background-primary">
          Fourth column
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cProject",
  props: {
    msg: String
  }
};
</script>

<style lang="scss">
.bg- {
  background-color: #31b5aa !important;
  background: url("https://i.pinimg.com/originals/e9/00/5c/e9005c830342a839b6e259be4b0c02ed.jpg")
    center center no-repeat fixed;
  background-size: cover;
}
</style>
