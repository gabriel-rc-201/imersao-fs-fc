"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Lock } from "lucide-react";

export default function CreateInvoicePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [total, setTotal] = useState({
    subtotal: "R$ 0,00",
    fee: "R$ 0,00",
    total: "R$ 0,00",
  });

  // Atualiza o total quando o valor muda
  useEffect(() => {
    if (!formData.value) {
      setTotal({
        subtotal: "R$ 0,00",
        fee: "R$ 0,00",
        total: "R$ 0,00",
      });
      return;
    }

    try {
      // Converte o valor para número
      const valueAsNumber = Number(
        formData.value.replace(/[^\d,]/g, "").replace(",", "."),
      );
      if (isNaN(valueAsNumber)) throw new Error("Valor inválido");

      const subtotal = valueAsNumber;
      const fee = subtotal * 0.02; // Taxa de 2%
      const totalValue = subtotal + fee;

      // Formata os valores para exibição
      const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      setTotal({
        subtotal: formatter.format(subtotal),
        fee: formatter.format(fee),
        total: formatter.format(totalValue),
      });
    } catch (error) {
      console.error("Erro ao calcular total:", error);
    }
  }, [formData.value]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Formatação específica para o campo de valor
    if (name === "value") {
      // Remove tudo que não for número ou vírgula
      let formattedValue = value.replace(/[^\d,]/g, "");

      // Adiciona R$ no início
      if (formattedValue) {
        formattedValue = `R$ ${formattedValue}`;
      }

      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você enviaria os dados para o servidor
    console.log("Dados do formulário:", formData);

    // Redireciona para a lista de faturas
    router.push("/invoices");
  };

  const handleCancel = () => {
    router.push("/invoices");
  };

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
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="value"
                    className="text-sm font-medium text-slate-300"
                  >
                    Valor
                  </label>
                  <Input
                    id="value"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    placeholder="R$ 0,00"
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
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Descreva o motivo do pagamento"
                    className="min-h-[120px] bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-medium text-white">
                  Dados do Cartão
                </h3>

                <div className="space-y-2">
                  <label
                    htmlFor="cardNumber"
                    className="text-sm font-medium text-slate-300"
                  >
                    Número do Cartão
                  </label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="0000 0000 0000 0000"
                      className="bg-slate-700 border-slate-600 text-white pl-10"
                    />
                    <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="expiryDate"
                      className="text-sm font-medium text-slate-300"
                    >
                      Data de Expiração
                    </label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
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
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="cardholderName"
                    className="text-sm font-medium text-slate-300"
                  >
                    Nome no Cartão
                  </label>
                  <Input
                    id="cardholderName"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleChange}
                    placeholder="Como aparece no cartão"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="text-white">{total.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Taxa de Processamento (2%)
                  </span>
                  <span className="text-white">{total.fee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-white">{total.total}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
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
        </CardContent>
      </Card>
    </div>
  );
}
