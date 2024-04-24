"use client"

import Image from "next/image"
import useFetchAlbums from '@/app/custom_hooks/useFetchAlbums'
import { useState } from "react"


export default function CarouselSpotifyAlbums(){
  
  const albums = useFetchAlbums()

  return (
    
    albums &&  ( <section>
      
      <div className="wrapper h-[400px] w-[1200rem]">
       
        <div className="w-[100%] relative flex justify-around gap-3 ">
          {/* Album Card */}
          {albums.map((album) => {
            return (
              <div className="w-[400px] h-[400px] mx-3 z-10 " key={album.name}>
                <a className="w-[400px] h-[400px]" href={album.external_urls.spotify ?? '#'} target="_blank">
                  <img className="w-[400px] h-[400px] rounded-lg" src={album.images[1].url} alt={album.name}/>
                </a>
              </div>
            )}
          )}

         
          {/* banner */}
          <div className="absolute left-0 top-12 banner w-[100%] h-[305px] bg-primaryBlack z-0"></div>
        </div>
      </div>
    </section>)
  )
}