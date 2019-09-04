<template>
  <div class="has-snap-slider">
    <cProjectOlaph />
    <cProjectSparwelt />
    <cProjectLava />
  </div>
</template>

<script>
//import cProject from "@/components/Project.vue";
import cProjectOlaph from "@/components/ProjectOlaph.vue";
import cProjectLava from "@/components/ProjectLava.vue";
import cProjectSparwelt from "@/components/ProjectSparwelt.vue";

export default {
  name: "cProjectCollection",
  props: {
    msg: String
  },
  components: {
    //   cProject,
    cProjectOlaph,
    cProjectLava,
    cProjectSparwelt
  }
};
</script>

<style lang="scss">
.has-snap-slider {
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}
</style>
