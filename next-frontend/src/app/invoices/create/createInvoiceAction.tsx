"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createInvoiceAction = async (formData: FormData) => {
  const amount = formData.get("amount")?.toString().replace(",", ".") ?? "0";
  const description = formData.get("description") as string;
  const cardNumber = formData.get("card_number") as string;
  const [expiryMonth, expiryYear] = formData
    .get("expiration_date")!
    .toString()
    .split("/");
  const cvv = formData.get("cvv") as string;
  const cardholderName = formData.get("cardholder_name") as string;

  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value;

  const body = JSON.stringify({
    amount: parseFloat(amount as string),
    description,
    card_number: cardNumber,
    cvv,
    expiration_month: parseInt(expiryMonth as string),
    expiration_year: parseInt(expiryYear as string),
    cardholder_name: cardholderName,
    payment_type: "credit_card",
  });

  console.log("body", body);

  const response = await fetch("http://localhost:8080/invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey as string,
    },
    body,
  });

  if (!response.ok) {
    throw new Error("Failed to create invoice");
  }

  redirect("/invoices");
};
