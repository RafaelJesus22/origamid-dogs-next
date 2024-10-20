"use server";

import apiError from "@/functions/api-error";
import { PASSWORD_LOST } from "@/functions/api";

export async function passwordLost(_: object, formData: FormData) {
  try {
    const login = formData.get("login") as string | null;
    const url = formData.get("url") as string | null;

    if (!login) {
      throw new Error("Preencha o formulário");
    }

    const { url: endpoint } = PASSWORD_LOST();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        url,
      }),
    });

    if (!response.ok) {
      throw new Error("Usuário não cadastrado");
    }

    await response.json();

    return { data: null, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
