"use client";

import {
  Code2,
  GraduationCap,
  Rocket,
  Lightbulb,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description:
      "Creating responsive, accessible, and modern web experiences using today's technologies.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Transforming ideas into meaningful digital solutions through thoughtful design and development.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Building practical solutions, improving performance, and tackling real-world challenges.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Growth",
    description:
      "Always learning, exploring emerging technologies, and improving technical skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-border px-6 py-24"
    >
      <div className="container mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Passionate about building
            <span className="text-muted-foreground"> digital experiences.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            A little introduction about my journey, interests, and
            the things that drive me to create better digital products.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* About Description */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Who I Am
            </h3>

            <p className="text-base leading-8 text-muted-foreground">
              I am a passionate developer interested in designing
              and developing modern, user-friendly web applications.
              I enjoy turning creative ideas into functional digital
              experiences.
            </p>

            <p className="text-base leading-8 text-muted-foreground">
              My journey involves continuously exploring frontend
              and backend technologies, learning development best
              practices, and working on projects that challenge
              my problem-solving abilities.
            </p>

            <p className="text-base leading-8 text-muted-foreground">
              I believe in continuous improvement, clean code,
              collaboration, and building products that make a
              meaningful difference.
            </p>

            {/* Bottom Info */}
            <div className="flex flex-wrap gap-3 pt-3">
              {["Creative Mindset", "Clean Code", "Lifelong Learner"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <CardContent className="p-6">

                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>

                    <h3 className="mb-3 font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>

                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}