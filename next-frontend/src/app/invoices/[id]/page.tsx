import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Check } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";

// Dados simulados para a fatura
const invoice = {
  id: "INV-001",
  status: "aprovado",
  createdAt: "30/03/2025 às 14:30",
  value: "R$ 1.500,00",
  description: "Compra Online #123",
  creationDate: "30/03/2025 14:30",
  lastUpdate: "30/03/2025 14:35",
  paymentMethod: {
    type: "Cartão de Crédito",
    lastDigits: "**** **** **** 1234",
    holder: "João da Silva",
  },
  transactionStatus: [
    {
      status: "Fatura Criada",
      date: "30/03/2025 14:30",
    },
    {
      status: "Pagamento Processado",
      date: "30/03/2025 14:32",
    },
    {
      status: "Transação Aprovada",
      date: "30/03/2025 14:35",
    },
  ],
  additionalData: {
    accountId: "ACC-12345",
    clientIp: "192.168.1.1",
    device: "Desktop - Chrome",
  },
};

export default function InvoiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-4">
            <Link href="/invoices">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-300 hover:text-white hover:bg-slate-700"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Voltar</span>
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <CardTitle className="text-2xl font-bold text-white">
                Fatura #{params.id}
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
            Criada em {invoice.createdAt}
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
                  <span className="text-white font-medium">#{params.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valor</span>
                  <span className="text-white font-medium">
                    {invoice.value}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Data de Criação</span>
                  <span className="text-white font-medium">
                    {invoice.creationDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Última Atualização</span>
                  <span className="text-white font-medium">
                    {invoice.lastUpdate}
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
                  {invoice.transactionStatus.map((status, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-green-500 rounded-full p-1">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">
                          {status.status}
                        </p>
                        <p className="text-sm text-slate-400">{status.date}</p>
                      </div>
                    </div>
                  ))}
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
                  <span className="text-slate-400">Tipo</span>
                  <span className="text-white font-medium">
                    {invoice.paymentMethod.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Últimos Dígitos</span>
                  <span className="text-white font-medium">
                    {invoice.paymentMethod.lastDigits}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Titular</span>
                  <span className="text-white font-medium">
                    {invoice.paymentMethod.holder}
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
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">ID da Conta</span>
                  <span className="text-white font-medium">
                    {invoice.additionalData.accountId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">IP do Cliente</span>
                  <span className="text-white font-medium">
                    {invoice.additionalData.clientIp}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dispositivo</span>
                  <span className="text-white font-medium">
                    {invoice.additionalData.device}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
