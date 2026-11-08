
"use client";
 
import { Download, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "./ui/card";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="border-b px-6 py-24">
      <div className="container mx-auto max-w-7xl">

        <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
          Get In Touch
        </p>

        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Lets work together.
        </h2>

        <p className="mb-12 max-w-xl leading-7 text-muted-foreground">
          Have a project in mind or want to discuss an opportunity?
          Feel free to reach out. I would love to hear from you.
        </p>

        <div className="grid gap-12 md:grid-cols-2">

          <div className="space-y-7">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <Mail className="text-primary" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground">
                nahiyan9462@gmail.com
              </p>
            </div>

            <div className="flex gap-2 space-y-6">
               <div className="flex flex-wrap gap-3">
                 <Link href='https://github.com/nahiyan404dev'>
                    <Button variant="outline" className="hidden gap-2 sm:flex p-4">
                      <FaGithub size={20}/>
                      GitHub
                    </Button>
                </Link>
                <Link href='https://www.linkedin.com/in/gopal-das-38676b391'>
                  <Button variant="outline" className="hidden gap-2 sm:flex p-4">
                    <FaLinkedin size={20}/>
                    Linkedin
                  </Button>
                </Link>
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
          </div>
          <Card className="p-5">
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Connect this form to a backend or email service.");
            }}
          >
            <div className="space-y-2 p-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
          </Card>

        </div>
      </div>
    </section>
  );
}
