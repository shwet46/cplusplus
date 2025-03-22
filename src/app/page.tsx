import Forumactivity from "@/components/Forumactivity";
import Hero from "../components/Hero";
import Homecards from "../components/Homecards";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
     <main className="min-h-screen antialiased">
      <Hero/>
      <Homecards darkMode={false}/>
      <Forumactivity/>
      <Footer/>
    </main>
    </>
  );
}
