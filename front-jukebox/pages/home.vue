<template>
    <div class="home-container">
        <div class="home-left">
            <v-col>                
                <div class="home-pochette" >
                    <v-field-label class="label-pochette">Playing now</v-field-label>
                    <br/>
                    <img :src="playlist.initPlaylist?.playlistSongs[0].song.cover"/>
                    <br/>
                    <v-col class="song">
                        <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[0].song.author }}</v-label>
                        <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[0].song.title }}</v-label>
                    </v-col>
                </div>

                <div class="horizontal-line">
                    <v-divider class="ms-3 border-opacity-100" inset></v-divider> <!-- horizontal-line -->
                </div>
                
                <div class="home-pochette">
                    <v-field-label class="label-pochette">Next song</v-field-label>
                    <br/>
                    <img :src="playlist.initPlaylist?.playlistSongs[2].song.cover"/>
                    <br/>
                    <v-col class="song">
                        <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[2].song.author }}</v-label>
                        <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[2].song.title }}</v-label>
                    </v-col>
                    
                </div>
            </v-col>
            
        </div>

        <v-divider class="ms-3 border-opacity-100" inset vertical></v-divider>

        <div class="home-right">
            <v-divider class="border-opacity-100" vertical></v-divider>
            <!-- <v-data-table/> -->
            <div class="playlist-tab">
                <v-container class="pa-1">
                  <v-item-group v-model="selection" multiple>
                      <!-- liste des song retourner par le provider -->
                      <v-col v-for="(item,song) in playlist.initPlaylist?.playlistSongs" :key="song" cols="12">
                            <p>Song id :{{ item.song.songId }}</p>
                            <p>Song order :{{ item.playlistOrder }}</p>
                            <p>Song name :{{ item.song.title }}</p> 
                      </v-col>
                  </v-item-group>
                </v-container> 
            </div>
            
            <div>
                <v-btn class="add-song-button" text="Add a song" to="/AddSongPlaylist"></v-btn>
            </div>
        </div>
        <audio controls autoplay :src="playlist.initPlaylist?.playlistSongs[3].song.link"></audio>
    </div>
</template>

<script setup lang="ts">
// import
import { storeToRefs } from 'pinia';
import { ref, computed, onMounted, watch, reactive  } from 'vue'
import { usePlaylistStore } from '../stores/PlaylistStore';
import { useRoute } from "vue-router";
import { getPlaylistForABar } from "../server/api/getPlaylist"
import { type InitPlaylist } from "../interfaces/playlist"
import { useRouter } from 'vue-router';

const router = useRouter();

const playlistStore = usePlaylistStore();

// Utiliser les métadonnées SEO
// useSeoMeta({
//   title: "Dijital jukebox - Home page",
//   ogTitle: "Dijital jukebox - Home page",
//   description: "This is the home page",
//   ogDescription: "This is the home page",
// });

// // Définir les métadonnées de la page
// definePageMeta({
//   middleware: ["auth"],
// });

// propriété
const IdBar = ref(1);
const IdPlaylist = ref(5);
const playlistArray = reactive<Array<InitPlaylist>>([]);
const playlist = reactive({initPlaylist : null})

// récupération de la playlist
// async function getPlaylist () {
//   await playlistStore.searchPlaylist(IdBar.value, IdPlaylist.value)
//   //playlistArray.values = playlistStore.resultPlaylist
//   playlistArray.splice(0,playlistArray.length,...playlistStore.resultPlaylist.playlistSongs)
//   console.log(playlistArray[0].playlist.name)
// }

async function getPlaylist(){
  try {
    const response = await getPlaylistForABar(IdBar.value, IdPlaylist.value)
    // if (!Array.isArray(response)) {
    //   throw new Error('La réponse n\'est pas un tableau valide')
    // }
    playlist.initPlaylist = response
    console.log(playlist.initPlaylist)
    // playlistArray.splice(0, playlistArray.length, ...response)
    //console.log(playlistArray)
  } catch (error) {
    console.error('Erreur:', error)
  }
}

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