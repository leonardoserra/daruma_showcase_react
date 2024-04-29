"use client"

import useFetchAlbums from '@/app/custom_hooks/useFetchAlbums'
import { Suspense } from 'react';

//GSAP
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable) 

export default function SpotifyAlbumsList(){
  
  const albums = useFetchAlbums()
  
  gsap.config({
    nullTargetWarn: false,
  })

  Draggable.create(".draggable-album-list", {
    type: "x",
    bounds: "#album-list-container"
  });


  const cards = document.querySelectorAll('.album-card')
  
  cards.forEach(function(card, index){
    gsap.to(card, {
      autoAlpha: 1,
      y:0,
      delay: index - (0.66 * index),
      scrollTrigger:{
        trigger:"#album-list-container",
      }
    })

    card.addEventListener('mouseover', function(){
      gsap.to(this, {
        duration:0.2,
        rotate:4,
        scale:1.1
      })
    })

    card.addEventListener('mouseout', function(){
      gsap.to(this, {
        duration:0.4,
        rotate:0,
        scale:1
      })
    })

  })
  

    
  
  return (
    
    albums &&  ( 
    <section id="album-list-container" className="horizontal-scroll">
      
      <div className="draggable-album-list wrapper h-[400px] w-[1200rem]">
       
        <div className="w-[100%] h-[100%] relative flex justify-around gap-3">
        <Suspense fallback={<div> Caricamento album </div>}>
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
        </Suspense>

         
          {/* banner */}
          <div className="absolute left-0 top-12 banner w-[100%] h-[305px] bg-primaryBlack z-0"></div>
        </div>
      </div>
    </section>)
  )
}