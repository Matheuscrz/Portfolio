import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function IntroSection() {
  return (
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
          Olá, eu sou o
          <br />
          <span className="text-primary">Matheus Lima</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Desenvolvedor Full-Stack
        </p>
        <div className="space-x-4">
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1rnvK6mPIhMYDPNojCJMw13OCfwbB1IXs&export=download"
            className="bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold"
          >
            Download CV
          </a>
          <a
            href="mailto:matheuslimasof.eng@gmail.com"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
export default IntroSection;
