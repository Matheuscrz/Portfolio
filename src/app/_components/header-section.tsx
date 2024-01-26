import { ModeToggle } from "./mode-toggle";

function HeaderSection() {
  return (
    <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
      <ModeToggle />
    </div>
  );
}
export default HeaderSection;
