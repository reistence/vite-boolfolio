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
  <main>
    <AppMainContent></AppMainContent>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
