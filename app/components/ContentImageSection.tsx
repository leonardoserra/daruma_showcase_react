"use client"

import Image from "next/image";
import ArticleImage from "@/public/section_1_img.png";
import { Rubik_Bubbles } from "next/font/google";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, useGSAP) 

const rubik_bubbles = Rubik_Bubbles({ subsets: ["latin"], weight: "400", display:"swap" });
export default function ContentImageSection(){

  useGSAP(()=>{
    gsap.from('#article-image-1', {
      duration:2,
      scrollTrigger:{ 
        trigger:'#article-image-1',
        start: 'top bottom',
        end: 'center center',
      }, 
      x: 500,
      ease: 'power1.inOut'
    })
  })

  return(
    <section className="w-100 my-52">
      <article className="w-100 px-32 flex flex-nowrap gap-6">

        <div className="w-[50%] article-content">
          <h3 className={rubik_bubbles.className + " text-[30px] mb-6"}>ORIGINS</h3>
          <p className="text-[26px] text-center leading-loose">
            Daruma is a musician, a producer, MPC head and sp404 player, beatmaker who loves finger drums, performance, busking and street art. His sound is always unpredictable, passing from gritty dusty boombap to triphop to drunken beats, laid back or chill beats. After many ep and albums released by himself indipendently he decided to work with labels as Vinyl Digital (Germany) , and he is part of the label and collective Beat's Tailors (Bologna, Italy) and collaborate with more collective as The Farseers (Budapest, Hungary) and with the trio Florence Lofi Sunset (Florence, Italy). Also he made a collab Ep with Empty Sentiment  (Canada).He's part of the sp404 Italian Crew.He played a fundamental role in the Mercolofi, Vol. I, Mercolofi, Vol. II,  Mercolofi, Vol. III  project incipit made by Sasha Shinezz. Currently based in Bologna  (Italy).
          </p>
        </div>

        <div className="w-[50%] article-image" id="article-image-1">
          <Image
            
            className="mx-auto image-1"
            src={ArticleImage} 
            alt="Daruma Image article"
            width={600}
            quality={100}
            priority={true}
          />
        </div>
        
      </article>
    </section>
  )
}