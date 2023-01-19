<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "AppMainContent",
  components: { ProjectCard },
  data() {
    return {
      BackEndUrl: "http://127.0.0.1:8000",
      projects: [],
      loading: false,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${this.BackEndUrl}/api/projects`).then((resp) => {
        this.projects = resp.data.results;
        // console.log(this.projects);
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <h1>Projects List</h1>
    <div class="wrapper">
      <ProjectCard
        :project="project"
        v-for="project in projects"
        :key="project.id"
      >
      </ProjectCard>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/_mixins" as *;
@use "../styles/partials/_variables" as *;

.container {
  @include my-container;

  h1 {
    color: $red;
    text-align: center;
  }

  .wrapper {
    @include my-flex(column, space-between);
    align-items: center;
    border: 1px solid $grey;
    gap: 1.5em;
    margin: 2em 0;
    padding: 1em 0 4em;
    height: 100%;
    background-color: black;
  }
}
</style>
