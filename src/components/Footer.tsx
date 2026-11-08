
"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
 
const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const [currentDate, setCurrentDate] = useState("");
     useEffect(() => {
    const updateDate = () => {
      const date = new Date();

      setCurrentDate(
        new Intl.DateTimeFormat("en-GB", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
          timeZone: "Asia/Dhaka",
        }).format(date)
      );
    };

    updateDate();

    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="px-6 py-8">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
           

          <Link
            href="#home"
            className="rounded-full border p-2 transition-colors hover:bg-muted"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-8 max-w-7xl border-t pt-6 text-center text-sm text-muted-foreground">
        <p className="text-sm text-muted-foreground justify-between">
          {currentDate} &copy; Niloy. All rights reserved.
     
        </p>
      </div>
    </footer>
  );
}





// "use client";

// import { useEffect, useState } from "react";

// export default function Footer() {
//   const [currentDate, setCurrentDate] = useState("");

//   useEffect(() => {
//     const updateDate = () => {
//       const date = new Date();

//       setCurrentDate(
//         new Intl.DateTimeFormat("en-GB", {
//           weekday: "long",
//           day: "2-digit",
//           month: "long",
//           year: "numeric",
//           timeZone: "Asia/Dhaka",
//         }).format(date)
//       );
//     };

//     updateDate();

//     const interval = setInterval(updateDate, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <footer className="border-t border-border px-6 py-8">
//       <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">

//         <p className="text-sm text-muted-foreground">
//           © {new Date().getFullYear()} Gopal Das. All rights reserved.
//         </p>

//         <p className="text-sm text-muted-foreground">
//           {currentDate}
//         </p>

//       </div>
//     </footer>
//   );
// }
