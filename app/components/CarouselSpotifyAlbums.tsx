"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

const tokenBody = process.env.TOKEN_BODY
const tokenUrl = process.env.TOKEN_URL
const tokenHeaders = process.env.TOKEN_HEADERS
const id = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET

export default async function CarouselSpotifyAlbums(){

  const[ albumList, setAlbumList ] = useState([])

useEffect( ()=>{
   fetch("https://accounts.spotify.com/api/token", {
    method:"POST",
    headers: new Headers({"Content-Type": "application/x-www-form-urlencoded"}),
    body: JSON.stringify({
      grant_type:"client_credentials",
      client_id: id,
      client_secret: secret
    })
  })
  .then(res =>{
    if( res.ok ){
      console.log(res)
      res.json()
    }
  })
  .catch(e =>{
    console.log(e)
    return e.message
  })
},[])
  return (
    <section>
      
      <div className="wrapper h-[400px]">
        <div className="w-[100%] relative flex gap-3">
          {/* {albumList.map((image) => {
            return (
              <div className="w-1/3 h-[400px] mx-3 z-10">
                <Image className="carousel-image  rounded-lg" src={image.path} alt={image.name} width={400} height={300} />
              </div>
            )
          })} */}

         
          {/* banner */}
          <div className="absolute left-0 top-12 banner w-[100%] h-[305px] bg-primaryBlack z-0"></div>
        </div>
      </div>
    </section>
  )
}