"use server";

import { revalidatePath } from "next/cache";

const baseUrl = "https://api.origamid.online/produtos";

interface Product {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(baseUrl, {
      next: {
        revalidate: 60 * 60 * 3,
      },
    });

    const data = await response.json();

    const products = data.map((product: Product) => {
      return {
        ...product,
        preco: product?.preco?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      };
    });

    return products as Product[];
  } catch (err) {
    console.log(err);

    return [];
  }
}

export async function addProduct(product: Omit<Product, "importado">) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...product,
        importado: 0,
      }),
    });

    if (!response.ok) {
      return { error: "could not add" };
    }

    revalidatePath("/produtos");
  } catch (e) {
    console.log("Deu ruim", e);
  }
}
