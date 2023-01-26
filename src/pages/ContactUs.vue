<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    name: "ContactUs",
    data() {
        return {};
    },
    components: { ContactForm }
}
</script>
<template >
    <div class="container">
         <h1>Contact us</h1>
         <p>Feel free to contact us for whatever inquiries you might have:</p>
         <ContactForm>
         </ContactForm>

    </div>
</template>
<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/_mixins" as*;
@use "../styles/partials/_variables" as*;

.container{
    @include my-container;
    margin-top: 1em;

    h1{
        color: $red;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 1em;
    }
    p{
        color: $grey;
        font-size: 1.3rem;
        text-align: center;
    }
}
</style>