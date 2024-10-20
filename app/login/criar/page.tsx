import SingUpForm from "@/components/custom/login/login-criar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Cria sua conta no site Dogs.",
};

export default async function CriarPage() {
  return (
    <main className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <SingUpForm />
    </main>
  );
}
