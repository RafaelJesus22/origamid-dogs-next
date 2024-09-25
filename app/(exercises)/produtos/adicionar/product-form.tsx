"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { addProduct } from "../../actions/produtos";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const productSchema = z.object({
  name: z.string({ required_error: "O nome é obrigatório" }),
  price: z.coerce.number().min(0, "O valor deve ser maior que R$ 0,00"),
  description: z.string({ required_error: "Fornece a descrição do produto" }),
  availableAmount: z.coerce.number(),
});

type ProductForm = z.infer<typeof productSchema>;

export default function ProductForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const { register, handleSubmit } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
  });

  async function onSubmit(data: ProductForm) {
    setIsLoading(true);
    await addProduct({
      descricao: data.description,
      estoque: data.availableAmount,
      nome: data.name,
      preco: data.price,
    });

    setIsLoading(false);
    push("/produtos");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-6 mt-8"
    >
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input placeholder="Nome do produto" {...register("name")} />
      </div>

      <div>
        <Label>Preço</Label>
        <Input placeholder="R$ 0,00" type="number" {...register("price")} />
      </div>

      <div>
        <Label>Descrição</Label>
        <Textarea
          placeholder="Descrição do produto"
          {...register("description")}
        />
      </div>

      <div>
        <Label>Quantidade em estoque</Label>
        <Input
          placeholder="400"
          type="number"
          {...register("availableAmount")}
        />
      </div>

      <Button
        className="bg-purple-600 hover:bg-purple-900"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Adicionar"
        )}
      </Button>
    </form>
  );
}
