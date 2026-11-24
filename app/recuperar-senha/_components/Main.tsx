"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export default function Main() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ tipo: "success" | "error"; texto: string } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setMsg({ tipo: "error", texto: "Informe um e-mail válido." });
      return;
    }

    setMsg({
      tipo: "success",
      texto: "Se o e-mail existir em nossa base demonstrativa, enviaremos instruções.",
    });
    setEmail("");
  }

  return (
    <main id="conteudo" className="auth-wrap">
      <div className="auth-card">
        <h1>Recuperar senha</h1>
        <p className="muted auth-sub">Informe seu e-mail para receber instruções demonstrativas.</p>
        <form id="form-recuperar" noValidate onSubmit={handleSubmit}>
          <div
            className={`form-msg${msg ? ` ${msg.tipo} show` : ""}`}
            id="form-msg"
            role="alert"
          >
            {msg?.texto}
          </div>
          <div className="form-group">
            <label htmlFor="rec-email">E-mail</label>
            <input
              className="input"
              id="rec-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Solicitar recuperação
          </button>
        </form>
        <p className="auth-foot small">
          <Link href="/login">Voltar para o login</Link>
        </p>
      </div>
    </main>
  );
}
