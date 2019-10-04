<template>
  <div class="has-snap-slider snap-start is-relative">
    <a href="#olaph" class="is-hidden-mobile paginator has-text-white m-r-xl">
      <span class="arrow"> </span>
    </a>
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
  scroll-behavior: smooth;
}
.paginator {
  position: absolute;
  right: 0;
  color: white;
  margin-top: 50vh;
  cursor: pointer;
}
</style>

<style lang="sass">
.arrow,
.arrow:before
  position: absolute
  left: 50%

.arrow
  width: 40px
  height: 40px
  top: 50%
  margin: -20px 0 0 -20px
  -webkit-transform: rotate(-45deg)
  border-left: none
  border-top: none
  border-right: 2px #fff solid
  border-bottom: 2px #fff solid


.arrow:before
  content: ''
  width: 20px
  height: 20px
  top: 50%
  margin: -10px 0 0 -10px
  border-left: none
  border-top: none
  border-right: 1px #fff solid
  border-bottom: 1px #fff solid
  animation-duration: 2s
  animation-iteration-count: infinite
  animation-name: arrow

@keyframes arrow
  0%
    opacity: 1
  100%
    opacity: 0
    transform: translate(-10px, -10px)
</style>
