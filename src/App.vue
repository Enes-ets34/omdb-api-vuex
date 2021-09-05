<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },

  
};
</script>
<style>
i:hover {
  cursor: pointer;
}
</style>
