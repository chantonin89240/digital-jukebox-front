<template>
    <div>
        <v-app>
            <Header/>
            <v-main id="containerPage">
                <v-container class="pa-0" fluid>
                    <slot />
                </v-container>
            </v-main>    
        </v-app>
    </div>
</template>

<script setup>
import AdminHeader from '../components/Header.vue'
</script>

<style scoped>
#containerPage{
    background:#287271;
}
</style>