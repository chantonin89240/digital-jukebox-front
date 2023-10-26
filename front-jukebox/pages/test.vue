<template>
    <div class="container">
        <div class="left">
            <img class="img-main-logo" src="~/assets/jukebox-Logo.png" alt="Jukebox Logo" />
        </div>

        <div class="right">
            <div class="title">
                <h2>Login</h2>
            </div>

            <form class="form">
                <v-text-field
                    clearable
                    label="Email"
                    :rules="rules"
                    hide-details="auto">
                </v-text-field>
            </form>

            <form class="form">
                <v-text-field
                    label="Password"
                    :rules="rules">
                </v-text-field>
            </form>

            <v-btn class="login-button" text="Login" @click="login"></v-btn>
            <nuxt-link class="link-header" to="/">Don’t have an account yet ? What are you waiting for !</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();

        const rules = [
            (value: string | null) => !!value || 'Required.',
            (value: string | null) => (value && value.length >= 3) || 'Min 3 characters',
        ];

        const login = () => {
            router.push('/home');
        };

        return {
            rules,
            login,
        };
    },
};
</script>

<style>
.container{
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
}
    
.left {
    display: flex;
    background: #455B67;
    width: 50%;
    justify-content: space-around;
}

.img-main-logo {
     width: 100%;
     height: 40%;
     margin-left: 16px;
     margin-right: 16px;
     margin-top: 0px;
     margin-bottom: 16px;
     background-size: contain;
     background-repeat: no-repeat;
}

.right {
    /* display: flex; */
    background: #E9C46A;
    width: 50%;
    flex-direction: column;
    align-items: center;
}

.title {
    background: #E76F51;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 35px;
    margin-left: 45%;
    padding-bottom: 15%;
    padding-top: 5%;
}

.form {
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 5%;
    padding-top: 5%;
}

.form_error {
    color: red;
    top: -100%;
    font-size: 16px;
    font-weight: bold;
    position: relative;
}

.login-button {
    color: #E76F51;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 5%;
    padding-top: 5%;
}

</style>