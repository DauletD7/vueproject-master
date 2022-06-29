<template>
  <div class="home">
    <sliders />
    <phones />
    <popular />
  </div>
</template>

<script>
import phones from "../components/PhonesComp.vue";
import sliders from "../components/SlidersComp.vue";
import popular from "../components/PopCatComp.vue"
export default {
  name: "HomeView",
  components: {
    phones,
    sliders,
    popular
  },
  metaInfo() {
      return {
        title: "Главная страница",
      }
  },
};
</script>