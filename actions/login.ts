"use server";

import apiError from "@/functions/api-error";
import { TOKEN_POST } from "@/functions/api";
import { cookies } from "next/headers";

export async function login(_: object, formData: FormData) {
  try {
    const username = formData.get("username") as string | null;
    const password = formData.get("username") as string | null;

    if (!username || !password) {
      throw new Error("Preencha o formulário");
    }

    const { url } = TOKEN_POST();

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Senha ou usuário inválidos");
    }

    const data = await response.json();

    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return { data: null, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
