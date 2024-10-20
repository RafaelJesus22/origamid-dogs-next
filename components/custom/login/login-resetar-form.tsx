"use client";

import { useFormState, useFormStatus } from "react-dom";

import { passwordReset } from "@/actions/password-reset";
import ErrorMessage from "@/components/custom/helper/error-message";
import Button from "@/components/custom/forms/button";
import Input from "@/components/custom/forms/input";

import styles from "./login-form.module.css";

interface Props {
  keyToken: string;
  login: string;
}

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? "Resetando..." : "Resetar senha"}
    </Button>
  );
}

export default function ResetPasswordForm({ keyToken, login }: Props) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <section>
      <form action={action} className={styles.form}>
        <Input label="Nova senha" type="password" name="password" />
        <input type="hidden" name="key" value={keyToken} />
        <input type="hidden" name="login" value={login} />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>
    </section>
  );
}
