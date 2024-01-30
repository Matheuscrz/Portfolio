import Image from "next/image";
import HeaderSection from "./_components/header-section";
import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import StackSection from "./_components/stack-section";
import ProjectsSection from "./_components/projects-section";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <section id="contacts">
        <h1 className="text-primary">Contatos</h1>
      </section>
    </main>
  );
}
