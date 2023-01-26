<script>
import axios from 'axios';
export default {                
    name: "ContactForm",
    data(){
        return{
            BackEndUrl: "http://127.0.0.1:8000",
            name: "",
            email: "",
            message: "",
            success: false,
            errors: {},
            loading: false,
        }
    },
    methods:{
        sendForm(){
            this.loading = true;

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post(`${this.BackEndUrl}/api/leads`, data).then(resp =>{
                this.success = resp.data.success;

                if (this.success) {
                    this.name = "",
                    this.email = "",
                    this.message = ""
                } else {
                    this.errors = resp.data.errors
                }
                this.loading = false;

            })
        }
    }
}
</script>
<template >
    <i class="fa-solid fa-spinner" v-if="loading"></i>
    <div class="alert success" v-if="success">
        <p>Your email has been sent, we will contact you as soon as possible</p>
    </div>
    <div class="alert errors" v-if="Object.keys(errors).length">
        Sorry! An error has occurred, try again please
    </div>

    <form @submit.prevent="sendForm" action="" method="POST">
        <div class="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="name">
        </div>
        <p class="error" v-if="errors.name">
            {{ errors.name[0] }}
        </p>
        <div class="field">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email">
        </div>
        <p class="error" v-if="errors.email">
            {{ errors.email[0] }}
        </p>
        <div class="field">
            <label class="message" for="message">Message</label>
            <textarea name="message" id="message" rows="10" v-model="message"></textarea>
        </div>
        <p class="error" v-if="errors.message">
            {{ errors.message[0] }}
        </p>
        <button type="submit">Send</button>
    </form>
    
</template>
<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/_mixins" as*;
@use "../styles/partials/_variables" as*;

i{
    color: $red;
    font-size: 4em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: spin 1s infinite linear;

    @keyframes spin {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }

}

.alert{
    margin: .5em auto;
    width: max-content;
    font-size: 1.3rem;
    padding: .5em;
    border-radius: 5px;

    &.errors{
        background-color: rgb(165, 31, 31);
        color: white;
    }
         &.success {
             background-color: rgb(100, 129, 12);
             color: white;
         }
}

form{
    // width: 10%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

.field{
    @include my-flex(row,space-evenly);
    gap: .5em;
    margin: 1em auto;
    width: 80%;

    
    label{
        color: $red;
        font-size: 1.3rem;

         &.message{
            align-self: flex-start;
         }
    
    }


    input{
        width: 70%;
        padding: .5em;
        background-color: $black;
        border: 1px solid $grey;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
    }

    textarea{
        width: 72%;
        padding: .5em;
        background-color: $black;
        border: 1px solid $grey;
        border-radius: 5px;
        color: white;
    }

    
}

.error{
    color: $red;
    align-self: center;
}
button {
    background-color: $red;
    padding: .5em;
    margin: .5em auto;
    font-size: 1.2rem;
    border-radius: 10px;
    border: 1px solid $red;
    align-self: center;
    justify-self: center;
    transition: all 200ms;
    color: white;

    &:hover{
        background-color: $black;
        color: $red;
    }
}
}
</style>