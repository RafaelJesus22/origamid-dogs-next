import ResetPasswordForm from "@/components/custom/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha.",
};

export default async function ResetarPage({
  searchParams,
}: {
  searchParams: { key: string; login: string };
}) {
  return (
    <main className="animeLeft">
      <h1 className="title">Reset a senha</h1>
      <ResetPasswordForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </main>
  );
}
