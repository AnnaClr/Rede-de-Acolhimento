"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ForumSideCard from "./_subcomponents/ForumSideCard";
import FormField from "./_subcomponents/FormField";
import { DADOS, type Thread } from "@/app/_lib/dados";
import { Sessao, useSessao } from "@/app/_lib/sessao";
import { mostrarToast } from "@/app/_lib/toast";

export default function Main() {
  const router = useRouter();

  const sessao = useSessao();
  const [threads, setThreads] = useState<Thread[]>(DADOS.threads);
  const [titulo, setTitulo] = useState("");
  const [corpo, setCorpo] = useState("");

  function handleDenunciar() {
    mostrarToast("Denúncia demonstrativa registrada. Obrigado pelo cuidado.");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!Sessao.get()) {
      router.push("/login");
      return;
    }

    const tituloTrim = titulo.trim();
    const corpoTrim = corpo.trim();
    if (!tituloTrim || !corpoTrim) {
      mostrarToast("Preencha título e conteúdo.");
      return;
    }

    const novo: Thread = {
      id: "t" + Date.now(),
      titulo: tituloTrim,
      autor: Sessao.get()!.email.split("@")[0],
      data: new Date().toISOString().slice(0, 10),
      respostas: 0,
      categoria: "acolhimento",
      resumo: corpoTrim.slice(0, 140) + (corpoTrim.length > 140 ? "…" : ""),
    };

    setThreads((prev) => [novo, ...prev]);
    setTitulo("");
    setCorpo("");
    mostrarToast("Publicação demonstrativa criada.");
  }

  return (
    <main id="conteudo" className="container section">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <span>Fórum</span>
      </div>
      <h1>Fórum comunitário</h1>
      <p className="muted" style={{ maxWidth: "60ch", marginBottom: 32 }}>
        Um espaço de troca, escuta e apoio mútuo. A leitura é pública; para participar, é necessário
        entrar.
      </p>

      <div className="forum-layout">
        <div>
          <div id="forum-login-gate" className="card" style={{ marginBottom: 24 }} hidden={Boolean(sessao)}>
            <h3>Participe da conversa</h3>
            <p>Para criar publicações e responder, entre na sua conta demonstrativa.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/login">
                Entrar
              </Link>
              <Link className="btn btn-secondary" href="/signup">
                Criar conta
              </Link>
            </div>
          </div>

          <div id="forum-main" hidden={!sessao}>
            <form
              className="card post-form"
              id="form-nova-thread"
              style={{ marginBottom: 24 }}
              onSubmit={handleSubmit}
            >
              <h3 style={{ marginTop: 0 }}>Nova publicação</h3>
              <FormField id="thread-titulo" label="Título">
                <input
                  className="input"
                  id="thread-titulo"
                  type="text"
                  placeholder="Qual é o assunto?"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </FormField>
              <FormField id="thread-corpo" label="Conteúdo">
                <textarea
                  className="input"
                  id="thread-corpo"
                  placeholder="Compartilhe sua mensagem com cuidado e respeito."
                  value={corpo}
                  onChange={(e) => setCorpo(e.target.value)}
                />
              </FormField>
              <button className="btn btn-primary" type="submit">
                Publicar
              </button>
            </form>
          </div>

          <h2>Discussões recentes</h2>
          <div
            id="lista-threads"
            style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}
          >
            {threads.map((t) => (
              <article className="thread-item" key={t.id}>
                <div className="thread-avatar" aria-hidden="true">
                  {t.autor.charAt(0)}
                </div>
                <div className="thread-body">
                  <h3>
                    <a href="#">{t.titulo}</a>
                  </h3>
                  <p className="thread-excerpt">{t.resumo}</p>
                  <div className="thread-meta">
                    <span>por {t.autor}</span>
                    <span>{t.data}</span>
                    <span>{t.respostas} respostas</span>
                    <span className="tag" data-cat={t.categoria} style={{ fontSize: "0.7rem" }}>
                      {t.categoria}
                    </span>
                  </div>
                </div>
                <button
                  className="btn btn-ghost btn-sm"
                  data-action="denunciar"
                  data-id={t.id}
                  type="button"
                  onClick={handleDenunciar}
                >
                  Denunciar
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside>
          <ForumSideCard title="Convivência">
            <ul>
              <li>Respeite a diversidade e as experiências de cada pessoa.</li>
              <li>Evite expor dados pessoais sensíveis.</li>
              <li>Conteúdos abusivos podem ser denunciados.</li>
            </ul>
          </ForumSideCard>
          <ForumSideCard title="Privacidade e moderação">
            <p className="small">
              A leitura é pública. A participação exige autenticação. Denúncias são tratadas de forma
              demonstrativa neste protótipo.
            </p>
          </ForumSideCard>
        </aside>
      </div>
    </main>
  );
}
