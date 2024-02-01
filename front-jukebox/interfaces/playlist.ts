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
  
  export interface InitPlaylist{
    initPlaylist: PlaylistDto[] | null,
  }