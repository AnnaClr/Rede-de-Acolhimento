"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import FilterChip from "./_subcomponents/FilterChip";
import FilterSelect from "./_subcomponents/FilterSelect";
import { DADOS } from "@/app/_lib/dados";

const categories = [
  { label: "Todas", category: "todas" },
  { label: "Acolhimento", category: "acolhimento" },
  { label: "Saúde", category: "saude" },
  { label: "Assistência", category: "assistencia" },
  { label: "Cultura", category: "cultura" },
  { label: "Eventos", category: "eventos" },
  { label: "Organizações", category: "organizacoes" },
  { label: "Serviços públicos", category: "servicos" },
  { label: "Informações e Direitos", category: "direitos" },
];

export default function Main() {
  const searchParams = useSearchParams();

  const [busca, setBusca] = useState(searchParams.get("q") || "");
  const [filtroCat, setFiltroCat] = useState("todas");
  const [categoria, setCategoria] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [tipo, setTipo] = useState("");

  const tipos = useMemo(
    () => [...new Set(DADOS.espacos.map((e) => e.tipo))],
    []
  );

  const filtrados = useMemo(() => {
    const q = busca.toLowerCase().trim();
    return DADOS.espacos.filter((item) => {
      if (q && !item.nome.toLowerCase().includes(q) && !item.descricao.toLowerCase().includes(q)) {
        return false;
      }
      if (filtroCat !== "todas" && item.categoria !== filtroCat) return false;
      if (categoria && item.categoria !== categoria) return false;
      if (municipio && item.municipio !== municipio) return false;
      if (tipo && item.tipo !== tipo) return false;
      return true;
    });
  }, [busca, filtroCat, categoria, municipio, tipo]);

  function limparFiltros() {
    setBusca("");
    setCategoria("");
    setMunicipio("");
    setTipo("");
    setFiltroCat("todas");
  }

  return (
    <main id="conteudo" className="container section">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <span>Explorar</span>
      </div>
      <h1>Explorar</h1>
      <p className="muted" style={{ maxWidth: "60ch", marginBottom: 32 }}>
        Descubra espaços, serviços, organizações, eventos e conteúdos sobre direitos na região.
      </p>

      <div className="searchbar" style={{ maxWidth: "100%", marginBottom: 24 }}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <label htmlFor="filtro-busca" className="sr-only">
          Buscar por palavra-chave
        </label>
        <input
          id="filtro-busca"
          type="search"
          placeholder="Buscar por palavra-chave…"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="filters" role="group" aria-label="Filtros por categoria">
        {categories.map(({ label, category }) => (
          <FilterChip
            key={category}
            label={label}
            category={category}
            active={category === filtroCat}
            onClick={setFiltroCat}
          />
        ))}
      </div>

      <div className="filters">
        <FilterSelect
          id="filtro-categoria"
          label="Categoria"
          placeholder="Todas as categorias"
          options={DADOS.categorias.map((c) => ({ value: c.id, label: c.nome }))}
          value={categoria}
          onChange={setCategoria}
        />
        <FilterSelect
          id="filtro-municipio"
          label="Município"
          placeholder="Todos os municípios"
          options={DADOS.municipios.map((m) => ({ value: m, label: m }))}
          value={municipio}
          onChange={setMunicipio}
        />
        <FilterSelect
          id="filtro-tipo"
          label="Tipo de serviço"
          placeholder="Todos os tipos"
          options={tipos.map((t) => ({ value: t, label: t }))}
          value={tipo}
          onChange={setTipo}
        />
        <button className="btn btn-ghost btn-sm" id="limpar-filtros" type="button" onClick={limparFiltros}>
          Limpar filtros
        </button>
      </div>

      <div className="section-head" style={{ marginBottom: 16 }}>
        <p className="small muted" id="contagem">
          {filtrados.length} resultado{filtrados.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-3" id="resultados">
        {filtrados.length === 0 ? (
          <div className="empty-state" style={{ gridColumn: "1/-1" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <h3>Nenhum resultado encontrado</h3>
            <p>Tente ajustar a busca ou remover alguns filtros.</p>
          </div>
        ) : (
          filtrados.map((item) => {
            const cat = DADOS.categorias.find((c) => c.id === item.categoria);
            return (
              <article className="result-card" key={item.id}>
                <div className="result-head">
                  <span className="tag" data-cat={item.categoria}>
                    {cat?.nome || item.categoria}
                  </span>
                  <span className="small muted">{item.municipio}</span>
                </div>
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                <div className="result-meta">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="14"
                      height="14"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.tipo}
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="14"
                      height="14"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {item.horario}
                  </span>
                </div>
                <div className="result-actions">
                  <Link className="btn btn-primary btn-sm" href={`/map?id=${item.id}`}>
                    Ver no mapa
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </div>
    </main>
  );
}
