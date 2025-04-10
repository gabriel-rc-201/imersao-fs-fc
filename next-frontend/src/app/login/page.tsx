import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthForm } from "./authForm"

export default function LoginPage() {

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-132px)]">
      <Card className="w-full max-w-md bg-slate-800/50 border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Autenticação Gateway</CardTitle>
          <CardDescription className="text-slate-400">Insira sua API Key para acessar o sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm />
        </CardContent>
      </Card>
    </div>
  )
}
