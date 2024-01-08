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
    artistName: any,
    albumName: any,
    cover: string
}

interface Provider {
    provider: [];
    data: Catalog[] | null;
    loading: boolean;
    error: string | null;
}
const runtimeConfig = useRuntimeConfig()
export const useApiStore = defineStore('catalogStore', {
   
    state: (): Provider => ({
        provider: [],
        data: null,
        loading: false,
        error: null,
      }),
      actions: {
        async searchProvider(search: string) {
          const { data, pending, error, status } = useFetch<Provider>(runtimeConfig.public.apiBase + '/catalogs/search/' + search, {
            method: 'GET'
          })

          this.provider = data.value;
        },
    },
});