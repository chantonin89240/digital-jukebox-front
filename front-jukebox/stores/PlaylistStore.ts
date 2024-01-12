interface Playlist {
  playlistId: number,
  name: string,
  playedSongId: number
  totalSong: number,
  playlistSongs: PlaylistSongs[] | null,
  barId: number
}

interface Songs {
  songId: number,
  title: string,
  cover: string,
  author: string,
  albumTitle: string,
  preview: string,
  style: string,
  link: string,
  duration: number,
  statusPromoted: string,
  playlistSongs: PlaylistSongs[] | null,
}

interface PlaylistSongs {
  PlaylistId: number
  Playlist: Playlist[] | null,
  SongId: number
  Song: Songs[] | null,
  PlaylistOrder: number
}

interface PlaylistDto {
  playlistId: number,
  name: string,
  playedSongId: number,
  totalSong: number,
  playlistSongs: PlaylistSongs[] | null,
  barId: number
}

interface InitPlaylist{
  initPlaylist: PlaylistDto[] | null,
}

const runtimeConfig = useRuntimeConfig()
export const usePlaylistStore = defineStore('playlistStore', {
   
    state: (): InitPlaylist => ({
        initPlaylist: null,
      }),
      getters: {
        resultPlaylist: (state) => state.initPlaylist
      },
      actions: {
        async searchPlaylist(idBar: number, idPlaylist: number) {
          const { data, pending, error, status } = await useFetch<PlaylistDto[]>(runtimeConfig.public.apiBase + '/playlists/bar/' + idBar + '/playlist/' + idPlaylist, {
            method: 'GET'
          })
          this.initPlaylist = data.value;
        }
    },
});