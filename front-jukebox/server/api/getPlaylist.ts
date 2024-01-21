export async function getPlaylistForABar(idBar: number, idPlaylist: number){
    const runtimeConfig = useRuntimeConfig()
    
    const baseUrl = runtimeConfig.public.apiBase  
    try { 
      const response = await $fetch(`${baseUrl}/playlists/bar/${idBar}/playlist/${idPlaylist}`)
      if (!response) {
        throw new Error("Erreur de réseau")
      }
      return response
    } catch (error) {
      //console.error("Erreur serveur:", error)
      return null
    }
  }