<template>
    <div class="home-container">
        <div class="home-left">
            <v-col>
                <Pochette></Pochette>

                <div class="horizontal-line">
                    <v-divider class="ms-3 border-opacity-100" inset></v-divider> <!-- horizontal-line -->
                </div>

                <Pochette></Pochette>
                
                <!-- <div class="home-pochette">
                    <v-field-label>Next song</v-field-label>
                    <br/>
                    <v-card-title/>
                    <br/>
                    <v-col class="song">
                        <v-label>The Rembrandts</v-label>
                        <span/>
                        <v-label>I'll be there for you</v-label>
                    </v-col>
                    
                </div> -->
            </v-col>
            
        </div>

        <v-divider class="ms-3 border-opacity-100" inset vertical></v-divider>

        <div class="home-right">
            <v-divider class="border-opacity-100" vertical></v-divider>
            <v-btn class="add-song-button" text="Login" @click="login"></v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import {pochette } from 'Pochette';
export default {
    setup() {
        const router = useRouter();

        const login = () => {
            router.push('/search');
        };

        return {
            login,
        };
    },
};
</script>

<style>
.home-container{
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    background: #287271;
}
    
.home-left {
    display: flex;
    width: 30%;
    justify-content: space-around;
}

.horizontal-line {
    display: flex;
    padding-bottom: 5%;
    padding-top: 5%;
    padding-left: 20%;
}

.home-right {
    width: 70%;
    flex-direction: column;
    align-items: center;
}

.form {
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 5%;
    padding-top: 5%;
}

.add-song-button {
    color: #E76F51;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 5%;
    padding-top: 5%;
}

</style>