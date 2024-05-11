import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

export default function Footer() {
  return (
    <footer className="border sticky top-full">
      <div className="container h-16 flex items-center justify-between">
        <p className="text-muted-foreground">&copy; yoshihira</p>
        <ModeToggle />
      </div>
    </footer>
  );
}
