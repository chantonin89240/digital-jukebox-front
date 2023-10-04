<template>
  <div>
    <v-app>
      <v-app-bar color="deep-purple accent-4" dark>
        <v-btn icon class="btn-home" to="/">
          <v-icon>mdi mdi-home</v-icon>
        </v-btn>
        <img class="img-logo" src="~/assets/Jukebox-Logo.png" alt="Jukebox Logo" />
      </v-app-bar>
    </v-app>
  </div>  
</template>

<style>
  .btn-home {
    color: #FFF;
    margin-right: 10px;
  }    

  .img-logo {
    width: 20%;
    height: auto;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

</style>