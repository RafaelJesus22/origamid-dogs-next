import type { Metadata } from "next";

import { type_second } from "@/functions/fonts";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { UserContextProvider } from "@/context/user-context";
import { getUser } from "@/actions/get-user";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getUser();

  return (
    <html lang="pt-BR">
      <body className={`${type_second.variable}`}>
        <UserContextProvider user={data}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
