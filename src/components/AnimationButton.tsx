import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AnimatedButton = () => {
  return (
    <Link
      href="#projects"
      className="group relative inline-flex items-center gap-5
      overflow-hidden rounded-full border-2 border-black
      bg-white py-2 pl-5 pr-2
      shadow-[4px_4px_0px_#000]
      transition-all duration-300
      hover:translate-x-1 hover:translate-y-1
      hover:shadow-[2px_2px_0px_#000]"
    >
      {/* Sliding black background */}
      <span
        className="absolute inset-0 origin-left scale-x-0
        rounded-full bg-black
        transition-transform duration-500 ease-in-out
        group-hover:scale-x-100"
      />

      {/* Button text */}
      <span
        className="relative z-10 text-sm font-medium
        text-black transition-colors duration-300
        group-hover:text-white"
      >
        See the work
      </span>

      {/* Yellow arrow circle */}
      <span
        className="relative z-10 flex h-9 w-9 shrink-0
        items-center justify-center rounded-full
        bg-yellow-400 text-black
        transition-transform duration-300"
      >
        <ArrowRight size={18} />
      </span>
    </Link>
  );
};

export default AnimatedButton;