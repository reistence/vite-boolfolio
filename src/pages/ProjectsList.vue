<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectsList",
  components: { ProjectCard },
  data() {
    return {
      BackEndUrl: "http://127.0.0.1:8000",
      projects: [],
      loading: false,
      currentPage: 1,
      lastPage: null,
      totalProjects: null,
    };
  },
  created() {
    this.getProjects(1);
  },
  methods: {
    getProjects(page) {
      console.log(page);
      const options = {
       params: {
        page
       } 
      }; 
      axios.get(`${this.BackEndUrl}/api/projects`, options).then((resp) => {
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        this.totalProjects =  resp.data.results.total;
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

      <div class="navigation">
        <div class="pages-amount">
          Page {{ currentPage }} in {{ lastPage }}
        </div>
        <div class="pages-btn">
          <a class="btn btn-success me-2" :class="currentPage === 1 ? 'disabled' : ''" href=""
              @click.prevent="getProjects(currentPage - 1)"><i class="fa-solid fa-chevron-left"></i></a>
          <a class="btn btn-success" :class="{ 'disabled': currentPage === lastPage }" href=""
              @click.prevent="getProjects(currentPage + 1)"><i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>
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
    // border: 1px solid $grey;
    gap: 1.5em;
    margin: 2em 0;
    padding: 1em 0 4em;
    height: 100%;
    // background-color: black;



    .navigation{
      @include my-flex(row, space-between);
      width: 100%;

      .pages-amount{
        color: $grey;
      }

      .pages-btn > *{
        color: $red;
        font-size: 1.5em;
        padding: 0.2em .5em ;
        transition: 300ms;

        &:hover{
          background-color: $red;
          color: black;
          border-radius: 10px;
          transition: 300ms;

        }
      }

    }
  }
}
</style>
