import { Reenie_Beanie, Rubik_Bubbles } from "next/font/google";
const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight:"400"});
const rubik_bubbles = Rubik_Bubbles({subsets: ["latin"], weight:"400"});

export default function Header(){
    return (
        <header className="mt-16">
            <h1 className={reenie_beanie.className + " text-[200px]"} > DARUMA </h1>
            <h2 className={rubik_bubbles.className + " text-[50px]"} > BEATMAKER </h2>
        </header>
    )
}