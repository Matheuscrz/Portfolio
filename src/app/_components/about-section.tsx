import Image from "next/image";

function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/Avatar.jpg"
              alt="Matheus Lima"
              width={800}
              height={800}
              quality="95"
              priority={true}
              className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg: row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            Sobre mim
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Desenvolvedor Full-Stack com expertise em React.js, Next.js,
            JavaScript, TypeScript, e Java, além de sólidos conhecimentos em
            PostgreSQL e Redis para manipulação de bancos de dados e
            implementação de caches. Minha abordagem de trabalho é guiada por
            Metodologias Ágeis, garantindo uma gestão eficiente de projetos.
            Cursando Engenharia da Computação na Universidade Federal de
            Sergipe, aplico também habilidades em Docker, Git, Postman, Nginx,
            assegurando a eficácia desde o desenvolvimento até a administração
            de servidores web.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
