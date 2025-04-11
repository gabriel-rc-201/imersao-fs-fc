import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (formData: FormData) => {
  "use server";
  const apiKey = formData.get("apiKey") as string;

  const response = await fetch("http://localhost:8080/accounts", {
    method: "GET",
    headers: {
      "X-API-KEY": apiKey as string,
    },
  });

  if (!response.ok) {
    throw new Error("API Key inválida");
  }

  const cookiesStore = await cookies();
  cookiesStore.set("apiKey", apiKey);

  redirect("/invoices");
};

// pode usar o iron-session para armazenar a chave da API
// para ter um loggin mais seguro

export const AuthForm = () => {
  return (
    <form className="space-y-6" action={loginAction}>
      <div className="space-y-2">
        <label htmlFor="apiKey" className="text-sm font-medium text-slate-300">
          API Key
        </label>
        <div className="flex gap-2">
          <Input
            id="apiKey"
            name="apiKey"
            placeholder="Digite sua API Key"
            className="bg-slate-700 border-slate-600 text-white"
          />
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <span className="sr-only">Entrar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <Alert className="bg-slate-700 border-slate-600">
        <Info className="h-4 w-4 text-indigo-400" />
        <AlertTitle className="text-white">Como obter uma API Key?</AlertTitle>
        <AlertDescription className="text-slate-300">
          Para obter sua API Key, você precisa criar uma conta de comerciante.
          Entre em contato com nosso suporte para mais informações.
        </AlertDescription>
      </Alert>
    </form>
  );
};
