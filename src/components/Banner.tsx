
import Link from "next/link";
import AnimatedButton from "./AnimationButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen justify-center-saf overflow-hidden px-5 py-20 text-black sm:px-10 lg:px-16">

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

          {/* Primary Button */}
            

            <AnimatedButton/>

          {/* Secondary Badge */}
          <div className="flex flex-wrap items-center gap-3 rounded-full border-2 border-dashed border-gray-400 px-5 py-3 text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-white hover-">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <Link href='#contact'>
              <span>
              Let's build something amazing
            </span>

            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
              AVAILABLE
            </span>
            </Link>
            
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Hero;
 