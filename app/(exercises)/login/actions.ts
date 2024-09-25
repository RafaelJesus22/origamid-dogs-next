/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

const baseUrl = "https://api.origamid.online";

function getCookie(key: string) {
  return cookies().get(key)?.value;
}

function setCookie(key: string, value: string) {
  return cookies().set(key, value, {
    httpOnly: true,
    secure: true,
  });
}

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const response = await fetch(`${baseUrl}/conta/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      return { message: "invalid user", success: false, data: {} };
    }

    const data = await response.json();

    setCookie("token", data.token);

    return { message: "usuário logado com sucesso", success: true, data: {} };
  } catch (error) {
    return { message: String(error), success: false };
  }
}

export async function getProfile(): Promise<{
  autorizado: boolean;
  usuario?: string;
  error?: any;
}> {
  try {
    const token = getCookie("token");

    if (!token) {
      return { error: "token not found", autorizado: false };
    }

    const response: any = await fetch(`${baseUrl}/conta/perfil`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { error, autorizado: false };
  }
}
