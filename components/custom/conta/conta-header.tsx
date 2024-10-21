"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import FeedIcon from "@/icons/feed-icon";
import EstatisticasIcon from "@/icons/estatisticas-icon";
import AdicionarIcon from "@/icons/adicionar-icon";
import SairIcon from "@/icons/sair-icon";

import { useUserContext } from "@/context/user-context";
import { logout } from "@/actions/logout";
import useMedia from "@/hooks/use-media";

import styles from "./conta-header.module.css";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";
    case "/conta/estatisticas":
      return "Estatísticas";
    default:
      return "Minha Conta";
  }
}

export default function ContaHeader() {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { setUser } = useUserContext();
  const mobile = useMedia("(max-width: 40rem)");
  const pathname = usePathname();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticasIcon />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <AdicionarIcon />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
