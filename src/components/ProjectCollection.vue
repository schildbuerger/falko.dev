<template>
  <div class="has-snap-slider snap-start">
    <cProjectCover />
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
import cProjectCover from "@/components/ProjectCover.vue";

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
    cProjectJokidotem,
    cProjectCover
  }
};
</script>

<style lang="scss">
.has-snap-slider {
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}
.snap-start {
  scroll-snap-align: start;
}
</style>
