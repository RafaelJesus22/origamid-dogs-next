"use client";

import { useFormState, useFormStatus } from "react-dom";

import ErrorMessage from "@/components/custom/helper/error-message";
import Button from "@/components/custom/forms/button";
import Input from "@/components/custom/forms/input";
import { passwordLost } from "@/actions/password-lost";

import styles from "./login-form.module.css";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? "Enviando..." : "Enviar email"}
    </Button>
  );
}

export default function ForgotPasswordForm() {
  const [url, setUrl] = useState("");
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <section>
      <form action={action} className={styles.form}>
        <Input label="Usuário / Usuário" type="text" name="login" />
        <input type="hidden" name="url" value={url} />

        <ErrorMessage error={state.error} />

        {state.ok ? (
          <p className="text-green-600">E-mail enviado.</p>
        ) : (
          <FormButton />
        )}
      </form>
    </section>
  );
}
