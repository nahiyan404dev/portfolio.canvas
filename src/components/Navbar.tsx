

"use client";
import { useState } from "react";
import { ModeToggle } from "./theme-control";
import { Button } from "./ui/button";
import Link from "next/link";



const links = ["About", "Skills", "Experience", "Work", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-bbg backdrop-blur-md"> 
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight">
          
        </a>

        <ul className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="transition hover:text-black">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4">
          <ModeToggle/>
          <Link href='/resume-pdf'>
          <Button variant="outline"className="text-neutral-400">
            Résumé PDF ↓
          </Button>
          </Link>
        </div>

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-neutral-300"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}