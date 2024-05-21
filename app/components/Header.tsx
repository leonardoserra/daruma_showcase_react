import { Reenie_Beanie, Rubik_Bubbles, Darumadrop_One } from "next/font/google";
const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight: "400" , display: "swap"});
const darumadrop_one = Darumadrop_One({ subsets: ["latin"], weight: "400", display: "swap" });

export default function Header() {
  return (
    <header className="mt-16">
      <h1 className={reenie_beanie.className + " text-[250px]"} > DARUMA </h1>
      <h2 className={darumadrop_one.className + " text-[50px]"} > BEATMAKER </h2>
    </header>
  )
}