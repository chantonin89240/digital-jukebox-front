interface Track{
  id: bigint,
  readable: boolean,
  title: string,
  title_short: string,
  title_version: string,
  link: string,
  duration: bigint,
  rank: bigint,
  explicit_lyrics: boolean,
  explicit_content_lyrics: bigint,
  explicit_content_cover: bigint,
  preview: string,
  artist: {
    id: bigint,
    name: string,
    link: string,
    picture: string,
    picture_small: string,
    picture_medium: string,
    picture_big: string,
    picture_xl: string,
    tracklist: string,
    type: string,
  },
  album: {
    id: bigint,
    title: string,
    cover: string,
    cover_small: string,
    cover_big: string,
    cover_xl: string,
    md5_image: string,
    tracklist: string,
    type: string,
  },
  type: string
}

interface Catalog {
    idbar: bigint,
    idTrack: bigint,
    titleSong: string,
    link: string,
    artistName: string,
    albumName: string,
    cover: string
}

interface Provider {
    provider: Track[] | null,
    statutAdd: number
}

const runtimeConfig = useRuntimeConfig()
export const useCatalogStore = defineStore('catalogStore', {
   
    state: (): Provider => ({
        provider: null,
        statutAdd: 0
      }),
      getters: {
        resultProvider: (state) => state.provider,
        resultStatut: (state) => state.statutAdd,
      },
      actions: {
        async searchProvider(search: string) {
          const { data, pending, error, status } = await useFetch<Track[]>(runtimeConfig.public.apiBase + '/catalogs/search/' + search, {
            method: 'GET'
          })

          this.provider = data.value;
        },
        async addSongInCatalog(idbar: bigint, idSong: bigint, title: string, link: string, artiste: string, album: string, cover: string) {
          let statusCode = 0
          const { data, pending, error, status } = await useFetch(runtimeConfig.public.apiBase + '/catalogs', {
            method: 'POST',
            body: {
              idbar: idbar,
              idTrack: idSong,
              titleSong: title,
              link: link,
              artistName: artiste,
              albumName: album,
              cover: cover
            },
            onResponse({response}){
              statusCode = response.status;
            }
          })
          this.statutAdd = statusCode;
        }
    },
});