"use server";

import apiError from "@/functions/api-error";
import { USER_GET } from "@/functions/api";
import { cookies } from "next/headers";

export interface User {
  id: number;
  email: string;
  username: string;
  nome: string;
}

export async function getUser() {
  try {
    const { url } = USER_GET();

    const token = cookies().get("token")?.value;

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60 * 60,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar usuário");
    }

    const data = (await response.json()) as User;

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
