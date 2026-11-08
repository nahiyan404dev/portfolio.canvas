"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-control";
import logo from "@/assets/niloy.png";
 

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link href="#home" className="shrink-0">
          <Image
            src={logo}
            height={50}
            width={50}
            alt="Portfolio logo"
            priority
            className="rounded-full object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">

          <ModeToggle />
          <Link href='/gopal_das.pdf'
          download='gopal_das.pdf'
          >
          <Button variant="outline" className="rounded-full border border-border p-5 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <Download size={16} />
            Résumé
          </Button>
               
          </Link>
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t bg-background/95 px-6 py-5 shadow-lg backdrop-blur-xl md:hidden"
        >
          <div className="container mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link href='/gopal_das.pdf'
          download='gopal_das.pdf'
          >
          <Button variant="outline" className="hidden gap-2 sm:flex p-4">
            <Download size={16} />
            Résumé
          </Button>
 
          </Link>
             
          </div>
          
        </div>
      )}
    </header>
  );
}