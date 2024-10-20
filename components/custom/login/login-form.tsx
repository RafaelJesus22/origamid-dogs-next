"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";

import ErrorMessage from "@/components/custom/helper/error-message";
import Button from "@/components/custom/forms/button";
import Input from "@/components/custom/forms/input";
import { login } from "@/actions/login";

import styles from "./login-form.module.css";

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
        <form action={action} className={styles.form}>
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
          <ErrorMessage error={state.error} />
          <FormButton />
        </form>
      </section>

      <section>
        <Link className={styles.perdeu} href="/login/perdeu">
          Perdeu a senha?
        </Link>
      </section>

      <section className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </section>
    </>
  );
}
