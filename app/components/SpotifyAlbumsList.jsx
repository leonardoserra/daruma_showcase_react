"use client"

import useFetchAlbums from '@/app/custom_hooks/useFetchAlbums'

//GSAP
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger) 

export default function SpotifyAlbumsList(){
  
  const albums = useFetchAlbums()

  gsap.config({
    nullTargetWarn: false,
  })

  gsap.to('.album-card', {
    autoAlpha: 1,
    y:0,
    stagger: 0.5,
    scrollTrigger:{
      trigger:'#album-list-container',
    }
  })

  return (
    
    albums &&  ( 
    <section id="album-list-container" className="horizontal-scroll">
      
      <div className="draggable-list wrapper h-[400px] w-[1200rem]">
       
        <div className="w-[100%] h-[100%] relative flex justify-around gap-3">
          {/* Album Cards */}
          {albums.map((album) => {
            return (
              <div className="album-card w-[400px] h-[400px] mx-3 z-10" key={album.name}>
                <a className="w-[400px] h-[900px]" href={album.external_urls.spotify ?? '#'} target="_blank">
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