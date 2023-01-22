<script>
export default {
    name: "NotFound"
}

</script>
<template>
    <main>
        <div class="container">
            <h1>404 - Not Found</h1>
            <p>Sorry the page you were looking for doesn't exist</p>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/_mixins" as*;
@use "../styles/partials/_variables" as*;


.container{
    @include my-container;
    margin-top: 2em;
    h1{
        color: $red;
        font-size: 3rem;
        text-align: center;

    }
    p{
        color: $grey;
        font-size: 1.5rem;
        text-align: center;

    }
}

</style>