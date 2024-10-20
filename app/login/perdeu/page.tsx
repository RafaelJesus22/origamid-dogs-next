import ForgotPasswordForm from "@/components/custom/login/login-perdeu-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere a sua senha.",
};

export default async function PerdeuPage() {
  return (
    <main className="animeLeft">
      <h1 className="title">Perdeu a senha</h1>
      <ForgotPasswordForm />
    </main>
  );
}
