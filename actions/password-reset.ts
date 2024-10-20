"use server";

import apiError from "@/functions/api-error";
import { PASSWORD_RESET } from "@/functions/api";
import { redirect } from "next/navigation";

export async function passwordReset(_: object, formData: FormData) {
  try {
    const login = formData.get("login") as string | null;
    const key = formData.get("key") as string | null;
    const password = formData.get("password") as string | null;

    if (!login || !key || !password) {
      throw new Error("Preencha o formulário");
    }

    const { url: endpoint } = PASSWORD_RESET();

    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Não autorizado");
    }

    await response.json();
    redirect("/login");
  } catch (error) {
    return apiError(error);
  }
}
