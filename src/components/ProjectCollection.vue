<template>
  <div class="has-snap-slider snap-start">
    <cProjectOlaph />
    <cProjectUCD />
    <cProjectLava />
    <cProjectJokidotem />
    <cProjectSparwelt />
    <cProjectSpexi />
    <cProjectBargain />
    <cProjectWareable />
    <cProjectWunderkarten />
  </div>
</template>

<script>
//import cProject from "@/components/Project.vue";
import cProjectOlaph from "@/components/ProjectOlaph.vue";
import cProjectLava from "@/components/ProjectLava.vue";
import cProjectSparwelt from "@/components/ProjectSparwelt.vue";
import cProjectSpexi from "@/components/ProjectSpexi.vue";
import cProjectUCD from "@/components/ProjectUCD.vue";
import cProjectBargain from "@/components/ProjectBargain.vue";
import cProjectWareable from "@/components/ProjectWareable.vue";
import cProjectWunderkarten from "@/components/ProjectWunderkarten.vue";
import cProjectJokidotem from "@/components/ProjectJokidotem.vue";

export default {
  name: "cProjectCollection",
  props: {
    msg: String
  },
  components: {
    //   cProject,
    cProjectOlaph,
    cProjectLava,
    cProjectSparwelt,
    cProjectSpexi,
    cProjectUCD,
    cProjectBargain,
    cProjectWareable,
    cProjectWunderkarten,
    cProjectJokidotem
  }
};
</script>

<style lang="scss">
img {
  max-height: 70vh;
}
.has-snap-slider {
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}
.snap-start {
  scroll-snap-align: start;
}
</style>
