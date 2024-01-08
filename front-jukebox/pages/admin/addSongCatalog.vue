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
              <v-btn @click="reset" color="error">clear</v-btn>
            </div>
          </v-form>      
      </span>
    </div>

    <!-- séparation des parties
    <span>
      <hr>
    </span> -->
    
    <!-- partie affichage des song retourner -->
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

<script lang="ts" scoped>
  import { catalogStore } from '../../stores/CatalogStore'

  export default {
    data: () => ({
      search: '',
      select: { id: '1', provider: 'Deezer' },
      items: [
        { id: '1', provider: 'Deezer' },
        { id: '2', provider: 'Spotify' },
        { id: '3', provider: 'Youtube' },
      ],
      searchSong: {
        required: (value: string) => !!value || 'Field is required',
      },
      songs: [],
      snackbar: false,
      textSnackbar: '',
      timeout: 3000,
    }),

    methods: {
      async validateSearch(){

        
        const uri = defaultUrl + '/catalogs/search/' + this.search
        axios.get(uri).then(res => {
            this.songs = res.data
        })
      },
      reset(){
        const refform: any = this.$refs.form;
        refform.reset()
      },
      async addSongCatalog(idSong: bigint, title: string, link: string, artiste: string, album: string, cover: string){
          const uri = defaultUrl + '/catalogs'
          axios.post(uri, {
            idbar: 1,
            idTrack: idSong,
            titleSong: title,
            link: link,
            artistName: artiste,
            albumName: album,
            cover: cover
          })
          .then( (response) => {
            if(response.status == 200){
              console.log(this.textSnackbar)
              this.textSnackbar = 'le titre à été ajouté au catalog'
              this.snackbar = true
              console.log(this.textSnackbar)
            }
            if(response.status == 204){
              this.textSnackbar = 'le titre ce trouve déjà dans le catalog'
              this.snackbar = true
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
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