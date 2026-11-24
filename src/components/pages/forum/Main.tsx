import Link from "next/link";

export default function Main() {
  return (
    <main id="conteudo" className="container section forum-page">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <span>Fórum</span>
      </div>
      <h1>Fórum comunitário</h1>

      <section className="forum-status" aria-labelledby="forum-status-title">
        <span className="forum-status-label">Em desenvolvimento</span>
        <h2 id="forum-status-title">Estamos preparando este espaço</h2>
        <p>
          O fórum ainda não está disponível. Estamos trabalhando para criar um
          ambiente de troca, escuta e apoio mútuo para a comunidade.
        </p>
        <Link className="btn btn-primary btn-sm" href="/explore">
          Explorar espaços e serviços
        </Link>
      </section>
    </main>
  );
}
