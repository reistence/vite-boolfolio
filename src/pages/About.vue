<script>
export default {
    name: "About"
}

</script>
<template>
    <main>
        <div class="container">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt mollitia tenetur autem aut fugit officia eos provident reiciendis illo repudiandae obcaecati minima quas reprehenderit, omnis ab rem natus dolore distinctio accusamus molestiae sapiente velit ad quam magni. Laborum, vero. Expedita qui earum quam perspiciatis doloribus sit maxime vero ipsum? Debitis dicta consequuntur maxime nobis assumenda ab porro! Quia quisquam deserunt fugiat velit ea ducimus fuga qui mollitia eveniet, corrupti, harum quae sint. Totam impedit quod sint eos culpa saepe, excepturi recusandae vitae suscipit quasi amet facilis sapiente in tenetur reiciendis aliquid obcaecati ducimus corrupti eligendi debitis molestiae. Cum, officia. Rem.</p>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/_mixins" as*;
@use "../styles/partials/_variables" as*;

.container{
    margin-top: 1em;
    @include my-container;
    
    h1{
        color: $red;
    }
    
    p{
        color: $grey;
    }
}


</style>