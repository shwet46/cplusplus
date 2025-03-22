import Forumactivity from "@/components/Forumactivity";
import Hero from "../components/Hero";
import Homecards from "../components/Homecards";

export default function Home() {
  return (
    <>
     <main className="min-h-screen antialiased">
      <Hero/>
      <Homecards darkMode={false}/>
      <Forumactivity/>
    </main>
    </>
  );
}
