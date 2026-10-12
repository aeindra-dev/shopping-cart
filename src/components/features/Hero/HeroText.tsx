import type { HeroProps } from "./HeroTypes";

export function HeroText({ hero }: { hero: HeroProps }) {
  const alignmentClasses =
    hero.align === "center"
      ? "items-center justify-center text-center"
      : "items-start justify-end text-left pb-16";

  return (
    <div
      className={`col-start-1 row-start-1 relative z-10 flex flex-col w-full h-full p-8 md:p-16 text-white gap-6 ${alignmentClasses}`}
    >
      <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-tight">
        {hero.title}
      </h1>

      <a
        href={hero.cta.href}
        className={
          hero.cta.variant === "dark"
            ? "inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
            : "inline-block bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
        }
      >
        {hero.cta.label}
      </a>
    </div>
  );
}