import { Metadata } from "next";

import LoginForm from "@/components/custom/login/login-form";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site Dogs.",
};

export default async function LoginPage() {
  return (
    <main>
      <h1 className="title">Login</h1>
      <LoginForm />
    </main>
  );
}
