/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import * as actions from "./actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
});

type Form = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push } = useRouter();

  const { handleSubmit, register } = useForm<Form>({
    resolver: zodResolver(loginFormSchema),
  });

  async function formSubmit(data: Form) {
    setError("");
    setIsLoading(true);
    const response = await actions.login(data);

    setIsLoading(false);

    if (!response.success) {
      setError(response.message);
    } else {
      push("/login/profile");
    }
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label htmlFor="weight" className="block mt-4">
        Usuário
      </label>
      <input
        className="outline-none p-3 bg-slate-200 rounded-md w-full text-slate-800 border border-solid border-slate-400"
        {...register("username")}
        placeholder="@username"
      />

      <label htmlFor="weight" className="block mt-4">
        Senha
      </label>
      <input
        {...register("password")}
        placeholder="********"
        type="password"
        className="outline-none p-3 bg-slate-200 rounded-md w-full text-slate-800 border border-solid border-slate-400"
      />

      <button
        className="bg-emerald-500 outline-none p-4 rounded-lg  w-full mt-8 font-bold text-lg cursor-pointer"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Carregando..." : "Entrar"}
      </button>

      {!!error && (
        <div className="px-4 py-12 rounded bg-red-100 mt-8">
          <p
            className="font-bold text-red-900 text-center cursor-pointer"
            onClick={() => setError("")}
          >
            {error}
          </p>
        </div>
      )}
    </form>
  );
}
