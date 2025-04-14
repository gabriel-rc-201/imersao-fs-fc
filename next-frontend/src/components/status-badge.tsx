import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status.toLowerCase()) {
      case "approved":
        return {
          label: "Aprovado",
          className: "bg-green-100 text-green-800 border-green-200",
        };
      case "pending":
        return {
          label: "Pendente",
          className: "bg-yellow-100 text-yellow-800 border-yellow-200",
        };
      case "rejected":
        return {
          label: "Rejeitado",
          className: "bg-red-100 text-red-800 border-red-200",
        };
      default:
        return {
          label: status,
          className: "bg-slate-100 text-slate-800 border-slate-200",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-medium border",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
