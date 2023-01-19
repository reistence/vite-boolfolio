<script>
export default {
  name: "ProjectCard",
  components: {},
  data() {
    return {
      BackEndUrl: "http://127.0.0.1:8000",
    };
  },
  props: {
    project: Object,
  },
  computed: {},
  methods: {},
};
</script>
<template>
  <div class="project-card">
    <div class="project-img">
      <img
        v-if="project.cover_image"
        :src="`${BackEndUrl}/storage/${project.cover_image}`"
        alt=""
      />
      <img v-else src="/dark-placeholder.png" alt="" />
    </div>
    <div class="project-txt">
      <h3 class="project-title">{{ project.title }}</h3>
      <div v-if="project.technologies" class="techs">
        <span v-for="tech in project.technologies" :key="tech.id">{{
          tech.name
        }}</span>
      </div>
      <div v-if="project.type" class="type">
        {{ project.type.name }}
      </div>
      <div class="project-description">
        {{ project.description }}
      </div>
      <a href="/">Read more</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/_mixins" as *;
@use "../styles/partials/_variables" as *;

.project-card {
  @include my-flex(row, space-between);
  position: relative;
  border: 1px solid $red;
  align-items: center;
  width: 80%;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;

  .project-img {
    width: 100%;
    height: 100%;
    img {
      //   width: 100%;
      object-fit: contain;
      //   height: 100%;
    }
  }
  .project-txt {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1em;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1em 1em 1em 3em;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.445),
      rgba(0, 0, 0, 0.818),
      black
    );

    color: $grey;
    text-align: right;

    .project-title {
      font-size: 2rem;
      color: $red;
      text-align: right;
    }

    .project-description {
      width: 50%;
      text-align: right;
      margin: 0 0 0 auto;
    }
  }
}
</style>
