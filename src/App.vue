<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainContent from "./components/AppMainContent.vue";

export default {
  name: "App",
  components: { AppHeader, AppMainContent },
};
</script>

<template>
  <AppHeader></AppHeader>
  <!-- <main>
    <AppMainContent></AppMainContent>
  </main> -->
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
