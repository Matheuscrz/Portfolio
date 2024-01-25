import Image from "next/image";
import { ModeToggle } from "./_components/mode-toggle";

export default function Home() {
  return (
    <main className="">
      <header>
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <ModeToggle />
        </div>
      </header>
      <section id="banner" className="space-y-6 py-8 md:py-12 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <h1 className="text-primary">Banner</h1>
        </div>
      </section>
      <section id="about">
        <h1 className="text-primary">Sobre mim</h1>
      </section>
      <section id="features">
        <h1 className="text-primary">Stack</h1>
      </section>
      <section id="projects">
        <h1 className="text-primary">Projetos</h1>
      </section>
      <section id="contacts">
        <h1 className="text-primary">Contatos</h1>
      </section>
    </main>
  );
}
