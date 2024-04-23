import Image from "next/image"
import Logo from '@/public/big_logo_hero.png'

export default function LogoHero(){


    return (
        <section className="mt-20 mb-40 m-auto">
            <div className="m-auto w-[700px] h-[700px]">
                <Image 
                    alt="Logo Hero" 
                    src={Logo} 
                    width={700}
                    height={700}
                    quality={100}
                />
            </div>
        </section>
      
    )
}