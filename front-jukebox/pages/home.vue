<template>
    <div class="home-container">
        <div class="home-left">
            <v-col>
                <!-- <Pochette></Pochette> -->
                
                <div class="home-pochette" >
                    <v-field-label class="label-pochette">Playing now</v-field-label>
                    <br/>
                    <img src="~/assets/img/Dont-worry-be-happy.jpg"/>
                    <br/>
                    <v-col class="song">
                        <v-label class="label-song">Bobby Mcferrin</v-label>
                        <v-label class="label-song">Don’t Worry Be Happy</v-label>
                    </v-col>
                </div>

                <div class="horizontal-line">
                    <v-divider class="ms-3 border-opacity-100" inset></v-divider> <!-- horizontal-line -->
                </div>

                <!-- <Pochette></Pochette> -->
                
                <div class="home-pochette">
                    <v-field-label class="label-pochette">Next song</v-field-label>
                    <br/>
                    <img src="~/assets/img/Ill-be-there-for-you.jpg"/>
                    <br/>
                    <v-col class="song">
                        <v-label class="label-song">The Rembrandts</v-label>
                        <v-label class="label-song">I'll be there for you</v-label>
                    </v-col>
                    
                </div>
            </v-col>
            
        </div>

        <v-divider class="ms-3 border-opacity-100" inset vertical></v-divider>

        <div class="home-right">

          <p>{{ playlistArray.values.name }}</p>

            <v-divider class="border-opacity-100" vertical></v-divider>
            <!-- <v-data-table/> -->
            <div class="playlist-tab">
                <v-container class="pa-1">
                  <v-item-group v-model="selection" multiple>
                    <v-row>
                      <!-- liste des song retourner par le provider -->
                      <v-col v-for="(item,song) in playlistArray.values" :key="song" cols="12" md="4">
                        <p>Song id :{{ item.playlistSongs.SongId }}</p>
                      </v-col>
                    </v-row>
                  </v-item-group>
                </v-container> 
            </div>
            
            <div>
                <v-btn class="add-song-button" text="Add a song" @click="getPlaylist()"></v-btn>
                <v-btn class="add-song-button" text="Get playlist" @click="getPlaylist()"></v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
// import
import { storeToRefs } from 'pinia';
import { ref, computed, onMounted, watch  } from 'vue'
import { usePlaylistStore } from '../stores/PlaylistStore';
import { useRoute } from "vue-router";
import { getPlaylistForABar } from "~/server/api/getPlaylist"

const playlistStore = usePlaylistStore();

// Utiliser les métadonnées SEO
useSeoMeta({
  title: "Dijital jukebox - home page",
  ogTitle: "Dijital jukebox - home page",
  description: "This is the home page",
  ogDescription: "This is the home page",
});

// Définir les métadonnées de la page
definePageMeta({
  //middleware: ["auth"],
});

// propriété
const IdBar = ref(1);
const IdPlaylist = ref(5);
const playlistArray = ([]);

// récupération de la playlist
const getPlaylist = async () => {
  await playlistStore.searchPlaylist(IdBar.value, IdPlaylist.value)
  playlistArray.values = playlistStore.resultPlaylist
  // playlistArray.splice(0,playlistArray.length,...playlistStore.resultPlaylist.playlistSongs)
  console.log(playlistArray.values.name)
}

// async function getPlaylist(){
//   try {
//     const response = await getPlaylistForABar(IdBar.value, IdPlaylist.value)
//     if (!Array.isArray(response)) {
//       throw new Error('La réponse n\'est pas un tableau valide')
//     }
//     playlistArray.splice(0, playlists.length, ...response)
//   } catch (error) {
//     console.error('Erreur:', error)
//   }
// }

onMounted(() => {
  getPlaylist()
});

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
    padding-left: 20%;
    /* padding-bottom: 5%;
    padding-top: 5%; */
    
}

.home-right {
    width: 70%;
    flex-direction: column;
    align-items: center;
}

.home-pochette {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-bottom: 5%;
    padding-top: 5%; */
}

.label-pochette {
    color: white;
    font-weight: bold;
}

.label-song {
    color: white;
}

.song {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-bottom: 5%;
    padding-top: 5%; */
}

.form {
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    /* padding-bottom: 5%;
    padding-top: 5%; */
}

.playlist-tab {
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 5%;
    padding-top: 5%;
}

.add-song-button {
    background-color: #E76F51;
    color: white;
    margin-left: 5%;
    margin-right: 5%;
}

/* .img-album {
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 5%;
    padding-top: 5%;
} */

</style>