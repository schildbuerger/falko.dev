<template>
  <div>
    <cHero />
    <cProjects />
  </div>
</template>

<script>
// @ is an alias to /src
import cHero from "@/components/Hero.vue";
import cProjects from "@/components/Projects.vue";

export default {
  name: "vHome",
  components: {
    cHero,
    cProjects
  }
};
</script>
