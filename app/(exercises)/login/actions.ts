/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

const baseUrl = "http://localhost:3000/api";

export async function loginAction({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    const data = await response.json();

    if (data.error) {
      return { message: data.error, success: false, data: {} };
    }

    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
    });

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
    const token = cookies().get("token");

    const response: any = await fetch(`${baseUrl}/perfil`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token?.value }),
    });
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    return { error, autorizado: false };
  }
}
