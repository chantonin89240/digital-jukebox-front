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
            <v-divider class="border-opacity-100" vertical></v-divider>
            <!-- <v-data-table/> -->
            <div class="playlist-tab">
                <!-- <Datatab/>-->
                
                <v-table>
    <thead>
      <tr>
        <th>{{$t("listPage.headers.Id")}}</th>
        <v-divider class="ms-3" inset></v-divider>
        <th>{{$t("listPage.headers.Title")}}</th>
        <v-divider class="ms-3" inset></v-divider>
        <th>{{$t("listPage.headers.Artist")}}</th>
        <v-divider class="ms-3" inset></v-divider>
        <th>{{$t("listPage.headers.Album")}}</th>
        <v-divider class="ms-3" inset></v-divider>
        <th></th>
      </tr>
    </thead>

    <tbody v-for="(item,song) in playlistArray.values" :key="song">
      <tr>
        <td>{{ item.playlistSongs.songId }}</td>
        <v-divider class="ms-3" inset></v-divider>
        <td>Stay'in alive</td>
        <v-divider class="ms-3" inset></v-divider>
        <td>Bee Gees</td>
        <v-divider class="ms-3" inset></v-divider>
        <td>Saturday night fever</td>
        <v-divider class="ms-3" inset></v-divider>
        <td>
          <v-icon>mdi-arrow-up-bold-circle-outline</v-icon>
          <v-icon>mdi-arrow-down-bold-circle-outline</v-icon>
          <v-icon>mdi-currency-usd</v-icon>
        </td>
      </tr>
    </tbody>
  </v-table> 
            </div>
            
            <div>
                <v-btn class="add-song-button" text="Add a song" @click="login"></v-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" scoped>
// import
import { ref, computed, onBeforeMount  } from 'vue'
import { usePlaylistStore } from '../stores/PlaylistStore';
const playlistStore = usePlaylistStore();


// propriété
const IdBar = ref(1)
const IdPlaylist = ref(4)
const playlistArray = ([])

// méthode
//# OnbeforeMounted pour les fonctions avant l'affichage de la page 
onBeforeMount(async () => {
  // appel de l'action du store playlist
  await playlistStore.searchPlaylist(IdBar.value, IdPlaylist.value)
  // incrémentation du tableau avec les résultats
  playlistArray.values = playlistStore.resultPlaylist
})

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