"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormField from "./_subcomponents/FormField";
import PasswordInput from "./_subcomponents/PasswordInput";
import { Sessao } from "@/app/_lib/sessao";
import { mostrarToast } from "@/app/_lib/toast";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

type Erros = { email?: string; senha?: string; confirmar?: string };

export default function Main() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [termos, setTermos] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [msg, setMsg] = useState<{ tipo: "success" | "error"; texto: string } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novosErros: Erros = {};
    if (!EMAIL_RE.test(email.trim())) novosErros.email = "E-mail inválido.";
    if (senha.length < 6) novosErros.senha = "Mínimo de 6 caracteres.";
    if (senha !== confirmar) novosErros.confirmar = "As senhas não coincidem.";

    setErros(novosErros);

    let ok = Object.keys(novosErros).length === 0;
    if (!termos) {
      mostrarToast("É necessário aceitar os termos.");
      ok = false;
    }
    if (!ok) {
      setMsg(null);
      return;
    }

    Sessao.set({ email: email.trim(), nome: email.trim().split("@")[0] });
    setMsg({ tipo: "success", texto: "Conta demonstrativa criada com sucesso!" });
    setTimeout(() => router.push("/forum"), 900);
  }

  return (
    <main id="conteudo" className="auth-wrap">
      <div className="auth-card">
        <h1>Criar conta</h1>
        <p className="muted auth-sub">Cadastro demonstrativo. Não utilize dados pessoais reais.</p>
        <form id="form-cadastro" noValidate onSubmit={handleSubmit}>
          <div
            className={`form-msg${msg ? ` ${msg.tipo} show` : ""}`}
            id="form-msg"
            role="alert"
          >
            {msg?.texto}
          </div>
          <FormField id="cad-email" label="E-mail">
            <input
              className={`input${erros.email ? " invalid" : ""}`}
              id="cad-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={`field-error${erros.email ? " show" : ""}`}>{erros.email}</span>
          </FormField>
          <FormField id="cad-senha" label="Senha">
            <PasswordInput
              id="cad-senha"
              name="senha"
              autoComplete="new-password"
              placeholder="Mínimo de 6 caracteres"
              value={senha}
              invalid={Boolean(erros.senha)}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className={`field-error${erros.senha ? " show" : ""}`}>{erros.senha}</span>
          </FormField>
          <FormField id="cad-confirmar" label="Confirmar senha">
            <PasswordInput
              id="cad-confirmar"
              name="confirmar"
              autoComplete="new-password"
              placeholder="Repita a senha"
              value={confirmar}
              invalid={Boolean(erros.confirmar)}
              onChange={(e) => setConfirmar(e.target.value)}
            />
            <span className={`field-error${erros.confirmar ? " show" : ""}`}>
              {erros.confirmar}
            </span>
          </FormField>
          <div className="form-group checkbox-row">
            <input
              id="cad-termos"
              name="termos"
              type="checkbox"
              checked={termos}
              onChange={(e) => setTermos(e.target.checked)}
            />
            <label htmlFor="cad-termos">
              Li e aceito os <a href="termos.html">Termos de uso</a> e a{" "}
              <a href="privacidade.html">Política de privacidade</a>.
            </label>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Criar conta
          </button>
        </form>
        <p className="auth-foot small">
          Já tem conta? <Link href="/login">Entrar</Link>
        </p>
      </div>
    </main>
  );
}
