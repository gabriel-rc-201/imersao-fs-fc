import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Header from "@/components/header";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Cycle Gateway",
  description: "Gateway de pagamentos completo",
};

export const logoutAction = async () => {
  "use server";
  const cookiesStore = await cookies();
  cookiesStore.delete("apiKey");
  redirect("/login");
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = await cookies();
  const isAuthenticated = cookiesStore.get("apiKey")?.value !== undefined;

  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-900">
          <Header
            isAuthenticated={isAuthenticated}
            logoutAction={logoutAction}
          />
          <main>{children}</main>
          <footer className="py-4 text-center text-sm text-slate-500">
            © 2025 Full Cycle Gateway. Todos os direitos reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}
