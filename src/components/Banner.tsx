
"use client";

import Link from "next/link";
import {ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center border-b px-6 py-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-7">

          <Badge variant="outline" className="rounded-full px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
            Available for opportunities
          </Badge>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Dhaka,Bangladesh________________________
                
            </p>
            

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Full-Stack Engineer building AI retrieval and agent systems that hold up in production.
              <br />
              Experiences with
              <span className="text-primary"> Code.</span>
            </h1>

            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              I am a passionate Web Developer focused on creating
              modern, responsive, and user-friendly digital
              experiences using React, Next.js, and Node.js.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" >
              <Link href="#projects">
                Explore My Work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline">
              <Link href="#contact">
                Lets Talk
              </Link>
            </Button>
          </div>

          {/* <div className="flex items-center gap-5 pt-3">
            <Link href="https://github.com/" target="_blank">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com/" target="_blank">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
