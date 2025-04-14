import type React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InvoiceForm } from "./invoiceForm";

export default function CreateInvoicePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Criar Nova Fatura
          </CardTitle>
          <p className="text-slate-400">
            Preencha os dados abaixo para processar um novo pagamento
          </p>
        </CardHeader>
        <CardContent>
          <InvoiceForm />
        </CardContent>
      </Card>
    </div>
  );
}
