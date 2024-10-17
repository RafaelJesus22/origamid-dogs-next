"use client";

import { login } from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";
import Link from "next/link";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>{pending ? "Carregando" : "Entrar"}</Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) {
      window.location.href = "/conta";
    }
  }, [state.ok]);

  return (
    <>
      <section>
        <form action={action}>
          <Input
            label="Usuário"
            type="text"
            placeholder="usuário"
            name="username"
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="senha"
          />
          <FormButton />

          <ErrorMessage error={state.error} />
        </form>
      </section>

      <section>
        <Link href="/login/perdeu">Perdeu a senha?</Link>
      </section>
    </>
  );
}
