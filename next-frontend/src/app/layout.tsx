import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Full Cycle Gateway",
  description: "Gateway de pagamentos completo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-900">
          <Header />
          <main>{children}</main>
          <footer className="py-4 text-center text-sm text-slate-500">
            © 2025 Full Cycle Gateway. Todos os direitos reservados.
          </footer>
        </div>
      </body>
    </html>
  )
}
