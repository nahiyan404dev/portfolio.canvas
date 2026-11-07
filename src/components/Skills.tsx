
"use client";

import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Palette,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    category: "Styling & UI",
    icon: Palette,
    technologies: ["Tailwind CSS", "Shadcn UI", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: Server,
    technologies: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools",
    icon: Code2,
    technologies: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "Libraries",
    icon: Layers,
    technologies: ["Lucide React", "React Hook Form", "Zod"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b px-6 py-24">
      <div className="container mx-auto max-w-7xl">

        <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
          My Expertise
        </p>

        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Skills & Technologies
        </h2>

        <p className="mb-12 max-w-xl leading-7 text-muted-foreground">
          Technologies and tools I use to create modern,
          responsive, and scalable web applications.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card
              key={skill.category}
              className="group transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <CardContent className="p-6">

                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
