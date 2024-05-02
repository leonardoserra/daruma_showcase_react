"use client"

import Image from "next/image"
import Logo from '@/public/big_logo_hero.png'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LogoHero() {
  const linkSpotify = process.env.NEXT_PUBLIC_SPOTIFY_URL
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".logo-container", {y: -80,  ease: "bounce.in", duration:3});
    tl.to(".logo-container",{ y:-50, duration:3, yoyo: true, repeat:-1,  ease: "power1.inOut"})
    tl.to(".logo-container",{ x:-6, duration:1.88, yoyo: true, repeat:-1,  ease: "power1.inOut"}, "<")

    const logo = document.getElementById('logo-image')

    logo?.addEventListener('mouseover',function(){
      gsap.to(this,{
        scale:1.2
      })
    })

    logo?.addEventListener('mouseout',function(){
      gsap.to(this,{
        scale:1
      })
    })
  });


  return (
    <section id="logo-section" className="mt-32 mb-40 m-auto">
      <div className="m-auto w-[700px] h-[700px] logo-container">
        <a href={linkSpotify} target="_blank" rel="noopener noreferrer">
          <Image
            id="logo-image"
            alt="Logo Hero"
            src={Logo}
            width={700}
            height={700}
            quality={100}
            priority={true}
          />
        </a>
      </div>
    </section>

  )
}