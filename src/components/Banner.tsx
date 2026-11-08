
import Link from "next/link";
import AnimatedButton from "./AnimationButton";

const Banner = () => {
  return (
    <section 
    id="home"
    className="relative min-h-screen justify-center-saf overflow-hidden px-5 py-20 text-black sm:px-10 lg:px-16">

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center-safe">

         {/* Location */}
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400">
          Dhaka, Bangladesh
        </p>

        {/* Name */}
        <h1 className="mb-4 text-[clamp(3rem,14vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-black dark:text-white">
          Gopal
          <br />
          Das.
        </h1>

        {/* Description */}
        <p className="max-w-6xl text-3xl font-normal leading-tight tracking-tight text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Full-stack engineer building{" "}
          <span className="font-semibold">
            AI
            <br />
            retrieval and agent systems
          </span>
          <br />
          that hold up in production.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
            <AnimatedButton/>

          {/* Secondary Badge */}
           <Link
        href="#contact"
        className="group inline-flex max-w-full flex-wrap items-center justify-center gap-2.5 rounded-full border-2 border-dashed border-gray-400 px-3 py-2.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white dark:text-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black sm:gap-3 sm:px-5 sm:py-3 sm:text-sm"
      >
        {/* Availability indicator */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-500" />
        </span>

        {/* Main text */}
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          Let's build something amazing
        </span>

        {/* Available badge */}
        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-[9px] font-bold tracking-wider text-black transition-all duration-300 group-hover:bg-white sm:px-3 sm:text-[10px]">
          AVAILABLE
        </span>
      </Link>
          

        </div>
      </div>
    </section>
  );
};

export default Banner;
 