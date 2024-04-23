import { Reenie_Beanie, Rubik_Bubbles } from "next/font/google";
const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight: "400" });
const rubik_bubbles = Rubik_Bubbles({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="mt-16 w-100 h-[480px] py-16 px-40  bg-primaryBlack">
      <div className="w-[300px] mx-auto text-white">

        <div className="mb-6 text-center">contacts</div>

        <div className="flex justify-between mb-20">
          <ul className="flex flex-col justify-between">
            <li><a href="https://open.spotify.com/artist/6zUJZaqND4ZduOsIXRH8Sb" target="_blank"> Spotify</a></li>
            <li><a href="https://darumabeats404.bandcamp.com/" target="_blank"> Bandcamp</a></li>
            <li><a href="https://soundcloud.com/user-86604497" target="_blank"> Soundcloud</a></li>
          </ul>


          <ul className="flex flex-col justify-between">
            <li><a href="https://www.instagram.com/daruma_beats/" target="_blank"> Instragram</a></li>
            <li><a href="https://www.threads.net/@daruma_beats" target="_blank"> Threads</a></li>
            <li><a href="https://www.youtube.com/channel/UCt5rSfyrWvniIqwWHMu166Q" target="_blank"> Youtube</a></li>
            <li><a href="https://www.facebook.com/pg/daruma404/posts/?ref=page_internal" target="_blank"> Facebook</a></li>
          </ul>
        </div>

        <div className="mb-1 text-center"><a href="mailto:darumabeats404@gmail.com">darumabeats404@gmail.com</a></div>
        <div className="text-center">
          <a href="https://paypal.me/leonardoserra1134?country.x=IT&locale.x=it_IT" target="_blank">
            <button className="main-btn mt-6">PAYPAL DIRECT SUPPORT</button>
          </a>
        </div>

      </div>
        <div className="text-right  text-white">Made by My Self &nbsp; <span className="text-redDarumaColor">&hearts;</span></div>
    </footer>
  )
}