"use client"
import Image from "next/image"
import Logo from '@/public/big_logo_hero.png'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function LogoHero() {
  
  useGSAP(() => {
   
    gsap.to(".logo-container", {y: -80,  ease: "bounce.in", duration:3});

  });


  return (
    <section className="mt-32 mb-40 m-auto">
      <div className="m-auto w-[700px] h-[700px] logo-container">
        <Image
          
          alt="Logo Hero"
          src={Logo}
          width={700}
          height={700}
          quality={100}
          priority={true}
        />
      </div>
    </section>

  )
}