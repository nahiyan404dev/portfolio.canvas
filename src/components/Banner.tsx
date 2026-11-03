import Link from "next/link";
import { Button } from "./ui/button";

 
export default function Banner() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-24"
    >
      <p className="mb-4 text-sm text-neutral-400">Dhaka, Bangladesh</p>
      <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
        Gopal <span className="text-neutral-500">Das.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-neutral-400">
        Full-stack engineer building <strong className="text-white">web apps and AI systems</strong> that
        hold up in production.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href='/Work'><Button>See the work</Button></Link>
        <Link href='/Contact'><Button variant="outline">
          Contact me
        </Button></Link>
        
      </div>
    </section>
  );
}