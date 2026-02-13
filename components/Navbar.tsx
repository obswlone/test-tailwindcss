"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-silver">
      <div className="flex h-20 items-center justify-between px-6 lg:px-24">
        <Image src="/nexcent.svg" alt="Nexcent Logo" width={155} height={24} />

        <ul className="hidden lg:flex items-center gap-12 font-medium">
          {["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"].map(
            (item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary transition-colors">
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="text-primary px-5 py-2 rounded-md hover:bg-black/5 transition">
            Login
          </button>
          <Button>Sign up</Button>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 pb-6 bg-silver">
          {["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-primary">
                {item}
              </a>
            ),
          )}

          <button className="text-primary">Login</button>
          <Button>Sign up</Button>
        </div>
      )}
    </nav>
  );
}
