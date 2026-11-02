import Link from "next/link";
import FilterSelect from "./_subcomponents/FilterSelect";

export default function Main() {
  return (
    <main id="conteudo" className="container section">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <Link href="/explore">Explorar</Link>
        <span className="sep">/</span>
        <span>Eventos</span>
      </div>
      <h1>Agenda de eventos</h1>
      <p className="muted" style={{ maxWidth: "60ch", marginBottom: 32 }}>
        Encontros, oficinas e atividades comunitárias demonstrativas.
      </p>

      <div className="filters">
        <FilterSelect id="ev-cat" label="Categoria" placeholder="Todas as categorias" />
        <FilterSelect id="ev-mun" label="Município" placeholder="Todos os municípios" />
      </div>

      <div className="agenda-list" id="lista-eventos" />
    </main>
  );
}
