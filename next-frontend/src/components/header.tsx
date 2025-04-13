import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isAuthenticated: boolean;
  logoutAction: () => void;
}

export default function Header(props: HeaderProps) {
  const { isAuthenticated, logoutAction } = props;

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={"/"} className="text-xl font-bold text-white">
          Full Cycle Gateway
        </Link>

        {isAuthenticated && (
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Olá, usuário</span>
            <form action={logoutAction}>
              <Button variant="destructive" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
