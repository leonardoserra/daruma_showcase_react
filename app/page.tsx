import HomePage from "./homepage/page";

export default function Home() {
  return (
    <main>
      <div className="mt-12 text-center">
      <div className="custom-cursor">
        <div className="cursor cursor--large"></div>
        <div className="cursor cursor--small"></div>
      </div>
        <HomePage/>
      </div>
    </main>   
  );
}
