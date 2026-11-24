"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormField from "./_subcomponents/FormField";
import { Sessao } from "@/app/_lib/sessao";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

type Erros = { email?: string; senha?: string };

export default function Main() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [msg, setMsg] = useState<{ tipo: "success" | "error"; texto: string } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novosErros: Erros = {};
    if (!EMAIL_RE.test(email.trim())) {
      novosErros.email = "Informe um e-mail válido.";
    }
    if (senha.length < 6) {
      novosErros.senha = "A senha deve ter ao menos 6 caracteres.";
    }
    setErros(novosErros);
    if (novosErros.email || novosErros.senha) {
      setMsg(null);
      return;
    }

    Sessao.set({ email: email.trim(), nome: email.trim().split("@")[0] });
    setMsg({ tipo: "success", texto: "Login demonstrativo realizado. Redirecionando ao fórum…" });
    setTimeout(() => router.push("/forum"), 800);
  }

  return (
    <main id="conteudo" className="auth-wrap">
      <div className="auth-card">
        <h1>Entrar</h1>
        <p className="muted auth-sub">
          Acesse sua conta demonstrativa para participar do fórum.
        </p>
        <form id="form-login" noValidate onSubmit={handleSubmit}>
          <div
            className={`form-msg${msg ? ` ${msg.tipo} show` : ""}`}
            id="form-msg"
            role="alert"
          >
            {msg?.texto}
          </div>
          <FormField id="login-email" label="E-mail">
            <input
              className={`input${erros.email ? " invalid" : ""}`}
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={`field-error${erros.email ? " show" : ""}`}>{erros.email}</span>
          </FormField>
          <FormField id="login-senha" label="Senha">
            <div className="input-wrap">
              <input
                className={`input${erros.senha ? " invalid" : ""}`}
                id="login-senha"
                name="senha"
                type={mostrarSenha ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                className="toggle-pass"
                type="button"
                aria-label="Mostrar senha"
                onClick={() => setMostrarSenha((v) => !v)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
            <span className={`field-error${erros.senha ? " show" : ""}`}>{erros.senha}</span>
          </FormField>
          <button className="btn btn-primary btn-block" type="submit">
            Entrar
          </button>
          <div className="auth-links">
            <Link href="/recuperar-senha">Esqueci a senha</Link>
            <Link href="/signup">Criar conta</Link>
          </div>
        </form>
        <p className="auth-foot small">Autenticação demonstrativa. Não use senhas reais.</p>
      </div>
    </main>
  );
}
