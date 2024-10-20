"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

import ErrorMessage from "@/components/custom/helper/error-message";
import Button from "@/components/custom/forms/button";
import Input from "@/components/custom/forms/input";
import { singUp } from "@/actions/post-singup";

import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>{pending ? "Cadastrando" : "Cadastrar"}</Button>
  );
}

export default function SingUpForm() {
  const [state, action] = useFormState(singUp, {
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
    <section>
      <form action={action} className={styles.form}>
        <Input
          label="Usuário"
          type="text"
          placeholder="usuário"
          name="username"
        />
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="dog@email.com"
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
  );
}
