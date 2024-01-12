<template>
  <div>
    <!-- partie recherche et provider  -->
    <div class="providerContainer">
      <span>
          <v-form ref="form" @submit.prevent="validateSearch" >
            <v-text-field v-model="search" class="inputSearch" :rules="searchSong" required label="Song, Artist or Album name"></v-text-field>
            <!-- NE PAS SUPPRIMER = select pour provider -->
            <!-- <v-select v-model="select" label="Provider" :items="items" item-title="provider" item-value="id" required :rules="v => !!v || 'Select one provider !'" persistent-hint return-object single-line ></v-select> -->
            <div class="containButton">
              <v-btn color="success" type="submit" class="me-4">Validate</v-btn>
              <v-btn @click="resetFields" color="error">clear</v-btn>
            </div>
          </v-form>      
      </span>
    </div>

    <!-- partie affichage des song retourné -->
    <div class="">
        <v-container class="pa-1">
          <v-item-group v-model="selection" multiple>
            <v-row>
              <!-- liste des song retourner par le provider -->
              <v-col v-for="(item,song) in songs" :key="song" cols="12" md="4">
                <!-- card de mise en forme -->
                <v-card class="mx-auto">
                <v-item>
                  <!-- image de la pochette -->
                  <v-img :src="`${item.album.cover}`" height="150" class="text-right pa-2"></v-img>
                  <!-- div des informations -->
                  <div class="containInfor">
                    <p>Title : {{ item.title }}</p>
                    <p>Artist name : {{ item.artist.name }}</p>
                    <p>Album name : {{ item.album.title }}</p>
                  </div>
                  <!-- div du button d'ajout -->
                  <div class="containButton">
                    <v-btn class="buttonAddSong" @click="addSongCatalog(item.id, item.title, item.link, item.artist.name, item.album.title, item.album.cover)">add</v-btn>
                  </div>
                </v-item>
                </v-card>
              </v-col>
            </v-row>
          </v-item-group>
        </v-container>
        <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ textSnackbar }}
        <template v-slot:actions>
          <v-btn color="blue" variant="textSnackbar" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script setup lang="ts" scoped>
// import
import { ref, computed } from 'vue'
import { useCatalogStore } from '../../stores/CatalogStore';
const catalogStore = useCatalogStore();

// propriété
const search = ref('')
const searchSong = ref('');
const requiredValidator = (value) => !!value || 'Field is required';
const searchSongError = computed(() => requiredValidator(searchSong.value));
const songs = ref([]);
const snackbar = ref(false);
const textSnackbar = ref('');
const timeout = ref(3000);


// méthode
// # recherche avec le provider #
const validateSearch = async () => {
  const searchData = {
    result: search.value
  }
  // appel de l'action du store catalog
  await catalogStore.searchProvider(searchData.result)
  // incrémentation du tableau avec les résultats
  songs.value = catalogStore.resultProvider
}

// # clear l'input de recherche #
const resetFields = () => {
  search.value = ''
}

// # ajouter le sons dans le catalog #
const addSongCatalog = async (idSong: bigint, title: string, link: string, artiste: string, album: string, cover: string) => {
  // appel de l'action du store catalog
  await catalogStore.addSongInCatalog(1, idSong, title, link, artiste, album, cover)
  // vérification du resultat et affichage du snackbar
  if(catalogStore.resultStatut == 200){
    textSnackbar.value = 'le titre à été ajouté au catalog'
    snackbar.value = true
  }
  if(catalogStore.resultStatut == 204){
    textSnackbar.value = 'le titre ce trouve déjà dans le catalog'
    snackbar.value = true
  }
}
</script>


<style scoped>
.providerContainer{
  margin: 3em;
  padding: 1em;
  
}
.inputSearch{
  background: #fff;
}
.containInfor{
  padding: 1em;
}
.containButton{
  text-align-last: center;
  padding: 1em;
  color: #E9C46A;
}
.buttonAddSong {
  width: 8em;
}
</style>