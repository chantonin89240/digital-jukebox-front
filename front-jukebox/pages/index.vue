<template>
    <div class="Home">
        <div>
          <div class="title">
                <h2>Login</h2>
            </div>

            <form class="form">
                <v-text-field
                  clearable
                  label="Email"
                  hide-details="auto">
                </v-text-field>
            </form>

            <form class="form">
                <v-text-field
                  clearable
                  label="Password">
                </v-text-field>
            </form>

            <v-btn text="Login"></v-btn>
            <nuxt-link class="link-header" to="/">Don’t have an account yet ? What are you waiting for !</nuxt-link>
          </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta ({
  layout: 'admin-layout',
});
</script>


<style>
.container{
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
}

.title {
    background: #E76F51;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 35px;
    padding-bottom: 15%;
    padding-top: 5%;
}

.form {
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
    padding-top: 5%;
}

app-button {
   margin-block: 10%;
   color: #E76F51;
}

</style>