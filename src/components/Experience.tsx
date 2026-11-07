
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight,} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bazar Dor",
    description:
      "A modern market price tracking application that helps users explore daily product prices.",
    image: "/projects/bazar-dor.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "FitLog",
    description:
      "A fitness library application for exploring workouts, exercises, and training information.",
    image: "/projects/fitlog.png",
    tech: ["React", "TypeScript", "API"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing development skills and featured projects.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b px-6 py-24">
      <div className="container mx-auto max-w-7xl">

        <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
          My Portfolio
        </p>

        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted-foreground">
              Some of the projects I have worked on.
            </p>
          </div>

          <Button variant="outline">
            <Link href="https://github.com/" target="_blank">
              View GitHub
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/70 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="space-y-4 p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3 px-5 pb-5">
                <Button size="sm" variant="outline">
                  {/* <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link> */}
                </Button>

                <Button size="sm">
                  <Link href={project.demo} target="_blank">
                    Live Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
