"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { applyTheme, getSavedTheme } from "@/src/styles/theme.js";

const themeChangeEvent = "espacos-acolhedores-theme-change";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/explore", label: "Explorar" },
  { href: "/map", label: "Mapa" },
  { href: "/forum", label: "Fórum" },
  { href: "/rights", label: "Informações e Direitos" },
];

export default function Header({ activePath }: { activePath?: string }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [temaClaro, setTemaClaro] = useState(false);

  useEffect(() => {
    const temaInicial = getSavedTheme();
    applyTheme(temaInicial);
    queueMicrotask(() => setTemaClaro(temaInicial === "light"));

    function sincronizarTema() {
      const temaAtual =
        document.documentElement.dataset.theme === "light" ? "light" : "dark";
      setTemaClaro(temaAtual === "light");
    }

    window.addEventListener(themeChangeEvent, sincronizarTema);
    window.addEventListener("storage", sincronizarTema);

    return () => {
      window.removeEventListener(themeChangeEvent, sincronizarTema);
      window.removeEventListener("storage", sincronizarTema);
    };
  }, []);

  function alternarTema() {
    const proximoTema = temaClaro ? "dark" : "light";
    applyTheme(proximoTema);
    window.dispatchEvent(new Event(themeChangeEvent));

    try {
      localStorage.setItem("espacos-acolhedores-theme", proximoTema);
    } catch (error) {
      console.error("Não foi possível salvar a preferência de tema.", error);
    }
  }

  return (
    <>
      <a href="#conteudo" className="sr-only">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
              </svg>
            </span>
            <span>Espaços Acolhedores</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <nav
            className={`main-nav${menuAberto ? " open" : ""}`}
            id="menu-principal"
            aria-label="Navegação principal"
          >
            {navigation.map(({ href, label }) => (
              <Link
                className="nav-link"
                href={href}
                aria-current={activePath === href ? "page" : undefined}
                key={href}
                onClick={() => setMenuAberto(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              aria-label="Alternar tema"
              aria-pressed={temaClaro}
              title={temaClaro ? "Usar modo escuro" : "Usar modo claro"}
              onClick={alternarTema}
            >
              {temaClaro ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              )}
            </button>
            <Link
              className="account-btn"
              href="/login"
              aria-label="Entrar"
              aria-current={activePath === "/login" ? "page" : undefined}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <path d="m10 17 5-5-5-5m5 5H3" />
              </svg>
              <span className="account-label">Entrar</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
