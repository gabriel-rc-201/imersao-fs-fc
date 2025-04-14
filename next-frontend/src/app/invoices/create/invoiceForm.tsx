"use client";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Lock } from "lucide-react";
import { createInvoiceAction } from "./createInvoiceAction";

// para fazer validação de formulário podemos fazer uso do useForm, zod ou yup
// para validação de dados

export const InvoiceForm = () => {
  return (
    <form action={createInvoiceAction} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-slate-300"
            >
              Valor
            </label>
            <Input
              id="amount"
              name="amount"
              type="number"
              step={0.01}
              min={0}
              placeholder="0,00"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-slate-300"
            >
              Descrição
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descreva o motivo do pagamento"
              className="min-h-[120px] bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white">Dados do Cartão</h3>

          <div className="space-y-2">
            <label
              htmlFor="card_number"
              className="text-sm font-medium text-slate-300"
            >
              Número do Cartão
            </label>
            <div className="relative">
              <Input
                id="card_number"
                name="card_number"
                placeholder="0000000000000000"
                maxLength={16}
                className="bg-slate-700 border-slate-600 text-white pl-10"
              />
              <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="expiration_date"
                className="text-sm font-medium text-slate-300"
              >
                Data de Expiração
              </label>
              <Input
                id="expiration_date"
                name="expiration_date"
                placeholder="MM/AA"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="cvv"
                className="text-sm font-medium text-slate-300"
              >
                CVV
              </label>
              <Input
                id="cvv"
                name="cvv"
                placeholder="123"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="cardholder_name"
              className="text-sm font-medium text-slate-300"
            >
              Nome no Cartão
            </label>
            <Input
              id="cardholder_name"
              name="cardholder_name"
              placeholder="Como aparece no cartão"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </div>
      </div>

      {/* <div className="border-t border-slate-700 pt-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-400">Subtotal</span>
            <span className="text-white">{total.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Taxa de Processamento (2%)</span>
            <span className="text-white">{total.fee}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span className="text-white">Total</span>
            <span className="text-white">{total.total}</span>
          </div>
        </div>
      </div> */}

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          className="border-slate-600 text-white hover:bg-slate-700 hover:text-white"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <Lock className="h-4 w-4 mr-2" />
          Processar Pagamento
        </Button>
      </div>
    </form>
  );
};
