"use server";

import apiError from "@/functions/api-error";
import { USER_POST } from "@/functions/api";
import { login } from "./login";

export async function singUp(_: object, formData: FormData) {
  try {
    const username = formData.get("username") as string | null;
    const password = formData.get("password") as string | null;
    const email = formData.get("email") as string | null;

    if (!username || !password || !email) {
      throw new Error("Preencha o formulário");
    }

    const { url } = USER_POST();

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Usuário já cadastrado");
    }

    await response.json();

    const { ok } = await login({ data: null, ok: true, error: "" }, formData);

    if (!ok) {
      throw new Error("Não foi possível logar");
    }

    return { data: null, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
