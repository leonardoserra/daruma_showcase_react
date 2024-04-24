import useFetchApiToken from './useFetchApiToken.js'
import { useEffect, useState } from 'react'

const useFetchAlbums = () =>{
  const {token} = useFetchApiToken()

  const id = process.env.NEXT_PUBLIC_ARTIST_ID
  const [albums, setAlbums] = useState(null)
  const [albumError, setAlbumError] = useState(null)

  useEffect(()=>{
    fetch(`https://api.spotify.com/v1/artists/${id}/albums`,{
      headers: {'Authorization': `Bearer ${token}`}
    })
    .then(res=>{
      if (!res.ok) throw new Error('chiamata api album andata male')

      return res.json()
    }).then(res=>{
      setAlbums(res.items)
    }).catch(e=>{
      setAlbumError(e)
    })

  },[])

  return albums
}

export default useFetchAlbums