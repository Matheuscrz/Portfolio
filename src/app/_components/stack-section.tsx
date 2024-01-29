import * as Icons from "./icon";

function StackSection() {
  return (
    <section
      id="stack"
      className="dark:bg-transparent bg-slate container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Stack
        </h2>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 md:max-w-[64rem] md:grid-cols-5">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.AWSIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.ArduinoIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.CSSIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.DockerIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.ExpressIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.GitIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.GithubIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.GradleIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.HtmlIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.JavaIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.JSIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.JestIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.LinuxIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.NextIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.NginxIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.NodeIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.NpmIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.PostgreIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.PythonIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.ReactIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.RedisIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.TailwindIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.TSIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.UbuntuIcon />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[90px] flex- justify-evenly rounded-md p-6">
            <Icons.YarnIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;
