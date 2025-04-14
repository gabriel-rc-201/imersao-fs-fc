import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Check } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import { cookies } from "next/headers";
import { IInvoice } from "../types/invoice";

export const getInvoice = async (id: string) => {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value.toString() || "";

  const response = await fetch(`http://localhost:8080/invoice/${id}`, {
    headers: {
      "X-API-KEY": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch invoice");
  }

  return response.json();
};

export default async function InvoiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const invoice: IInvoice = await getInvoice(id);

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-slate-300 hover:text-white hover:bg-slate-700"
              asChild
            >
              <Link href="/invoices">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Voltar</span>
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <CardTitle className="text-2xl font-bold text-white">
                Fatura #{id}
              </CardTitle>
              <StatusBadge status={invoice.status} />
            </div>
          </div>
          <Button
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-700 hover:text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-slate-400 mb-6">
            Criada em {new Date(invoice.created_at).toLocaleDateString()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-700/30 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Informações da Fatura
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">ID da Fatura</span>
                  <span className="text-white font-medium">#{id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valor</span>
                  <span className="text-white font-medium">
                    {invoice.amount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Data de Criação</span>
                  <span className="text-white font-medium">
                    {new Date(invoice.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Última Atualização</span>
                  <span className="text-white font-medium">
                    {new Date(invoice.updated_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Descrição</span>
                  <span className="text-white font-medium">
                    {invoice.description}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/30 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Status da Transação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 bg-green-500 rounded-full p-1">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{invoice.status}</p>
                      <p className="text-sm text-slate-400">
                        {new Date(invoice.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/30 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Método de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Últimos Dígitos</span>
                  <span className="text-white font-medium">
                    {invoice.card_last_digits}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/30 border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Dados Adicionais
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
