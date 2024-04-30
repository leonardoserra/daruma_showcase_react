"use client"
import Image from "next/image";


export default function LoadingAlbumCard({album}){
  return (
    <div className="album-card w-[400px] h-[400px] mx-3 z-10">
      <a className="w-[400px] h-[900px]" href={album.external_urls.spotify ?? '#'} target="_blank">
        <Image  className="w-[400px] h-[400px] rounded-lg" src="/default.jpg" alt="default image" width={400} height={400} quality={100}/>
      </a>
    </div>
  )
}