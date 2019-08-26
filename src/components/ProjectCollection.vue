<template>
  <div class="has-snap-slider">
    <cProjectOlaph />
    <cProjectLava />
  </div>
</template>

<script>
//import cProject from "@/components/Project.vue";
import cProjectOlaph from "@/components/ProjectOlaph.vue";
import cProjectLava from "@/components/ProjectLava.vue";

export default {
  name: "cProjectCollection",
  props: {
    msg: String
  },
  components: {
    //   cProject,
    cProjectOlaph,
    cProjectLava
  }
};
</script>

<style lang="scss">
.has-snap-slider {
  scroll-snap-type: x mandatory;
  display: flex;
}
</style>
