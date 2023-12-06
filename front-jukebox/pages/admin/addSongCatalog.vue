<template>
  <!-- partie recherche et provider  -->
  <div class="providerContainer">
    <span>
        <v-form ref="form" @submit.prevent="validateSearch" >
          <v-text-field v-model="search" :rules="searchSong" required label="Song, Artist or Album name"></v-text-field>
          <!-- NE PAS SUPPRIMER = select pour provider -->
          <!-- <v-select v-model="select" label="Provider" :items="items" item-title="provider" item-value="id" required :rules="v => !!v || 'Select one provider !'" persistent-hint return-object single-line ></v-select> -->

          <v-btn color="success" type="submit" class="me-4">Validate</v-btn>
          <v-btn @click="reset" color="error">clear</v-btn>
        </v-form>      
    </span>
  </div>

  <!-- séparation des parties
  <span>
    <hr>
  </span> -->
  
  <!-- partie affichage des song retourner -->
  <div class="">
    <v-card class="mx-auto">
      <v-container class="pa-1">
        <v-item-group v-model="selection" multiple>
          <v-row>
            <v-col v-for="(item,song) in songs" :key="song" cols="12" md="4">
              <v-item>
                <v-img
                  :src="`${item.album.cover}`"
                  height="150"
                  class="text-right pa-2">
                </v-img>
                <p>Title : {{ item.title }}</p>
                <v-btn>add</v-btn>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts" scoped>
  import axios from 'axios';
  const defaultUrl = 'http://ocelot.local/api'

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
      songs: []
    }),

    methods: {
      async validateSearch(){
        const uri = defaultUrl + '/catalogs/search/' + this.search
        console.log(uri)
        axios.get(defaultUrl + '/catalogs/search/' + this.search).then(res => {
            console.log(res.data)
            this.songs = res.data
        })
      },
      reset(){
        const refform: any = this.$refs.form;
        refform.reset()
      },
    }
  }
</script>


<style scoped>
.providerContainer{
  margin: 3em;
}
span{
  text-align: -webkit-center;
}
hr{
  margin: 1em;
  width: 60%;
}
</style>