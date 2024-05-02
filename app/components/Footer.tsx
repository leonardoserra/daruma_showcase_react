"use client"
import { Reenie_Beanie, Rubik_Bubbles } from "next/font/google";
const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight: "400", display:"swap" });
const rubik_bubbles = Rubik_Bubbles({ subsets: ["latin"], weight: "400", display:"swap" });

const linkSpotify = process.env.NEXT_PUBLIC_SPOTIFY_URL
const linkBandcamp = process.env.NEXT_PUBLIC_BANDCAMP_URL
const linkSoundcloud = process.env.NEXT_PUBLIC_SOUNDCLOUD_URL
const linkInstagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL
const linkThreads = process.env.NEXT_PUBLIC_THREADS_URL
const linkYoutube = process.env.NEXT_PUBLIC_YOUTUBE_URL
const linkFacebook = process.env.NEXT_PUBLIC_FACEBOOK_URL
const darumaEmail = process.env.NEXT_PUBLIC_DARUMA_EMAIL
const linkPaypal = process.env.NEXT_PUBLIC_PAYPAL_URL

export default function Footer() {

  return (
    <footer className={reenie_beanie.className +"mt-16 w-100 h-[480px] py-16 px-40  bg-primaryBlack"}>
      <div className="w-[300px] mx-auto text-white">

        <div className={rubik_bubbles.className +"mb-6 text-center"}>contacts</div>

        <div className="flex justify-between mb-20">
          <ul className="flex flex-col justify-between">
            <li><a href={linkSpotify} target="_blank"> Spotify</a></li>
            <li><a href={linkBandcamp} target="_blank"> Bandcamp</a></li>
            <li><a href={linkSoundcloud} target="_blank"> Soundcloud</a></li>
          </ul>


          <ul className="flex flex-col justify-between">
            <li><a href={linkInstagram} target="_blank"> Instragram</a></li>
            <li><a href={linkThreads} target="_blank"> Threads</a></li>
            <li><a href={linkYoutube} target="_blank"> Youtube</a></li>
            <li><a href={linkFacebook} target="_blank"> Facebook</a></li>
          </ul>
        </div>

        <div className="mb-1 text-center"><a href={ "mailto:" + darumaEmail }>darumabeats404@gmail.com</a></div>
        <div className="text-center">
          <a href={linkPaypal} target="_blank">
            <button className="main-btn mt-6">PAYPAL DIRECT SUPPORT</button>
          </a>
        </div>

      </div>
      <div className="text-right  text-white">Made by My Self &nbsp; <span className="text-redDarumaColor">&hearts;</span></div>

      
    </footer>
  ) 
}