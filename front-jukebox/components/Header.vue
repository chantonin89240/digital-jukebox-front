<template>
  <div>
      <v-app-bar class="nav-bar">
        <v-btn icon class="btn-home" to="/">
          <v-icon>mdi mdi-home</v-icon>
        </v-btn>
        <v-divider class="ms-3" inset vertical></v-divider>
        <img class="img-logo" src="@/assets/img/Jukebox-Logo.png" alt="Jukebox Logo" />
        <v-divider class="ms-3" inset vertical></v-divider>
        <nuxt-link class="link-header" to="/admin/addSongCatalog">{{$t("adminLayout.catalogs")}}</nuxt-link>
        <v-divider class="ms-3" inset vertical></v-divider>
        <nuxt-link class="link-header" >{{$t("adminLayout.playlist")}}</nuxt-link> <!-- to="/playlist" -->
        <v-divider class="ms-3" inset vertical></v-divider>
        <nuxt-link class="link-header" >{{$t("adminLayout.management")}}</nuxt-link> <!-- to="/management" -->
        <v-divider class="ms-3" inset vertical></v-divider>
        <nuxt-link class="link-header" >{{$t("adminLayout.monitor")}}</nuxt-link> <!-- to="/monitor" -->
        <v-divider class="ms-3" inset vertical></v-divider>
        <nuxt-link class="link-header" >{{$t("adminLayout.login")}}</nuxt-link> <!-- to="/login" -->
        <v-divider class="ms-3" inset vertical></v-divider>
        <nuxt-link class="link-header" @click="logout">{{$t("adminLayout.logout")}}</nuxt-link>
      </v-app-bar>
  </div>  
</template>


<script lang="ts" setup>
const router = useRouter();
const logout = () => {
  router.push('/login');
};
</script>


<style>
.nav-bar{
  background: #4F626D;
  position: fixed;
  top: 0;
  /* width: 100%; */

}

  .btn-home {
    color: #FFF;
    margin-right: 10px;
  }    

  .img-logo {
    width: 14%;
    height: auto;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .link-header{
    margin-left: 16px;
    margin-right: 16px;
  }

</style>