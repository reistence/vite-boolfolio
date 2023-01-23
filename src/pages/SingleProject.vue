<script>
import axios from 'axios';
export default{
    name: "SingleProject",
    data(){
        return{
            BackEndUrl: "http://127.0.0.1:8000",
            project: {}

        }
    },
    created(){
        const slug = this.$route.params.slug;
        axios.get(`${this.BackEndUrl}/api/projects/${slug}`).then(resp => {
            // console.log(resp);
            if (resp.data.success) {
                this.project = resp.data.project;
            } else {
                this.$router.push({name: "Not-Found"});
            }
        })
        // console.log(this.project);

    },
    methods:{},
    computed:{
        type(){
            return this.project.type ? this.project.type.name : "No type";
        }
    }
    
}

</script>
<template>
    <main>
        <div class="container">
            <h1>{{project.title}}</h1>
            <div class="tags">
                <h5>{{ type }}</h5>
                <div class="techs">
                    <span v-for="tech in project.technologies">{{ tech.name }}</span>
                </div>
            </div>
            <div class="project-highlight">

                <img v-if="project.cover_image" :src="`${BackEndUrl}/storage/${project.cover_image}`" alt="{{ project.title }}">
                <img v-else src="/dark-placeholder.png" alt="" />
                <div class="txt">
                    {{ project.description }}
                </div>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/_mixins" as *;
@use "../styles/partials/_variables" as *;


.container{
    @include my-container;
    margin-top: 1em;

    h1{
        color: $red;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: .5em
    }
    .tags{
        @include my-flex(row, space-between);
        color: white;
        margin-bottom: 1em;
        font-size: 1.4rem;

        .techs{
            @include my-flex(row, space-between);
            gap: .7em;
            font-size: 1rem;
            align-items: center;

            span{
                background-color: $red;
                padding: .5em;
                text-align: center;
                transition: 200ms;
                border-radius: 5px;
                border: 1px solid $red;

                &:hover{
                    color: $red;
                    background-color: $black;
                    transition: 200ms;
                }
            }
        }
    }

    .project-highlight{
        @include my-flex(row, center);
        height: 500px;
        align-items: center;
        img{
            width: 50%;
        }
        .txt{
            border-left: 1px solid $red;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $grey;
            padding: 1em;
            
        }

    }

}

</style>