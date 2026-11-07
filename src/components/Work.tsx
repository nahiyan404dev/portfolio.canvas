// import Link from "next/link";
// import { Button } from "./ui/button";
// import { ArrowUpDown } from "lucide-react";


// type Project = {
//   id: string;
//   year: string;
//   type: string;
//   title: string;
//   tagline: string;
//   description: string;
//   stack: string[];
//   image: string;
//   live?: string;
//   github: string;
// };

// const projects: Project[] = [
//   {
//     id: "01",
//     year: "2026",
//     type: "Full Stack",
//     title: "E-Commerce Store",
//     tagline: "Complete online shopping platform",
//     description:
//       "Product listing, cart, JWT authentication, Stripe payments and an admin dashboard for managing orders and inventory.",
//     stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
//     image: "/projects/ecommerce.png",
//     live: "https://your-project.vercel.app",
//     github: "https://github.com/yourname/ecommerce",
//   },
//   {
//     id: "02",
//     year: "2026",
//     type: "Web App",
//     title: "TaskFlow",
//     tagline: "Kanban-style project manager",
//     description:
//       "Drag-and-drop boards, team collaboration, role-based access and real-time updates using WebSockets.",
//     stack: ["React", "Express.js", "PostgreSQL", "Socket.io", "Prisma"],
//     image: "/projects/taskflow.png",
//     live: "https://your-project.vercel.app",
//     github: "https://github.com/yourname/taskflow",
//   },
//   {
//     id: "03",
//     year: "2025",
//     type: "API",
//     title: "BlogHub",
//     tagline: "Multi-user blogging platform",
//     description:
//       "Markdown editor, comments, likes, search and pagination with a REST API documented using Swagger.",
//     stack: ["Next.js", "Node.js", "MySQL", "Redis"],
//     image: "/projects/bloghub.png",
//     github: "https://github.com/yourname/bloghub",
//   },
//   {
//     id: "04",
//     year: "2025",
//     type: "Product",
//     title: "Weather Dash",
//     tagline: "Clean weather dashboard",
//     description:
//       "Live weather, 7-day forecast and saved cities, built with a third-party API and server-side caching.",
//     stack: ["React", "TypeScript", "Tailwind CSS"],
//     image: "/projects/weather.png",
//     live: "https://your-project.vercel.app",
//     github: "https://github.com/yourname/weather",
//   },
// ];

// export default function Work() {
//   return (
//     <section id="work" className="mx-auto max-w-5xl px-6 py-24">
//       <p className="mb-2 text-sm uppercase tracking-widest text-neutral-500">
//         Selected work
//       </p>
//       <h2 className="mb-3 text-4xl font-bold">Things worth opening</h2>
//       <p className="mb-12 max-w-xl text-neutral-400">
//         A few projects I built while learning, each with live demo and source code.
//       </p>

//       <div className="grid gap-8 md:grid-cols-2">
//         {projects.map((p) => (
//           <article
//             key={p.id}
//             className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/30"
//           >
//             {/* Image */}
//             <div className="aspect-video w-full overflow-hidden bg-neutral-900">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Content */}
//             <div className="flex flex-1 flex-col p-6">
//               <p className="mb-2 text-xs text-neutral-500">
//                 {p.id} / {p.year} · {p.type}
//               </p>
//               <h3 className="text-2xl font-semibold">{p.title}</h3>
//               <p className="mt-1 text-sm text-neutral-300">{p.tagline}</p>
//               <p className="mt-3 flex-1 text-sm text-neutral-400">{p.description}</p>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 {p.stack.map((s) => (
//                   <span
//                     key={s}
//                     className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
//                   >
//                     {s}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 {p.live && (
//                     <Link href={p.live}>
//                         <Button  className="!px-5 !py-2 !text-xs">
//                     Live demo ↗
//                   </Button>
//                     </Link>
                  
//                 )}
//                 <Link href={p.github}>
//                     <Button
                  
//                   variant="outline"
                  
//                   className="!px-5 !py-2 !text-xs"
//                 >
//                   GitHub ↗
//                 </Button>
//                 </Link>
                
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//       <Button variant="outline"className="text-neutral-400 rounded-full transition-all duration-300  p-5 ">
//             Résumé PDF
//             <ArrowUpDown />
//       </Button>
//       <button
//           className="text-2xl md:hidden"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? "✕" : "☰"}
//         </button>

//       <div className="mt-12 text-center">
//         <Button variant="outline" >
//           See all projects on GitHub ↗
//         </Button>
//       </div>
//     </section>
//   );
// }