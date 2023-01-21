<script>

export default {
    name: "HomePage",
    data(){
        return{
            // blob1 : this.$refs.blob1,
            // blob2 : this.$refs.blob2,
           
        }
    },
    mounted(){
        // this.moveBlobs()
    },
    methods: {
        // moveBlobs(){

        //     blob1 = this.$refs.blob1;
        //     blob2 = this.$refs.blob2;
        //     console.log(blob1);
        // const tween = KUTE.fromTo(
        //   blob1,
        //   { path: blob1 },
        //   { path: blob2 },
        //   { repeat: 999, duration: 3000, yoyo: true }
        // ).start();}
    }
}

</script>

<template>
    <main>
        <div class="container">
            <h1>Home</h1>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/_mixins" as*;
@use "../styles/partials/_variables" as*;

.container{
    @include my-container;
}

    h1{
        color: $red;
        text-align: center;
    }

    // .pink {
    //     background: #ff0066;
    //     overflow: hidden;
    //   }

    //   .blob-content {
    //     z-index: 1;
    //   }

</style>