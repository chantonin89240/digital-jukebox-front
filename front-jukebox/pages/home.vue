<template>
  <div>
    <div class="lecture">
      <audio controls autoplay :src="playlist.initPlaylist?.playlistSongs[3].song.link"></audio>
    </div>
    
    <v-container>
      <v-row>
        <v-col cols="4">  
          <v-row>
            <v-col>
              <div class="pochette">
                <v-label class="label-pochette">Playing now</v-label>
                <br/>
                <img :src="playlist.initPlaylist?.playlistSongs[0].song.cover"/>
                <br/>
                <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[0].song.author }}</v-label>
                <br/>
                <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[0].song.title }}</v-label>
              </div>
            </v-col>
          </v-row>   
          <v-divider class="ms-3 border-opacity-100" inset></v-divider>
          <v-row>
            <v-col>
              <div class="pochette">
                <v-label class="label-pochette">Next song</v-label>
                <br/>
                <img :src="playlist.initPlaylist?.playlistSongs[2].song.cover"/>
                <br/>
                <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[2].song.author }}</v-label>
                <br/>
                <v-label class="label-song">{{ playlist.initPlaylist?.playlistSongs[2].song.title }}</v-label>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-divider class="ms-3 border-opacity-100" inset vertical></v-divider>
        <v-col class="listSong" cols="7">
            <div>
              <v-row>
                <v-col v-for="(item,song) in playlist.initPlaylist?.playlistSongs" :key="song" cols="4">
                  <div>
                    <p>Order : {{ item.playlistOrder }}</p>
                    <p>{{ item.song.author }} - {{ item.song.title }}</p>
                    <p>{{ item.song.albumTitle }}</p> 
                  </div>
                </v-col>
              </v-row>
            </div>
            <div>
                <v-btn class="add-song-button" text="Add a song" to="/AddSongPlaylist"></v-btn>
            </div>
        </v-col>
      </v-row>
    </v-container>
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

.lecture{
  padding: 2em;
  text-align: center;
}
.pochette{
  margin-top: 1em;
  margin-bottom: 2em;
  text-align: center;
}
.label-pochette {
  color: white;
  font-weight: bold;
}
.label-song {
  color: white;
}
.listSong{
  text-align: center;
  color: white;
  padding: 2em;
}
.song {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add-song-button {
  background-color: #E76F51;
  color: white;
  margin: 2em;
}
</style>