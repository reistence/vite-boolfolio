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
    
        <div class="container">
            <h1>Welcome</h1>
            <img src="../assets/S9OU.gif" alt="" srcset="">
            <!-- <div class="wrapper">
                <img src="../assets/O7BZ.gif" alt="" srcset="">
                <div class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere quasi vel blanditiis dolorem voluptate ut id officiis ea explicabo totam dolor, nesciunt cumque similique et maiores eius, fuga sint. Hic molestias ea cum molestiae. Dicta nulla asperiores impedit voluptatum. Provident veritatis, tempora quis similique numquam optio nemo modi officia quam obcaecati iste fuga deleniti laboriosam voluptas excepturi neque nulla non sequi veniam quidem consequatur illum cumque aliquid rem. Quia quod perspiciatis praesentium nostrum et, qui necessitatibus consequatur maxime quos similique assumenda repudiandae enim. Eos suscipit provident voluptatum, officiis doloribus consequatur neque enim quos quaerat qui nisi fugiat quas vero. Non amet assumenda libero. Maxime tempore veniam officiis ipsam porro. Error repellat eveniet modi adipisci provident qui odit, maiores at architecto cum fugit dolorem deserunt officia expedita, animi nisi ullam magni quam accusantium, saepe est assumenda perferendis veniam. Repudiandae totam ullam consequatur obcaecati at modi quod sapiente corrupti vero nobis.</div>
            </div> -->
        </div>
    
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/_mixins" as*;
@use "../styles/partials/_variables" as*;

.container{
    // @include my-container;
    height: 100%;
    position: relative;
    background-color: black;
}

    h1{
        color: $red;
        font-size: 4rem;

        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
       
    }

    

    
    img{
        width: 100%;
        // margin: 0 auto;
        // display: block;
        height: 100vmin;
        object-fit: cover;
        box-shadow: 10px 10px 20px $black;
    }
   



    // .pink {
    //     background: #ff0066;
    //     overflow: hidden;
    //   }

    //   .blob-content {
    //     z-index: 1;
    //   }

</style>