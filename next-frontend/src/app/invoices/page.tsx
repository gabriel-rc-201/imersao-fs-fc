import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Download, Plus } from "lucide-react";
import { Pagination } from "@/components/pagination";
import { StatusBadge } from "@/components/status-badge";
import { DatePicker } from "@/components/date-picker";

// Dados simulados para a tabela
const invoices = [
  {
    id: "#INV-001",
    date: "30/03/2025",
    description: "Compra Online #123",
    value: "R$ 1.500,00",
    status: "aprovado",
  },
  {
    id: "#INV-002",
    date: "29/03/2025",
    description: "Serviço Premium",
    value: "R$ 15.000,00",
    status: "pendente",
  },
  {
    id: "#INV-003",
    date: "28/03/2025",
    description: "Assinatura Mensal",
    value: "R$ 99,90",
    status: "rejeitado",
  },
];

export default function InvoiceListPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-2xl font-bold text-white">
              Faturas
            </CardTitle>
            <CardDescription className="text-slate-400">
              Gerencie suas faturas e acompanhe os pagamentos
            </CardDescription>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Nova Fatura
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-700/30 rounded-lg">
              <div>
                <label className="text-sm font-medium text-slate-300 mb-1 block">
                  Status
                </label>
                <Select defaultValue="todos">
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="aprovado">Aprovado</SelectItem>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="rejeitado">Rejeitado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300 mb-1 block">
                  Data Inicial
                </label>
                <DatePicker placeholder="dd/mm/aaaa" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300 mb-1 block">
                  Data Final
                </label>
                <DatePicker placeholder="dd/mm/aaaa" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300 mb-1 block">
                  Buscar
                </label>
                <Input
                  placeholder="ID ou descrição"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>

            <Table>
              <TableHeader className="bg-slate-700/30">
                <TableRow className="border-slate-700 hover:bg-slate-700/50">
                  <TableHead className="text-slate-300">ID</TableHead>
                  <TableHead className="text-slate-300">DATA</TableHead>
                  <TableHead className="text-slate-300">DESCRIÇÃO</TableHead>
                  <TableHead className="text-slate-300">VALOR</TableHead>
                  <TableHead className="text-slate-300">STATUS</TableHead>
                  <TableHead className="text-slate-300">AÇÕES</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.id}
                    className="border-slate-700 hover:bg-slate-700/50"
                  >
                    <TableCell className="font-medium text-white">
                      {invoice.id}
                    </TableCell>
                    <TableCell className="text-slate-300">
                      {invoice.date}
                    </TableCell>
                    <TableCell className="text-slate-300">
                      {invoice.description}
                    </TableCell>
                    <TableCell className="text-slate-300">
                      {invoice.value}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={invoice.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Link href={`/invoices/${invoice.id.replace("#", "")}`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-slate-300 hover:text-white hover:bg-slate-700"
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">Ver detalhes</span>
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-300 hover:text-white hover:bg-slate-700"
                        >
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Baixar</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">
                Mostrando 1 - 3 de 50 resultados
              </p>
              <Pagination currentPage={1} totalPages={3} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
