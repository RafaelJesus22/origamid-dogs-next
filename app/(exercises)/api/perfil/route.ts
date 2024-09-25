"use server";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body?.token) {
    return Response.json({ error: "token not found" });
  }

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    headers: {
      Authorization: `Bearer ${body?.token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return Response.json({ error: "Server error" });
  }

  return Response.json(data);
}
