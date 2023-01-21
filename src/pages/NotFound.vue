<script>
export default {
    name: "NotFound"
}

</script>
<template>
    <main>
        <div class="container">
            <h1>Not Found 404</h1>
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
    h1{
        color: $red;
    }
    p{
        color: $grey;
    }
}

</style>