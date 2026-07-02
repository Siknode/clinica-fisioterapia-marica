import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Especialidades from "@/components/Especialidades";
import ParaQuemE from "@/components/ParaQuemE";
import Estrutura from "@/components/Estrutura";
import Equipe from "@/components/Equipe";
import Resultados from "@/components/Resultados";
import AssistenteIA from "@/components/AssistenteIA";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Mapa from "@/components/Mapa";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Diferenciais />
        <Especialidades />
        <ParaQuemE />
        <Estrutura />
        <Equipe />
        <Resultados />
        <AssistenteIA />
        <Blog />
        <FAQ />
        <Mapa />
      </main>
      <Footer />
    </>
  );
}
