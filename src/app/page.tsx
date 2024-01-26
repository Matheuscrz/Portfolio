import Image from "next/image";
import HeaderSection from "./_components/header-section";
import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import StackSection from "./_components/stack-section";

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <IntroSection />
      <AboutSection />
      <StackSection />
      <section id="projects">
        <h1 className="text-primary">Projetos</h1>
      </section>
      <section id="contacts">
        <h1 className="text-primary">Contatos</h1>
      </section>
    </main>
  );
}
