"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const isAuthenticated = pathname !== "/auth";

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href={isAuthenticated ? "/dashboard" : "/auth"}
          className="text-xl font-bold text-white"
        >
          Full Cycle Gateway
        </Link>

        {isAuthenticated && (
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Olá, usuário</span>
            <Button variant="destructive" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
