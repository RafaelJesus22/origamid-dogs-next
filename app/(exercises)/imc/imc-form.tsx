"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const imcSchema = z.object({
  weight: z.coerce.number(),
  height: z.coerce.number(),
});

type ImcForm = z.infer<typeof imcSchema>;

export default function ImcForm() {
  const [imc, setImc] = useState(0);

  const form = useForm<ImcForm>({
    resolver: zodResolver(imcSchema),
  });

  function calculate(data: ImcForm) {
    console.log(data);

    setImc(data.weight / (data.height * data.height));
  }

  return (
    <div>
      {imc > 0 && <h2>Seu imc é {imc.toFixed(2)}</h2>}

      <label htmlFor="weight" className="block mt-4">
        Peso
      </label>
      <input
        className="outline-none p-3 bg-slate-200 rounded-md w-full text-slate-800 border border-solid border-slate-400"
        {...form.register("weight")}
        placeholder="84.50"
        type="number"
      />

      <label htmlFor="weight" className="block mt-4">
        Altura
      </label>
      <input
        {...form.register("height")}
        placeholder="1.92"
        type="number"
        className="outline-none p-3 bg-slate-200 rounded-md w-full text-slate-800 border border-solid border-slate-400"
      />

      <button
        className="bg-emerald-500 outline-none p-4 rounded-lg  w-full mt-8 font-bold text-lg cursor-pointer"
        onClick={form.handleSubmit(calculate)}
      >
        Calcular Imc
      </button>
    </div>
  );
}
